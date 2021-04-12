import React, { Component } from "react";
import Circle from "./Components/Circle";
import GameOver from "./Components/GameOver";

import "./App.css";

import StartSound from "./assets/sounds/knossos.mp3";
import EndSound from "./assets/sounds/GameOver.mp3";

let gameStartSound = new Audio(StartSound);
let GameOverSound = new Audio(EndSound);

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "blue" },
      { id: 3, color: "red" },
      { id: 4, color: "purple" },
    ],
    showGameOver: false,
    rounds: 0,
    gameStart: false,
  };
  timer = undefined;
  pace = 1500;

  clickHandler = (id) => {
    console.log("wow you clicked a circle" + id);

    if (this.state.current !== id) {
      this.endHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
      rounds: 0,
    });
  };

  nexCircle = () => {
    if (this.state.rounds >= 5) {
      this.endHandler();
      return;
    }

    let nextActive = undefined;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      rounds: this.state.rounds + 1,
    });
    console.log(this.state.rounds);

    this.pace *= 0.95;

    this.timer = setTimeout(this.nexCircle, this.pace);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.nexCircle();
    this.setState({ gameStart: true });
    gameStartSound.play();
  };

  endHandler = () => {
    gameStartSound.pause();
    GameOverSound.play();
    clearTimeout(this.timer);
    this.setState({ showGameOver: true });
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.color}
          color={c.color}
          click={() => this.clickHandler(c.id)}
          active={this.state.current === c.id}
          disabled={this.state.gameStart}
        />
      );
    });

    return (
      <main>
        <h1>SpeedGame</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button onClick={this.startHandler} disabled={this.state.gameStart}>
          Start
        </button>
        <button onClick={this.endHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </main>
    );
  }
}

export default App;
