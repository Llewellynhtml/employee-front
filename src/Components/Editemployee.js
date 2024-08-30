import React, { useState, useEffect } from "react";

function Editemployee({ selectedEmployee, updateEmployee, clearSelectedEmployee }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState(null); // Update to store the file
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  useEffect(() => {
    if (selectedEmployee) {
      setName(selectedEmployee.Name);
      setEmail(selectedEmployee.Email);
      setNumber(selectedEmployee.Number);
      setImage(selectedEmployee.Image ? null : null); // Set image URL or null
      setPosition(selectedEmployee.Position);
      setId(selectedEmployee.ID);
      setGender(selectedEmployee.Gender);
      setCity(selectedEmployee.City);
      setProvince(selectedEmployee.Province);
      setZipCode(selectedEmployee.ZipCode);
    }
  }, [selectedEmployee]);

  const CancelEdit = () => {
    clearSelectedEmployee();
  };

  const UpdateEmployee = () => {
    if (!name || !email || !number) {
      alert("Please fill out all required fields.");
      return;
    }

    const updatedEmployee = {
      Name: name,
      Email: email,
      Number: number,
      Image: image ? URL.createObjectURL(image) : null, // Handle image preview
      Position: position,
      ID: id,
      Gender: gender,
      City: city,
      Province: province,
      ZipCode: zipCode
    };

    updateEmployee(updatedEmployee);
    clearSelectedEmployee();
  };

  const handleImageChange = (event) => {
    if (event.target.files.length > 0) {
      setImage(event.target.files[0]);
    }
  };

  return (
    <div id="edit" className="container-sm">
      <div className="column">
        <h3>Update Employee Info</h3>
        <h2>Employee Form</h2>
        <form>
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    placeholder="Email"
                  />
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>
                  <input
                    type="text"
                    name="number"
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
                    placeholder="Number"
                  />
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*" 
                  />
                  {image && <img src={URL.createObjectURL(image)} alt="Preview" className="image-preview" />} {/* Preview image */}
                </td>
              </tr>
              <tr>
                <td>Position</td>
                <td>
                  <input
                    type="text"
                    name="position"
                    onChange={(e) => setPosition(e.target.value)}
                    value={position}
                    placeholder="Position"
                  />
                </td>
              </tr>
              <tr>
                <td>ID</td>
                <td>
                  <input
                    type="text"
                    name="id"
                    onChange={(e) => setId(e.target.value)}
                    value={id}
                    placeholder="ID"
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <select
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                    type="text"
                    name="city"
                    onChange={(e) => setCity(e.target.value)}
                    value={city}
                    placeholder="City"
                  />
                </td>
              </tr>
              <tr>
                <td>Province</td>
                <td>
                  <select
                    name="province"
                    onChange={(e) => setProvince(e.target.value)}
                    value={province}
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
                </td>
              </tr>
              <tr>
                <td>Zip Code</td>
                <td>
                  <input
                    type="text"
                    name="zipcode"
                    onChange={(e) => setZipCode(e.target.value)}
                    value={zipCode}
                    placeholder="Zip Code"
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <button type="button" className="btn update-btn" onClick={UpdateEmployee}>
            Update Employee
          </button>
          <button type="button" className="btn cancel-btn" onClick={CancelEdit}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default Editemployee;
