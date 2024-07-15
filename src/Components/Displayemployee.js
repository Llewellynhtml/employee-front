import React from "react"


function Displayemployee(props) {

  const RemoveEmployee = (empID) =>{
    props.RemoveEmployee(empID);
  };

  const EditEmployee = (empID) => {
    props.SelectEmployee(empID);

    props.Update();
  }
  return (
    <div>
      <h1> Employee History</h1>

      {props.employee.map((data) => (
        <div className="displayitem">
          <table>
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
              <th>Update</th>
            </tr>
            <tr>
              <td>{data.Name}</td>
              <td>{data.Email}</td>
              <td>{data.Number}</td>
              <td>{data.Image}</td>
              <td>{data.Position}</td>
              <td>{data.ID}</td>
              <td>{data.Gender}</td>
              <td>{data.City}</td>
              <td>{data.Province}</td>
              <td>{data.ZipCode}</td>
              <td>
                
               <div>
               <button value={data.employeeID} onClick={() => EditEmployee(data.employeeID)}>Edit</button>

               <button value={data.employeeID} onClick={() => RemoveEmployee(data.employeeID)}>Delete</button>

               </div>


              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Displayemployee;
