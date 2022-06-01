import React, { useContext } from "react";
import { FirstName } from "./ChildComponent";
const ParentComponent = () => {
  const fname = useContext(FirstName);
  return (
    <>
      <h1>PArent ParentComponent</h1>
      <p>my name is {fname}</p>
    </>
  );
};
export default ParentComponent;
