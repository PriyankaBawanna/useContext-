import React, { useContext } from "react";
import { FirstName } from "./App";
const Componenet5 = () => {
  console.log(" component fifth is callig");
  const fname = useContext(FirstName);
  return (
    <>
      <h1>This is Fifth Componenet </h1>
      <p>my name is {fname}</p>
    </>
  );
};
export default Componenet5;
