import React, { useState, useEffect } from "react";
import AddEmployeeInformation from "./Add";
import Displayemployee from "./Displayemployee";
import Editemployee from "./Editemployee";
import Tabs from "./Tabs";
import axios from "axios";

const Homepage = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployeeId, setCurrentEmployeeId] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    Name: "",
    Email: "",
    Number: "",
    Image: "",
    Position: "",
    idNumber: "",
    Gender: "",
    City: "",
    Province: "",
    Zipcode: "",
  });

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/getEmployees");
      const data = response.data.data;
      setEmployees(data);
      localStorage.setItem("employees", JSON.stringify(data));
    } catch (error) {
      console.error("Error fetching employees:", error);
    }
  };

  useEffect(() => {
    const storedEmployees = localStorage.getItem("employees");
    if (storedEmployees) {
      setEmployees(JSON.parse(storedEmployees));
    } else {
      fetchEmployees();
    }
  }, []);

  const handleSubmit = async (employeeData) => {
    try {
      if (isEditing) {
        await axios.put(`http://localhost:5000/api/updateEmployee/${currentEmployeeId}`, employeeData);
        alert("Employee Updated Successfully!");
      } else {
        await axios.post("http://localhost:5000/api/addEmployee", employeeData);
        alert("Employee Added Successfully!");
      }
      await fetchEmployees();
      resetForm();
    } catch (error) {
      console.error("Error submitting employee data:", error);
    }
  };

  const resetForm = () => {
    setNewEmployee({
      Name: "",
      Email: "",
      Number: "",
      Image: "",
      Position: "",
      idNumber: "",
      Gender: "",
      City: "",
      Province: "",
      Zipcode: "",
    });
    setIsEditing(false);
    setCurrentEmployeeId(null);
    setSelectedEmployee(null);
  };

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployee(employee);
    setIsEditing(true);
    setCurrentEmployeeId(employee.idNumber);
    setNewEmployee(employee);
  };

  const deleteEmployee = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteEmployee/${id}`);
      setEmployees((prevEmployees) => prevEmployees.filter((employee) => employee.id !== id));
      alert("Employee deleted successfully!");
      resetForm();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const tabs = [
    {
      label: "Add Employee",
      content: <AddEmployeeInformation add={handleSubmit} newEmployee={newEmployee} setNewEmployee={setNewEmployee} />,
    },
    {
      label: "Display Employees",
      content: <Displayemployee employees={employees} removeEmployee={deleteEmployee} onSelect={handleEmployeeSelect} />,
    },
    {
      label: "Edit Employee",
      content: <Editemployee selectedEmployee={selectedEmployee} updateEmployee={handleSubmit} clearSelectedEmployee={resetForm} />,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default Homepage;
