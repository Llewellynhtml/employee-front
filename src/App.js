import logo from './logo.svg';
import './App.css';
import AddEmployeeInformation from './Components/Add';

import { useState } from 'react';

function App() {


  const [employee, setEmployee]=useState([]);

  const add = (Name, Email, Number, image, position, ID, Gender, City, Province, ZipCode)=>{
    setEmployee((employee) => [...employee, {Name:Name, Email:Email, Number:Number, position:position, ID:ID, Gender:Gender, City:City, Province:Province, ZipCode:ZipCode }])
  }




  return (
    <div className="App">
<AddEmployeeInformation/>
    </div>
  );
}

export default App;
