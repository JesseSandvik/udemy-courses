import React, { Component } from "react";
import "./Pokecard.css";

const POKE_API =
  "https://assets.pokemon.com/assets/cms2/img/pokedex/detail";

function convertNumberToThreeIndexedString(number) {
  if (number <= 999) {
    return `00${number}`.slice(-3);
  } else {
    return number.toString();
  }
}

class Pokecard extends Component {
  render() {
    const { id, name, type, experience } = this.props;
    let imgSrc = `${POKE_API}/${convertNumberToThreeIndexedString(id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{name}</h1>
        <img alt={name} src={imgSrc} />
        <div className="Pokecard-data">Type: {type}</div>
        <div className="Pokecard-data">EXP: {experience}</div>
      </div>
    );
  }
}

export default Pokecard;
