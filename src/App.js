import React, { useState } from 'react';
import './App.css';
import AddEmployeeInformation from './Components/Add';
import Displayemployee from './Components/Displayemployee';
import Editemployee from './Components/Editemployee';
import Tabs from './Components/Tabs';

function App() {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const addEmployee = (name, email, number, image, position, id, gender, city, province, zipCode) => {
    const newEmployee = {
      Name: name,
      Email: email,
      Number: number,
      Image: image,
      Position: position,
      ID: id,
      Gender: gender,
      City: city,
      Province: province,
      ZipCode: zipCode,
    };
    setEmployees([...employees, newEmployee]);
  };

  const removeEmployee = (empID) => {
    const updatedEmployees = employees.filter(emp => emp.ID !== empID);
    setEmployees(updatedEmployees);
  };

  const updateEmployee = (updatedEmployee) => {
    const updatedEmployees = employees.map(emp => (emp.ID === updatedEmployee.ID ? updatedEmployee : emp));
    setEmployees(updatedEmployees);
  };

  const selectEmployee = (empID) => {
    const employee = employees.find(emp => emp.ID === empID);
    setSelectedEmployee(employee);
  };

  const tabs = [
    {
      label: 'Add Employee',
      content: <AddEmployeeInformation add={addEmployee} />
    },
    {
      label: 'Display Employees',
      content: <Displayemployee employees={employees} removeEmployee={removeEmployee} updateEmployee={updateEmployee} />
    },
    {
      label: 'Edit Employee',
      content: <Editemployee 
                  employees={employees} 
                  selectedEmployee={selectedEmployee} 
                  updateEmployee={updateEmployee} 
                  selectEmployee={selectEmployee} 
               />
    }
  ];

  return (
    <div className="App">
      <div>
        <h2>Employee App</h2>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}

export default App;
