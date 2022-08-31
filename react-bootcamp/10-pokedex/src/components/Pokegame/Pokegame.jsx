import React, { Component } from 'react'
import Pokedex from "../Pokedex/Pokedex";

import "./Pokegame.css";

class Pokegame extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: "Charmander", type: "Fire", base_experience: 62 },
            { id: 7, name: "Squirtle", type: "Water", base_experience: 63 },
            { id: 11, name: "Metapod", type: "Bug", base_experience: 72 },
            { id: 12, name: "Butterfree", type: "Flying", base_experience: 178 },
            { id: 25, name: "Pikachu", type: "Electric", base_experience: 112 },
            { id: 39, name: "Jigglypuff", type: "Normal", base_experience: 95 },
            { id: 94, name: "Gengar", type: "Poison", base_experience: 225 },
            { id: 133, name: "Eevee", type: "Normal", base_experience: 65 },
        ]
    };
  render() {
    const { pokemon } = this.props;
    let hand1 = [];
    let hand1Experience = 0;

    let hand2 = [...pokemon];
    let hand2Experience = 0;

    while (hand1.length < hand2.length) {
        let randomIndex = Math.floor(Math.random() * hand2.length);
        let randomPokemon = hand2.splice(randomIndex, 1)[0];
        hand1Experience += randomPokemon.base_experience;
        hand1.push(randomPokemon);
    }

    for (const pokemon of hand2) {
        hand2Experience += pokemon.base_experience;
    }

    return (
      <div className='Pokegame'>
        <Pokedex pokemon={hand1} experience={hand1Experience} isWinner={hand1Experience > hand2Experience} />
        <Pokedex pokemon={hand2} experience={hand2Experience} isWinner={hand1Experience < hand2Experience} />
      </div>
    )
  }
}

export default Pokegame;