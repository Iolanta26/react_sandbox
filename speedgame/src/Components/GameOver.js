import React from "react";
import "./GameOver.css";

const closeHandler = () => {
  window.location.reload();
};

const EndGameText = (score) => {
  if (score < 5) {
    return "Too bad! Try again! :)";
  } else if (score < 10) {
    return "Good! But you can do better!:)";
  } else if (score < 15) {
    return "Amazing results! Try more! :)";
  } else if (score < 20) {
    return "You are a true hero! :)";
  } else if (score > 20) {
    return "You are an absolute champion! :)";
  }
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="gameover_box">
        <h2>Game over</h2>
        <p>Your score is: {props.score}</p>
        <p>{EndGameText(props.score)}</p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
};

export default GameOver;
