import axios, { AxiosHeaders } from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Pokemon from "../Pokemon/Pokemon_";
import '../../assets/icons8-loading-circle.gif';
import UsePokemonList from "../../Hooks/UsePokemonList_";


function PokemonList({ usePokepomonList, setPokemonList }) {
  // const [pokimonList, setpokimonList] = useState([]);
  // const [indownloading, setindownloading] = useState(true);
  // const [pokedexURL, setpokedexURL] = useState(" https://pokeapi.co/api/v2/pokemon/");
  // const [NextURL, setNextURL] = useState('');
  // const [PriveURL, setPrivURL] = useState('');


  //instead managingn all these states we can simply manage a state who,s is manage all state like below


  return (
    
    <div className="pokemonlist-wrapper">
      <div className="pokemon-wrapper">
        {(usePokepomonList.isDownloading) ? <div className="loader"></div> : usePokepomonList.pokimonList.map((poke) => (
              <Pokemon name={poke.name} image={poke.image} key={poke.id} id={poke.id}/>
            ))}
      </div>
      <div className="controls">
         <button disabled={usePokepomonList.PriveURL === null} onClick={() =>
          setPokemonList({...usePokepomonList, pokedexURL:usePokepomonList.PriveURL })
         }>Preve</button>

         <button disabled={usePokepomonList.NextURL === null} onClick={() =>
          setPokemonList({...usePokepomonList, pokedexURL:usePokepomonList.NextURL })
        }
         >Next</button>
      </div>
    </div>
  );
}

export default PokemonList;
