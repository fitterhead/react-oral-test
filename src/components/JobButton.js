import React from "react";

function JobButton({ pageNumber, prevPage, nextPage }) {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
      <button onClick={prevPage}>back</button>
      <button onClick={nextPage}>next</button>
    </div>
  );
}

export default JobButton;
