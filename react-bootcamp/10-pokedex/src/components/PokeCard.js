import React, { Component } from "react";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

class PokeCard extends Component {
  render() {
    const { id, name, type, experience } = this.props;
    let imgSrc = `${POKE_API}/${id}.png`;
    return (
      <div className="PokeCard">
        <h1>{name}</h1>
        <img alt={name} src={imgSrc} />
        <div>Type: {type}</div>
        <div>EXP: {experience}</div>
      </div>
    );
  }
}

export default PokeCard;
