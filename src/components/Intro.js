import React from "react";
import { useState } from "react";

function Intro({ inputData }) {
  const [introDate, setIntroDate] = useState();

  const updateTime = () => {
    setIntroDate(Date().toLocaleString());
  };

  setInterval(updateTime, 1000);

  return (
    <>
      <h3>ORAL TEST</h3>
      <h>Name: Nguyen Xuan Phi</h>
      <p> {introDate}</p>
    </>
  );
}

export default Intro;
