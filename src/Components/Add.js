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



return(
<div>
    <h1> Personal information</h1>

<input type="text"  placeholder="Name" onChange={(event)=> setName (event.target.value) }/>
<input type="text"  placeholder="Email" onChange={(event)=> setEmail (event.target.value) }/>
<input type="text"  placeholder="Phone Number" onChange={(event)=> setNumber (event.target.value) }/>
<input type="text"  placeholder="image" onChange={(event)=> setImage (event.target.value) }/> 
<input type="text"  placeholder="position" onChange={(event)=> setPosition (event.target.value) }/>
<input type="text"  placeholder="ID" onChange={(event)=> setId (event.target.value) }/> 
<input type="text"  placeholder="Gender" onChange={(event)=> setGender (event.target.value) }/> 


<select>
<option>City</option>
<option>State</option>
<option>Zip Code</option>
<option>region</option>
<option>Street Address</option>
</select>

    <button> Add employee information </button>


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

<h1>Professional experience</h1>

<input type="text"  placeholder="Professional certification and License"/>
<input type="text"  placeholder="Previous Work experience"/>

<button>Submit info</button>

<h1>Employee information</h1>

<input type="text"  placeholder="Title"/>
<input type="text"  placeholder="Date of hire"/>
<input type="text"  placeholder="Department"/>
<h2>Employee status</h2>


<input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
<label for="html">INTERN</label>
<input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
<label for="html">FULL TIME</label>
<input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
<label for="html">PART-TIME</label>
<input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
<label for="html">CONTRACT</label>
<input type="Checkbox" id="javascript" name="fav_language" value="JavaScript"/>
<label for="html">OTHERS</label>

<button>Submit status</button>

</div>

)

}

export default AddEmployeeInformation