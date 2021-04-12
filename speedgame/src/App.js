import React, { Component } from "react";
import Circle from "./Components/Circle";

import "./App.css";

class App extends Component {
  state = {
    score: 0,
    circles: [
      { id: 1, color: "green" },
      { id: 2, color: "blue" },
      { id: 3, color: "red" },
      { id: 4, color: "purple" },
    ],
  };

  clickHandler = (id) => {
    console.log("wow you clicked a circle" + id);
    this.setState({
      score: this.state.score + 1,
    });
  };

  render() {
    const circlesList = this.state.circles.map((c) => {
      return (
        <Circle
          id={c.id}
          key={c.color}
          color={c.color}
          click={() => this.clickHandler(c.id)}
        />
      );
    });

    return (
      <div>
        <h1>SpeedGame</h1>
        <p>Your score is: {this.state.score}</p>
        <div className="circles">{circlesList}</div>
        <button>Start</button>
        <button>Stop</button>
      </div>
    );
  }
}

export default App;
