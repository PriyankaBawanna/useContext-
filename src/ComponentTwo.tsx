import React from "react";
import ComponenetThird from "./ComponentThird";
const ComponenetTwo = () => {
  console.log(" component two is callig");
  return (
    <>
      <h1>This is Second Componenet </h1>
      <ComponenetThird />
    </>
  );
};
export default ComponenetTwo;
