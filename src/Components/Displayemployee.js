import React, { useState, useEffect } from "react";
import axios from "axios";
import Editemployee from "./Editemployee";

function Displayemployee() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchId, setSearchId] = useState(""); 
  const [activeTab, setActiveTab] = useState("list");
  const [statusMessage, setStatusMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEmployees = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/api/getEmployees");
        if (response.data && Array.isArray(response.data.data)) {
          setEmployees(response.data.data);
        } else {
          console.error("Expected an array inside response.data.data but got:", response.data);
          setEmployees([]);
        }
      } catch (error) {
        console.error("Error fetching employees:", error);
        setEmployees([]);
        alert("Error fetching employees. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const filterEmployee = () => {
    const foundEmployee = employees.find((employee) => employee._id === searchId);
    if (foundEmployee) {
      setSelectedEmployee(foundEmployee);
      setActiveTab("edit");
    } else {
      alert("Employee not found!");
    }
  };

  const clearSelectedEmployee = () => {
    setSelectedEmployee(null);
    setSearchId("");
    setActiveTab("list");
  };

  const handleUpdateEmployee = async (updatedEmployee) => {
    setStatusMessage("");
    setLoading(true);

    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateEmployee/${updatedEmployee._id}`,
        updatedEmployee
      );

      if (response.status === 200) {
        setEmployees((prevEmployees) =>
          prevEmployees.map((employee) =>
            employee._id === updatedEmployee._id ? { ...employee, ...updatedEmployee } : employee
          )
        );
        setStatusMessage("Employee updated successfully!");
      } else {
        throw new Error("Failed to update employee");
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      const errorMessage = error.response
        ? error.response.data.error || error.response.statusText
        : error.message;
      setStatusMessage(`Error updating employee: ${errorMessage}`);
    } finally {
      setLoading(false);
    }
    clearSelectedEmployee();
  };

  const deleteEmployee = async (id) => {
    setStatusMessage("");
    setLoading(true);

    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/employees/${id}`);
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee._id !== id)
      );
      setStatusMessage("Employee deleted successfully.");
    } catch (error) {
      console.error("Error deleting employee:", error);
      setStatusMessage("Error deleting employee.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Employee History</h1>
      <div className="tabs">
        <button
          onClick={() => setActiveTab("list")}
          className={activeTab === "list" ? "active" : ""}
        >
          Employee List
        </button>
        <button
          onClick={() => setActiveTab("edit")}
          className={activeTab === "edit" ? "active" : ""}
        >
          Edit Employee
        </button>
      </div>

      {statusMessage && <p>{statusMessage}</p>}

      {loading && <p>Loading...</p>}

      {activeTab === "list" && (
        <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Employee ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <button onClick={filterEmployee}>Search</button>
          </div>

          <div className="employee-list">
            {employees.length > 0 ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Number</th>
                    <th>Position</th>
                    <th>ID Number</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>Zip Code</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee, index) => (
                    <tr key={`${employee._id}-${index}`}>
                      <td>{employee.Name}</td>
                      <td>{employee.Email}</td>
                      <td>{employee.Number}</td>
                      <td>{employee.Position}</td>
                      <td>{employee.idNumber}</td>
                      <td>{employee.Gender}</td>
                      <td>{employee.City}</td>
                      <td>{employee.Province}</td>
                      <td>{employee.ZipCode}</td>
                      <td>
                        <button
                          onClick={() => {
                            setSelectedEmployee(employee);
                            setActiveTab("edit");
                          }}
                        >
                          Edit
                        </button>
                        <button onClick={() => deleteEmployee(employee._id)}>
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No employees found.</p>
            )}
          </div>
        </div>
      )}

      {activeTab === "edit" && selectedEmployee && (
        <Editemployee
          selectedEmployee={selectedEmployee}
          updateEmployee={handleUpdateEmployee}
          clearSelectedEmployee={clearSelectedEmployee}
        />
      )}
    </div>
  );
}

export default Displayemployee;
