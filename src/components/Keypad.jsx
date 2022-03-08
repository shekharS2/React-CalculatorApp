import Button from "./Button.jsx";
import { useContext } from "react";
import { DisplayContext } from "../App.js";

export default function Keypad(props) {
  let btnArr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "+",
    "-",
    "x",
    "/"
  ];

  let { displayVal, changeDisplayVal } = useContext(DisplayContext);
  console.log("Display Val: " + displayVal);

  let btnFunc = (val) => {
    changeDisplayVal(displayVal + "" + val);
  };

  let solutionToExpr = () => {
    let expr = displayVal;
    if (expr.includes("+")) {
      let exprArr = expr.split("+");
      if (exprArr.length === 2) {
        let res = parseInt(exprArr[0], 10) + parseInt(exprArr[1], 10);
        changeDisplayVal(res);
      } else {
        changeDisplayVal("Invalid Expression");
      }
    } else if (expr.includes("-")) {
      let exprArr = expr.split("-");
      if (exprArr.length === 2) {
        let res = parseInt(exprArr[0], 10) - parseInt(exprArr[1], 10);
        changeDisplayVal(res);
      } else {
        changeDisplayVal("Invalid Expression");
      }
    } else if (expr.includes("x")) {
      let exprArr = expr.split("x");
      if (exprArr.length === 2) {
        let res = parseInt(exprArr[0], 10) * parseInt(exprArr[1], 10);
        changeDisplayVal(res);
      } else {
        changeDisplayVal("Invalid Expression");
      }
    } else if (expr.includes("/")) {
      let exprArr = expr.split("/");
      if (exprArr.length === 2) {
        let res = parseInt(exprArr[0], 10) / parseInt(exprArr[1], 10);
        changeDisplayVal(res);
      } else {
        changeDisplayVal("Invalid Expression");
      }
    } else {
      changeDisplayVal("Invalid Expression");
    }
  };

  return (
    <div>
      {btnArr.map((ele, idx) => {
        return (
          <>
            <Button val={ele} id={idx} onClick={btnFunc} />
          </>
        );
      })}

      <button
        style={{
          minWidth: "100px",
          marginLeft: "2px",
          marginRight: "2px",
          marginBottom: "2px",
          background: "#fdcb6e",
          borderColor: "#fdcb6e",
          color: "#d63031",
          fontWeight: "bold"
        }}
        onClick={solutionToExpr}
      >
        =
      </button>

      <div>
        <button
          style={{
            minWidth: "300px",
            margin: "10px",
            background: "#00b894",
            borderColor: "#00b894",
            color: "white"
          }}
          onClick={() => {
            changeDisplayVal("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}
