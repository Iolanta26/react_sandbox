import React, { Component } from "react";
import Boxcard from "./Boxcard";

class BoxesList extends Component {
  state = {
    persons: [
      {
        name: "Iolanta",
        age: 25,
        title: "Designer",
      },
      {
        name: "Mary",
        age: 34,
        title: "Doctor",
      },
      {
        name: "Sarah",
        age: 48,
        title: "CEO",
      },
    ],
  };
  handleClick = () => {
    this.setState({
      persons: [
        {
          name: "Iolanta",
          age: 25,
          title: "Developer",
        },
        {
          name: "Mary",
          age: 34,
          title: "Theacher",
        },
        {
          name: "Sarah",
          age: 48,
          title: "Doctor",
        },
      ],
    });
  };

  render() {
    return (
      <main>
        <button onClick={this.handleClick}>click me</button>
        <div>
          <Boxcard
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            title={this.state.persons[0].title}
          />
          <Boxcard
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            title={this.state.persons[1].title}
          />
          <Boxcard
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            title={this.state.persons[2].title}
          />
        </div>
      </main>
    );
  }
}

export default BoxesList;
