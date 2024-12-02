import { useState } from "react";
import axios from "axios";

function AddEmployeeInformation({ addEmployeeToList }) {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Number, setNumber] = useState("");
  const [Position, setPosition] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [Gender, setGender] = useState("");
  const [City, setCity] = useState("");
  const [Province, setProvince] = useState("");
  const [ZipCode, setZipCode] = useState("");
  const [loading, setLoading] = useState(false);

  const add = async () => {
    if (!idNumber || isNaN(idNumber)) {
      alert("Invalid idNumber. Please enter a valid idNumber.");
      return;
    }

    const employeeData = {
      Name,
      Email,
      Number,
      Position,
      idNumber,
      Gender,
      City,
      Province,
      ZipCode,
    };

    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/addEmployee", employeeData);

      
      console.log("Response:", response);

      if (response.status === 201) {
        alert("Employee added successfully!");
        addEmployeeToList(employeeData);
        resetForm();
      } else {
        
        console.error("Unexpected response status:", response.status);
        alert("Unexpected response status. Please try again.");
      }
    } catch (error) {
  
      console.error("Error adding employee:", error);

      // If error response contains more details
      if (error.response) {
        console.error("Error response data:", error.response.data);
        alert(`Error adding employee: ${error.response.data.message || error.response.statusText}`);
      } else if (error.request) {
        console.error("Error request:", error.request);
        alert("No response received from server.");
      } else {
        console.error("Error message:", error.message);
        alert("An error occurred while sending the request.");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setNumber("");
    setPosition("");
    setIdNumber("");
    setGender("");
    setCity("");
    setProvince("");
    setZipCode("");
  };

  return (
    <div className="form-container">
      <div className="left-column">
        <input
          className="input-Name"
          type="text"
          placeholder="Name"
          value={Name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="input-Email"
          type="text"
          placeholder="Email"
          value={Email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="input-number"
          type="text"
          placeholder="Number"
          value={Number}
          onChange={(event) => setNumber(event.target.value)}
        />
        <input
          className="input-Position"
          type="text"
          placeholder="Position"
          value={Position}
          onChange={(event) => setPosition(event.target.value)}
        />
      </div>
      <div className="right-column">
        <input
          className="input-idNumber"
          type="text"
          placeholder="idNumber"
          value={idNumber}
          onChange={(event) => setIdNumber(event.target.value)}
        />
        <select
          className="select-gender"
          value={Gender}
          onChange={(event) => setGender(event.target.value)}
        >
          <option value="" disabled>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          className="input-City"
          type="text"
          placeholder="City"
          value={City}
          onChange={(event) => setCity(event.target.value)}
        />
        <select
          className="select-Province"
          value={Province}
          onChange={(event) => setProvince(event.target.value)}
        >
          <option value="" disabled>Select Province</option>
          <option value="Gauteng">Gauteng</option>
          <option value="KwaZulu-Natal">KwaZulu-Natal</option>
          <option value="Western Cape">Western Cape</option>
          <option value="Eastern Cape">Eastern Cape</option>
          <option value="Limpopo">Limpopo</option>
          <option value="Mpumalanga">Mpumalanga</option>
          <option value="North West">North West</option>
          <option value="Free State">Free State</option>
          <option value="Northern Cape">Northern Cape</option>
        </select>
        <input
          className="input-zipcode"
          type="text"
          placeholder="ZipCode"
          value={ZipCode}
          onChange={(event) => setZipCode(event.target.value)}
        />
      </div>
      <button onClick={add} className="Add-button" disabled={loading}>
        {loading ? "Adding..." : "Add Employee"}
      </button>
    </div>
  );
}

export default AddEmployeeInformation;
