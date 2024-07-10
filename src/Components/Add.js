import { useState } from "react"

function AddEmployeeInformation () {
const[employeeItem, setEmployeeitem]=useState("");
const [name, setName ]=useState("");
const[email, setEmail]=useState("");
const[number, setNumber]=useState("");
const[image, setImage]=useState("");
const[position, setPosition]=useState("");
const[id, setId]=useState("")
const[gender, setGender]=useState("")

const add= ()=>{


}

return(
<div>
    <h1> Personal information</h1>

<input type="text"  placeholder="Name" onChange={(event)=> setName (event.target.value) }/>
<input type="text"  placeholder="Email" onChange={(event)=> setEmail (event.target.value) }/>
<input type="text"  placeholder="Number" onChange={(event)=> setNumber (event.target.value) }/>
<input type="text"  placeholder="image" onChange={(event)=> setImage (event.target.value) }/> 
<input type="text"  placeholder="position" onChange={(event)=> setPosition (event.target.value) }/>
<input type="text"  placeholder="ID" onChange={(event)=> setId (event.target.value) }/> 
<input type="text"  placeholder="Gender" onChange={(event)=> setGender (event.target.value) }/> 
<input type="text"  placeholder="City" onChange={(event)=> setGender (event.target.value) }/> 
<input type="text"  placeholder="Province" onChange={(event)=> setGender (event.target.value) }/> 
<input type="text"  placeholder="Zip Code" onChange={(event)=> setGender (event.target.value) }/> 


    <button onClick={add}> Add information </button>


    <h1>Medical Condition</h1>


    <input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
    <label for="html">GOOD</label>
    <input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
    <label for="html">BAD</label>

    <button>Submit information</button>


    <h1>Education History</h1>

<input type="text"  placeholder="highest level of education"/>
<input type="text"  placeholder="Name of Institution"/>
<input type="text"  placeholder="major field of study"/>
<input type="text"  placeholder="Degree earned"/>
<input type="text"  placeholder="Graduation date/year"/>

<button>Add education history</button>


</div>

)

}

export default AddEmployeeInformation