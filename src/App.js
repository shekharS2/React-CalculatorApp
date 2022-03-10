import "./styles.css";
import Keypad from "./components/Keypad.jsx";
import { useState, createContext } from "react";

export const DisplayContext = createContext();

export default function App() {
  let [displayVal, changeDisplayVal] = useState("");

  return (
    <DisplayContext.Provider value={{ displayVal, changeDisplayVal }}>
      <div className="App">
        <div className="calculator">
          <div className="display">
            <label>{displayVal !== "" ? displayVal : "0"}</label>
          </div>
          <Keypad />
        </div>
      </div>
    </DisplayContext.Provider>
  );
}
