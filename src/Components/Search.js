import { useState } from 'react';

function Search({ employees, onSearch }) {
  const [searchID, setSearchID] = useState("");

  const handleSearch = () => {
    onSearch(searchID);
  };

  return (
    <div className="topNav">
      <h1>Employee Id Data</h1>
      <input
        type="text"
        placeholder="Employee by Id"
        value={searchID}
        onChange={(e) => setSearchID(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
