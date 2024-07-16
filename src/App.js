import logo from './logo.svg';
import './App.css';
import AddEmployeeInformation from './Components/Add';
import Displayemployee from './Components/Displayemployee';
import Search from './Components/Search';
import Editemployee from './Components/Editemployee';
import Tabs from './Components/Tabs';

import { useState } from 'react';

function App() {


  const [employee, setEmployee]=useState([]);

  const add = (Name, Email, Number, Image, Position, ID, Gender, City, Province, ZipCode)=>{    setEmployee((employee) => [...employee, {Name:Name, Email:Email, Number:Number, Image:Image, Position:Position, ID:ID, Gender:Gender, City:City, Province:Province, ZipCode:ZipCode }])
  }

  const edit = (ID) => {
    let newEmp = employee.findIndex(ID);
    alert(newEmp);
  };

console.log(employee)

const tabs = [
  {
    label: 'Add Em',
    content: <div><AddEmployeeInformation add={add}/></div>
  },
  {
    label: 'Display',
    content: <div><Displayemployee employee={employee} edit={edit} /></div>
  },
  {
    label: 'Edit',
    content: <div><Editemployee employee={employee} edit={edit} selectedEmployee={employee} /></div>
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
