import logo from './logo.svg';
import './App.css';
import AddEmployeeInformation from './Components/Add';

import { useState } from 'react';

function App() {


  const [employee, setemployee]=useState([]);
  return (
    <div className="App">
<AddEmployeeInformation/>
    </div>
  );
}

export default App;
