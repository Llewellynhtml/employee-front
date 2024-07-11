import { useState } from "react"

function AddEmployeeInformation (props) {
const[employeeItem, setEmployeeitem]=useState("");
const [name, setName ]=useState("");
const[email, setEmail]=useState("");
const[number, setNumber]=useState("");
const[image, setImage]=useState("");
const[position, setPosition]=useState("");
const[id, setId]=useState("");
const[gender, setGender]=useState("");
const[city,setCity]=useState("");
const[province,setProvince]=useState("");
const[ZipCode,setZipCode]=useState("");


const add= ()=>{
props.add(name,email,number,image,position,id,gender,city,province,ZipCode)

}

return(
<div className="details">
    <h1> Personal Information</h1>

<input type="text"  placeholder="Name" onChange={(event)=> setName (event.target.value) }/><br></br>
<input type="text"  placeholder="Email" onChange={(event)=> setEmail (event.target.value) }/><br></br>
<input type="text"  placeholder="Number" onChange={(event)=> setNumber (event.target.value) }/><br></br>
<input type="text"  placeholder="Image" onChange={(event)=> setImage (event.target.value) }/><br></br>
<input type="text"  placeholder="Position" onChange={(event)=> setPosition (event.target.value) }/><br></br>
<input type="text"  placeholder="ID" onChange={(event)=> setId (event.target.value) }/> <br></br>
<input type="text"  placeholder="Gender" onChange={(event)=> setGender (event.target.value) }/> <br></br>
<input type="text"  placeholder="City" onChange={(event)=> setCity (event.target.value) }/><br></br>
<input type="text"  placeholder="Province" onChange={(event)=> setProvince (event.target.value) }/><br></br>
<input type="text"  placeholder="ZipCode" onChange={(event)=> setZipCode (event.target.value) }/><br></br> 

    <button onClick={add}> Add information </button><br></br>


</div>

)

}

export default AddEmployeeInformation