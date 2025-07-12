import React, { useState } from "react";

const Calculator = () => {
  const [calcu, setCalcu] = useState("");
  const HandleBtn = (e) => {
    console.log(e.target.value);
    setCalcu(calcu.concat(e.target.value));
  };

  const HandleCalculation = () => {
    setCalcu(eval(calcu).toString());
  };

//   HandleBack
const HandleBack = ()=> {
    setCalcu(calcu.slice(0,-1))
} 
// HandleClear
const HandleClear = ()=> {
    setCalcu("0")
}
  return (
    <>
      <div className="container">
        <h1 className="heading">CALCULATOR</h1>
        <div>
          <input
            type="text"
            placeholder="0"
            // onChange={handleInput}
            value={calcu}
          />
          <div className="buttonContainer">
                <div className="buttonBox">
              <button className="cal" value="(" onClick={HandleBtn}>
                (
              </button>
              <button className="cal" value=")" onClick={HandleBtn}>
                )
              </button>
              <button className="cal" value="%" onClick={HandleBtn}>
                %
              </button>
              <button className="cal" value="AC" onClick={HandleClear}>
                AC
              </button>
            </div>
            <div className="buttonBox">
              <button className="cal" value="9" onClick={HandleBtn}>
                9
              </button>
              <button className="cal" value="8" onClick={HandleBtn}>
                8
              </button>
              <button className="cal" value="7" onClick={HandleBtn}>
                7
              </button>
              <button className="cal" value="*" onClick={HandleBtn}>
                *
              </button>
            </div>
            <div className="buttonBox">
              <button className="cal" value="4" onClick={HandleBtn}>
                4
              </button>
              <button className="cal" value="5" onClick={HandleBtn}>
                5
              </button>
              <button className="cal" value="6" onClick={HandleBtn}>
                6
              </button>
              <button className="cal" value="-" onClick={HandleBtn}>
                -
              </button>
            </div>
            <div className="buttonBox">
              <button className="cal" value="1" onClick={HandleBtn}>
                1
              </button>
              <button className="cal" value="2" onClick={HandleBtn}>
                2
              </button>
              <button className="cal" value="3" onClick={HandleBtn}>
                3
              </button>
              <button className="cal" value="+" onClick={HandleBtn}>
                +
              </button>
            </div>
            <div className="buttonBox">
              <button className="cal" value="0" onClick={HandleBtn}>
                0
              </button>
              <button className="cal" value="" onClick={HandleBack}>
                BACK
              </button>
              <button className="cal"  onClick={HandleCalculation}>
                =
              </button>
              <button className="cal" value="/" onClick={HandleBtn}>
                /
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Calculator;
