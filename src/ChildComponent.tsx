import React from "react";
import { createContext, useState } from "react";
import ParentComponent from "./ParentCompone";
const FirstName = createContext("");
const ChildComponent = () => {
  function abc() {
    alert("Child Component");
  }

  return (
    <>
      <h1> ChildComponent</h1>
      <button onClick={abc}>Child </button>
      <FirstName.Provider value={"priyanka"}>
        <ParentComponent />
      </FirstName.Provider>
    </>
  );
};
export { FirstName };
export default ChildComponent;
