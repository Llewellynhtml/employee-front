import { useState } from 'react';

function Search({ employees, onSearch }) {
  const [searchIDNumber, setSearchIDNumber] = useState("");

  const handleSearch = () => {
    onSearch(searchIDNumber);
  };

  return (
    <div className="topNav">
      <h1>Employee Id Data</h1>
      <input
        type="text"
        placeholder="Employee by Id"
        value={searchIDNumber}
        onChange={(e) => setSearchIDNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default Search;
