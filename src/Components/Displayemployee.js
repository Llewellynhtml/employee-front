function Displayemployee(props) {
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
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default Displayemployee;
