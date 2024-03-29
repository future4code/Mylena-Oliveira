import axios from "axios";
import React, { useState, useEffect } from "react";


export const PokeCard = (props) =>  {
 
    // valor do estado que guarda infos e foto do pokemon

  const [pokemon, setPokemon] = useState({})


  // método que roda após a montagem do componente
//   componentDidMount() {
//     this.pegaPokemon(this.props.pokemon);
//   }

//   // método que roda após a atualização do componente.
//   // Um dos casos de atualização do componente é a
//   // mudança da props que está sendo passado pra ele
//   componentDidUpdate(prevProps) {
//     // aqui, é feita uma verificação da props anterior com a props atual.
//     // Caso a props anterior seja diferente da props atual,
//     // a função pegaPokemon é chamada.
//     if (prevProps.pokemon !== props.pokemon) {
//       pegaPokemon(props.pokemon);
//     }
//   }

  // função que bate na poke API com um nome específico de pokemon
  // Isso permite que consigamos pegar as infos dos pokemons.
  // Nos métodos de ciclo de vida, ela é chamada passando como
  // parâmetro o nome de pokemon que está chegando como props.
  
  const pegaPokemon = pokeName => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(response => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data)
      })
      .catch(err => {
        console.log(err);
      });
  }
useEffect(()=>{
    pegaPokemon(props.pokemon)
},[pokemon])
    const pokemonConst = pokemon;

    return (
      <div>
        <p>{pokemonConst.name}</p>
        <p>{pokemonConst.weight} Kg</p>
        {pokemonConst.types && <p>{pokemonConst.types[0].type.name}</p>}
        {pokemonConst.sprites && (
          <img src={pokemonConst.sprites.front_default} alt={pokemonConst.name} />
        )}
      </div>
    );
  
}

export default PokeCard;


