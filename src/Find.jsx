import React, { useState } from "react";
import "./App.css";

function Find() {
  const nameList = [
    { name: "Ira" },
    { name: "Olya" },
    { name: "Rymma" },
    { name: "Dina" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = nameList.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // console.log(filteredData);

  return (
    <div className="input">
      <p>Enter the name you want to find</p>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        placeholder="Search..."
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Find;
