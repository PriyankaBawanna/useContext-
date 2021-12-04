import { createContext, useState } from "react";
import ComponenetOne from "./ComponentOne";

//import ComponenetOne from "./ComponentOne";
const FirstName = createContext("");
function App() {
  const [count, setCount] = useState(0);
  console.log("App component is callig");

  return (
    <div className="App">
      <FirstName.Provider value={"priyanka"}>
        <ComponenetOne />
      </FirstName.Provider>
    </div>
  );
}

export { FirstName };
export default App;
// export { FirstName };
