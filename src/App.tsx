import { createContext, useState } from "react";
import TryAgain from "./TryAgain";
import ParentComponent from "./ParentCompone";

import ComponenetOne from "./ComponentOne";
import ChildComponent from "./ChildComponent";
import FirstComponent from "./Paggination/FirstComponent";
import TryPaggination from "./TryPaggination";

function App() {
  const [count, setCount] = useState(0);
  console.log("App component is callig");

  return (
    <div className="App">
      {/* <TryAgain /> */}
      <TryPaggination />
    </div>
  );
}

export default App;
// export { FirstName };
