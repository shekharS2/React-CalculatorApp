import "./styles.css";
import Keypad from "./components/Keypad.jsx";
import { useState, createContext } from "react";
import ReactDOM from "react-dom";

export const DisplayContext = createContext();

export default function App() {
  let [displayVal, changeDisplayVal] = useState("");

  let styleValButtons = {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: "320px",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "50px",
    border: "solid"
  };

  return (
    <DisplayContext.Provider value={{ displayVal, changeDisplayVal }}>
      <div style={styleValButtons} className="App">
        <div
          style={{
            border: "solid",
            maxWidth: "300px",
            minWidth: "300px",
            margin: "10px",
            padding: "5px"
          }}
        >
          <h4>{displayVal}</h4>
        </div>
        <Keypad />
      </div>
    </DisplayContext.Provider>
  );
}
