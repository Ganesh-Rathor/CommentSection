import React, { useState } from "react";
import "./Counter.css";
import subImg from "./images/icon-minus.svg";
import addImg from "./images/icon-plus.svg";

function Counter(props) {
  const [Scor, setScore] = useState(props.score);

  function AddScore(e){
    setScore(Scor + 1);
  }
  function SubScore(e){
    setScore(Scor - 1);
  }
  

  return (
    <div className="counter">
      <button name="Add" onClick={AddScore}>
        <img src={addImg} alt="add" />
      </button>

      <span className="Count"> {Scor} </span>

      <button onClick={SubScore} name="Subtract">
        <img src={subImg} alt="minus" />
      </button>
    </div>
  );
}

export default Counter;
