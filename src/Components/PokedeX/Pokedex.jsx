import React from 'react'
import SearchPokemon from '../Search components/SearchPokemon';
import './pokedex.css'
import PokemonList from '../PokemonList/PokemonList.jsx';
import { useState } from 'react';
import PokemonDetails from '../Pokemon details/PokemonDetails.jsx';
import UsePokemonList from '../../Hooks/UsePokemonList.js';


function PokeDex() {

  const {pokemonState, setpokemonState} = UsePokemonList();
  const [search, setsearch] = useState('')


  return (
    <div className='pokedex-wrapper'>
        <SearchPokemon updateSearchTerm={setsearch}/>
        { (!search) ? <PokemonList usePokepomonList={pokemonState} setPokemonList={setpokemonState}/> : <PokemonDetails key={search} pokemonName={search}/>}   {/*""reconciliation algorithm"" => for letting react know that we are changing the component*/} 
    </div>
  );
}

export default PokeDex;