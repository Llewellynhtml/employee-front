import React, { useState, useEffect } from "react";
import axios from "axios";

function Editemployee({ selectedEmployee, updateEmployee, clearSelectedEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState(""); // The actual ID for updating employee
  const [idNumber, setIdNumber] = useState(""); // The idNumber field (can stay in the form)
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if (selectedEmployee) {
      setName(selectedEmployee.Name);
      setEmail(selectedEmployee.Email);
      setNumber(selectedEmployee.Number);
      setPosition(selectedEmployee.Position);
      setId(selectedEmployee._id);  // Set id (the one for updating)
      setIdNumber(selectedEmployee.idNumber);  // Keep idNumber as a field
      setGender(selectedEmployee.Gender);
      setCity(selectedEmployee.City);
      setProvince(selectedEmployee.Province);
      setZipCode(selectedEmployee.Zipcode);
    }
  }, [selectedEmployee]);

  const CancelEdit = () => {
    clearSelectedEmployee();
  };

  const UpdateEmployee = async () => {
    if (!name || !email || !number || !position || !id || !gender || !city || !province || !zipCode) {
      alert("Please fill out all required fields.");
      return;
    }

    const updatedEmployee = {
      Name: name,
      Email: email,
      Number: number,
      Position: position,
      idNumber: idNumber, 
      _id: id,  
      Gender: gender,
      City: city,
      Province: province,
      Zipcode: zipCode,
    };

    try {
      const response = await axios.put(
        `http://localhost:5000/api/updateEmployee/${id}`, 
        updatedEmployee
      );

      if (response.status === 200) {
        alert("Employee Updated Successfully!");
        updateEmployee(updatedEmployee);  
        clearSelectedEmployee();  
      } else {
        throw new Error(`Failed to update employee: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error updating employee:", error);
      const errorMessage = error.response
        ? error.response.data.error || error.response.data.message || "Unknown error"
        : error.message || "Unknown error";

      alert("Error updating employee: " + errorMessage);
    }
  };

  return (
    <div id="edit" className="container-sm">
      <h3>Update Employee Info</h3>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter employee name"
                />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter employee email"
                />
              </td>
            </tr>
            <tr>
              <td>Phone Number</td>
              <td>
                <input
                  type="text"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter employee phone number"
                />
              </td>
            </tr>
            <tr>
              <td>Position</td>
              <td>
                <input
                  type="text"
                  value={position}
                  onChange={(e) => setPosition(e.target.value)}
                  placeholder="Enter employee position"
                />
              </td>
            </tr>
            <tr>
              <td>ID Number</td>
              <td>
                <input
                  type="text"
                  value={idNumber}
                  onChange={(e) => setIdNumber(e.target.value)}
                  placeholder="Enter ID number"
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter employee city"
                />
              </td>
            </tr>
            <tr>
              <td>Province</td>
              <td>
                <input
                  type="text"
                  value={province}
                  onChange={(e) => setProvince(e.target.value)}
                  placeholder="Enter employee province"
                />
              </td>
            </tr>
            <tr>
              <td>Zip Code</td>
              <td>
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter employee zip code"
                />
              </td>
            </tr>
            <tr>
              <td colSpan={2} className="btn-container">
                <button type="button" onClick={UpdateEmployee}>Update Employee</button>
                <button type="button" onClick={CancelEdit}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Editemployee;
