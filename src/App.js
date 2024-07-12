import logo from './logo.svg';
import './App.css';
import AddEmployeeInformation from './Components/Add';
import Displayemployee from './Components/Displayemployee';
import Search from './Components/Search';

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

  return (
    <div className="App">
<Search/>
<AddEmployeeInformation add={add}/>
<Displayemployee employee={employee} edit={edit} />

    </div>
  );
}

export default App;
