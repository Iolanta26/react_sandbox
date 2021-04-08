import React from "react";

const Boxcard = (props) => {
  const handleClick = () => {
    console.log("wow");
  };

  return (
    <div className="box">
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Title: {props.title}</p>
      <p>Title: {props.title}</p>
      <button onClick={handleClick}>CLick me</button>
    </div>
  );
};

export default Boxcard;
