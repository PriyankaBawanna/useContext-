import React from "react";
import ComponenetTwo from "./ComponentTwo";
const ComponenetOne = () => {
  console.log(" component one is callig");
  return (
    <>
      <h1>This is First Componenet </h1>
      <ComponenetTwo />
    </>
  );
};
export default ComponenetOne;
