import React, { useState } from "react";

function Editemployee(props) {
  const [searchID, setSearchID] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");
  const [position, setPosition] = useState("");
  const [id, setId] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipCode, setZipCode] = useState("");

  const FilterEmployee = (employeeID) => {
    const selectedEmployee = props.employees.find(
      (employee) => employee.ID === employeeID
    );

    if (!selectedEmployee) {
      alert("Employee not found!");
      return;
    }

    setName(selectedEmployee.Name);
    setEmail(selectedEmployee.Email);
    setNumber(selectedEmployee.Number);
    setImage(selectedEmployee.Image);
    setPosition(selectedEmployee.Position);
    setId(selectedEmployee.ID);
    setGender(selectedEmployee.Gender);
    setCity(selectedEmployee.City);
    setProvince(selectedEmployee.Province);
    setZipCode(selectedEmployee.ZipCode);

    props.selectEmployee(selectedEmployee);
  };

  const CancelEdit = () => {
    setName("");
    setEmail("");
    setNumber("");
    setImage("");
    setPosition("");
    setId("");
    setGender("");
    setCity("");
    setProvince("");
    setZipCode("");
    props.selectEmployee(null);
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
      Image: image,
      Position: position,
      ID: id,
      Gender: gender,
      City: city,
      Province: province,
      ZipCode: zipCode
    };

    props.updateEmployee(updatedEmployee);

    setName("");
    setEmail("");
    setNumber("");
    setImage("");
    setPosition("");
    setId("");
    setGender("");
    setCity("");
    setProvince("");
    setZipCode("");
  };

  return (
    <div id="edit" className="container-sm">
      <div>
        <h3>Update Employee Info</h3>
      </div>
      <div className="model content">
        <div className="Searchid">
          <input
            type="text"
            className="form-control"
            id="searchID"
            placeholder="Enter employee ID"
            onChange={(e) => setSearchID(e.target.value)}
            value={searchID}
            required
          />
          <button className="btn search-btn" onClick={() => FilterEmployee(searchID)}>Search</button>
        </div>
      </div>
      <div>
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
                    type="text"
                    name="image"
                    onChange={(e) => setImage(e.target.value)}
                    value={image}
                    placeholder="Image URL"
                  />
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
                  <input
                    type="text"
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                    placeholder="Gender"
                  />
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
                  <input
                    type="text"
                    name="province"
                    onChange={(e) => setProvince(e.target.value)}
                    value={province}
                    placeholder="Province"
                  />
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
