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
  const [ZipCode, setZipCode] = useState("");

  const FilterEmployee = (employeeID) => {
    const EmployeeData = props.EmployeeData.filter(
      (employee) => employee.employeeID === employeeID
    );
    if (EmployeeData.length === 0) {
      alert("User Not Found");
      return;
    }
    if (EmployeeData[0]) {
      setName(EmployeeData[0].employeeName);
      setEmail(EmployeeData[0].employeeEmail);
      setNumber(EmployeeData[0].employeeNumber);
      setImage(EmployeeData[0].employeeImage);
      setPosition(EmployeeData[0].employeePosition);
      setId(EmployeeData[0].employeeID);
      setGender(EmployeeData[0].employeeGender);
      setCity(EmployeeData[0].employeeCity);
      setProvince(EmployeeData[0].employeeProvince);
      setZipCode(EmployeeData[0].employeeZipCode);
    } else {
      props.selectEmployee(null);
    }
  };

  const isEmployeeSelected = props.selectedEmployee.length === 1;

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
    const isFormValid = props.FormValidation(
      name,
      email,
      number,
      image,
      position,
      id,
      gender,
      city,
      province,
      ZipCode
    );
    if (isFormValid) {
      props.UpdateEmployee(
        name,
        email,
        number,
        image,
        position,
        id,
        gender,
        city,
        province,
        ZipCode
      );
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
    }
  };

  return (
    <div id="edit" className="container-sm">
      <div>
        <h3>Update Employee Info</h3>
      </div>
      <div>{isEmployeeSelected ? "" : null}</div>
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
          <button onClick={() => FilterEmployee(searchID)}>Search</button>
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
                    onChange={(event) => setName(event.target.value)}
                    placeholder="Name"
                    value={name}
                  />
                </td>
              </tr>
              <tr>
                <td>Email</td>
                <td>
                  <input
                    type="text"
                    name="email"
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Email"
                    value={email}
                  />
                </td>
              </tr>
              <tr>
                <td>Number</td>
                <td>
                  <input
                    type="text"
                    name="number"
                    onChange={(event) => setNumber(event.target.value)}
                    placeholder="Number"
                    value={number}
                  />
                </td>
              </tr>
              <tr>
                <td>Image</td>
                <td>
                  <input
                    type="text"
                    name="image"
                    onChange={(event) => setImage(event.target.value)}
                    placeholder="Image"
                    value={image}
                  />
                </td>
              </tr>
              <tr>
                <td>Position</td>
                <td>
                  <input
                    type="text"
                    name="position"
                    onChange={(event) => setPosition(event.target.value)}
                    placeholder="Position"
                    value={position}
                  />
                </td>
              </tr>
              <tr>
                <td>ID</td>
                <td>
                  <input
                    type="text"
                    name="id"
                    onChange={(event) => setId(event.target.value)}
                    placeholder="ID"
                    value={id}
                  />
                </td>
              </tr>
              <tr>
                <td>Gender</td>
                <td>
                  <input
                    type="text"
                    name="gender"
                    onChange={(event) => setGender(event.target.value)}
                    placeholder="Gender"
                    value={gender}
                  />
                </td>
              </tr>
              <tr>
                <td>City</td>
                <td>
                  <input
                    type="text"
                    name="city"
                    onChange={(event) => setCity(event.target.value)}
                    placeholder="City"
                    value={city}
                  />
                </td>
              </tr>
              <tr>
                <td>Province</td>
                <td>
                  <input
                    type="text"
                    name="province"
                    onChange={(event) => setProvince(event.target.value)}
                    placeholder="Province"
                    value={province}
                  />
                </td>
              </tr>
              <tr>
                <td>ZipCode</td>
                <td>
                  <input
                    type="text"
                    name="zipcode"
                    onChange={(event) => setZipCode(event.target.value)}
                    placeholder="ZipCode"
                    value={ZipCode}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Editemployee;
