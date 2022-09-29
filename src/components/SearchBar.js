import React from "react";
import { useRef } from "react";
function SearchBar({ searchJob }) {
  const inputValue = useRef();

  return (
    <div>
      <input
        style={{ height: "2rem", width: "20vw" }}
        ref={inputValue}
        type="text"
        placeholder="search here..."
        onChange={() => searchJob(inputValue.current.value)}
      />
    </div>
  );
}

export default SearchBar;
