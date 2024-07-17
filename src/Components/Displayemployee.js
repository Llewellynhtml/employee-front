import React from "react";

function Displayemployee(props) {
  const handleRemoveEmployee = (empID) => {
    props.removeEmployee(empID);
  };

  const handleEditEmployee = (empID) => {
    // Handle editing logic here
    // Example: props.updateEmployee(updatedEmployee);
  };

  return (
    <div>
      <h1>Employee History</h1>
      {props.employees.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Image</th>
              <th>Position</th>
              <th>ID</th>
              <th>Gender</th>
              <th>City</th>
              <th>Province</th>
              <th>ZipCode</th>
            </tr>
          </thead>
          <tbody>
            {props.employees.map((employee) => (
              <tr key={employee.ID}>
                <td>{employee.Name}</td>
                <td>{employee.Email}</td>
                <td>{employee.Number}</td>
                <td>{employee.Image}</td>
                <td>{employee.Position}</td>
                <td>{employee.ID}</td>
                <td>{employee.Gender}</td>
                <td>{employee.City}</td>
                <td>{employee.Province}</td>
                <td>{employee.ZipCode}</td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No employees found.</p>
      )}
    </div>
  );
}

export default Displayemployee;
