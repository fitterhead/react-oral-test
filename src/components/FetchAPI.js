import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
function FetchAPI({ inputData }) {
  const [data, setData] = useState();

  useEffect(() => {
    const ApiData = async () => {
      try {
        const testData = await axios.get(
          `https://frcz3.sse.codesandbox.io/jobs?_page=${inputData.page}&_limit=5&q=${inputData.searchQuery}`
        );

        setData(testData.data);
      } catch (error) {}
    };
    ApiData();
  }, [inputData]);

  if (data) {
    return (
      <div
        style={{
          padding: "2rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {data.map((item) => {
          return <p>{item.title}</p>;
        })}
      </div>
    );
  }
}

export default FetchAPI;
