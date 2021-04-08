import React, { Component } from "react";
import AnimalCard from "./AnimalCard";

import "./Animal.css";

class AnimalsList extends Component {
  state = {
    animals: [
      { id: 1, name: "Fox", img: "https://source.unsplash.com/AjZjBEjQ5Cw/" },

      {
        id: 2,
        name: "Rabbit",
        img: "https://source.unsplash.com/hS41iEO300E/",
      },

      { id: 3, name: "Wolf", img: "https://source.unsplash.com/WFPWB7Vum1E/" },
    ],
  };
  render() {
    const animalsList = this.state.animals.map((whatever) => {
      return <AnimalCard name={whatever.name} img={whatever.img} />;
    });
    return <div className="animallist">{animalsList}</div>;
  }
}

export default AnimalsList;
