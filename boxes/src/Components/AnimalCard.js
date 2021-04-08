import React from "react";

const AnimalCard = (props) => {
  return (
    <div className="animalcard">
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
    </div>
  );
};

export default AnimalCard;
