import React, { useContext } from "react";
import { CalcContext } from "../contest/CalcContest";
const getStyleName = (btn) => {
  const calssName = {
    "=": "equals",
    x: "opt",
    "+": "opt",
    "-": "opt",
    "/": "opt",
  };

  return calssName[btn];
};
const Button = ({ value }) => {
  console.log(useContext(CalcContext));
  const { calc, setCalc } = useContext(CalcContext);
  //*User click comma

  const commaClick = () => {
    setCalc({
      ...calc,
      num: !("" + calc.num).includes(".") ? calc.num + value : calc.num,
    });
  };
  const ResetClick = () => {
    setCalc({
      ...calc,
      num: 0,
      sign: "",
      res: 0,
    });
  };
  //* User click Number
  const handleClickButton = () => {
    const numberStirng = "" + value;
    let number;
    if (numberStirng === "0" && calc.num === 0) {
      number = 0;
    } else {
      number = Number(calc.num + numberStirng);
    }
    setCalc({
      ...calc,
      num: number,
    });
  };

  // * User click Operation :
  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  // * User click equal :
  const eqaulsClick = () => {
    if (calc.num && calc.res) {
      const Math = (x, y, o) => {
        const result = {
          "+": (x, y) => x + y,
          "/": (x, y) => x / y,
          x: (x, y) => x * y,
          "-": (x, y) => x - y,
        };
        return result[o](x, y);
      };

      setCalc({
        res: Math(calc.num, calc.res, calc.sign),
        sign: "",
        num: 0,
      });
    }
  };

  const handleClick = (e) => {
    // e.preventDefault()
    const result = {
      ".": commaClick(),
      C: ResetClick(),
      "/": signClick(),
      "+": signClick(),
      "-": signClick(),
      x: signClick(),
      "=": eqaulsClick(),
    };
    if (result[value]) {
      return result[value]();
    } else {
      return handleClickButton();
    }
  };
  return (
    <button onClick={handleClick} className={`${getStyleName(value)} btn`}>
      {value}
    </button>
  );
};

export default Button;
