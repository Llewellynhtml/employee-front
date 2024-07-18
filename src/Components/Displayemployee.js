import React, { useState } from 'react';
import Editemployee from './Editemployee'; 

function Displayemployee({ employees, removeEmployee, updateEmployee }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [searchID, setSearchID] = useState('');
  const [activeTab, setActiveTab] = useState('list'); 

  
  const filterEmployee = () => {
    const selectedEmployee = employees.find(employee => employee.ID === searchID);
    if (selectedEmployee) {
      setSelectedEmployee(selectedEmployee);
      setActiveTab('edit'); 
    } else {
      alert("Employee not found!");
    }
  };

  
  const clearSelectedEmployee = () => {
    setSelectedEmployee(null);
    setSearchID('');
    setActiveTab('list'); 
  };


  const handleUpdateEmployee = (updatedEmployee) => {
    updateEmployee(updatedEmployee);
    clearSelectedEmployee(); 
  };

  return (
    <div>
      <h1>Employee History</h1>
      <div className="tabs">
        <button onClick={() => setActiveTab('list')} className={activeTab === 'list' ? 'active' : ''}>Employee List</button>
        <button onClick={() => setActiveTab('edit')} className={activeTab === 'edit' ? 'active' : ''}>Edit Employee</button>
      </div>
      {activeTab === 'list' && (
        <div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter Employee ID"
              value={searchID}
              onChange={(e) => setSearchID(e.target.value)}
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
                    <th>Image</th>
                    <th>Position</th>
                    <th>ID</th>
                    <th>Gender</th>
                    <th>City</th>
                    <th>Province</th>
                    <th>ZipCode</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {employees.map((employee) => (
                    <tr key={employee.ID}>
                      <td>{employee.Name}</td>
                      <td>{employee.Email}</td>
                      <td>{employee.Number}</td>
                      <td><img src={employee.Image} alt="Employee" style={{ width: '50px', height: '50px' }} /></td>
                      <td>{employee.Position}</td>
                      <td>{employee.ID}</td>
                      <td>{employee.Gender}</td>
                      <td>{employee.City}</td>
                      <td>{employee.Province}</td>
                      <td>{employee.ZipCode}</td>
                      <td>
                        <div>
                          <button onClick={() => { setSelectedEmployee(employee); setActiveTab('edit'); }}>Edit</button>
                          <button onClick={() => removeEmployee(employee.ID)}>Delete</button>
                        </div>
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
      {activeTab === 'edit' && selectedEmployee && (
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
