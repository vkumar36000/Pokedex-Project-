import axios from 'axios';
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import '../Pokemon details/Pokemon_detail_.css';
import UsePokemonDetails_ from '../../Hooks/UsePokemonDetails_';




function PokemonDetails({ pokemonName}) {
    const { id } = useParams(); 
    const [Pokemon] = UsePokemonDetails_( id, pokemonName);
console.log(Pokemon)
  return (
    <>
  { Pokemon.name ? (
    <div className="pokemon-detail-wrapper">
      <div className="pokemon-detail">
        <img src={Pokemon.image} alt="pokemon image" className="pokemon-detail-image"/>
        <div className="pokemon-detail-name">Name:<span>{Pokemon.name}</span> </div>
        <div className="pokemon-detail-name">Height: <span>{Pokemon.height}</span> </div>
        <div className="pokemon-detail-name">Weight: <span>{Pokemon.weight}</span> kg</div>
        <div className="pokemon-types">
          {Pokemon.types && Pokemon.types.map((t) => <div key={t}> {t} </div> )}    {/*if pokemon exist only then we render this*/}
        </div> 
      </div>

      <div className="pokemon-types-simillar-wrapper">
          <h2>Types</h2>
        <div className='pokemon-types-simillar'>
          {Pokemon.simillarPokemons.map((poke, idx) => <p key={idx} onClick={()=><PokemonDetails pokemonName={poke}/>} >{poke}</p> )}
        </div>
        </div>
      </div>  
  ) : (
    <div className='loader'></div>
  )}
    </>
  );
}

export default PokemonDetails;