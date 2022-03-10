import Button from "./Button.jsx";
import { useContext } from "react";
import { DisplayContext } from "../App.js";
import "../styles.css";

export default function Keypad() {
  let btnOprArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
  let btnOpnArr = ["+", "-", "x", "/"];

  let { displayVal, changeDisplayVal } = useContext(DisplayContext);
  console.log("Display Val: " + displayVal);

  let btnFunc = (val) => {
    changeDisplayVal(displayVal + "" + val);
  };

  let solutionToExpr = () => {
    let expr = displayVal;
    if (expr.includes("+")) {
      let exprArr = expr.split("+");
      let res = parseFloat(exprArr[0], 10) + parseFloat(exprArr[1], 10);
      if (isNaN(res)) {
        changeDisplayVal("Invalid Expression");
      } else {
        changeDisplayVal(res);
      }
    } else if (expr.includes("-")) {
      let exprArr = expr.split("-");
      let res = parseFloat(exprArr[0], 10) - parseFloat(exprArr[1], 10);
      if (isNaN(res)) {
        changeDisplayVal("Invalid Expression");
      } else {
        changeDisplayVal(res);
      }
    } else if (expr.includes("x")) {
      let exprArr = expr.split("x");
      let res = parseFloat(exprArr[0], 10) * parseFloat(exprArr[1], 10);
      if (isNaN(res)) {
        changeDisplayVal("Invalid Expression");
      } else {
        changeDisplayVal(res);
      }
    } else if (expr.includes("/")) {
      let exprArr = expr.split("/");
      let res = parseFloat(exprArr[0], 10) / parseFloat(exprArr[1], 10);
      if (isNaN(res)) {
        changeDisplayVal("Invalid Expression");
      } else {
        changeDisplayVal(res);
      }
    } else {
      changeDisplayVal("Invalid Expression");
    }
  };

  return (
    <>
      <div className="operators">
        {btnOpnArr.map((ele, idx) => {
          return (
            <>
              <Button val={ele} id={idx} onClick={btnFunc} />
            </>
          );
        })}

        <button
          onClick={() => {
            changeDisplayVal("");
          }}
        >
          Clear
        </button>
      </div>

      <div className="digits">
        {btnOprArr.map((ele, idx) => {
          return (
            <>
              <Button val={ele} id={idx} onClick={btnFunc} />
            </>
          );
        })}

        <button onClick={solutionToExpr}>=</button>
      </div>
    </>
  );
}
