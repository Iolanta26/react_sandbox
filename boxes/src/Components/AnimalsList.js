import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import SearchBox from "./SearchBox/SearchBox";
import "./Animal.css";

import { animals } from "./animals";

class AnimalsList extends Component {
  state = {
    animals: animals,
    searchInput: "",
  };

  clickHandler = (name) => {
    alert("Hello, my name is " + name);
  };

  searchValueHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log("input was used");
  };

  render() {
    const animalFilter = this.state.animals.filter((animal) => {
      return animal.name
        .toLocaleLowerCase()
        .includes(this.state.searchInput.toLocaleLowerCase());
    });

    const animalsList = animalFilter.map((animal) => {
      return (
        <AnimalCard
          name={animal.name}
          img={animal.img}
          clickme={() => this.clickHandler(animal.name)}
          key={animal.id}
          //   clickme={this.clickHandler.bind(this, animal.name)}
          //   key={animal.id}
        />
      );
    });
    return (
      <div>
        <SearchBox search={this.searchValueHandler} />
        <p>{this.state.searchInput}</p>
        <div className="animallist">{animalsList}</div>;
      </div>
    );
  }
}

export default AnimalsList;
