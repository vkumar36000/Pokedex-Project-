import React from 'react'
import { Routes, Route } from 'react-router-dom';
import PokeDex from '../Components/PokedeX/Pokedex';
import PokemonDetails from '../Components/Pokemon details/PokemonDetails';




function CustomRoutes() {
  return (
    <Routes>
        <Route path='/'  element={ <PokeDex /> }></Route>
        <Route path='/pokemon/:id'  element={ <PokemonDetails/> }></Route>

    </Routes>
  )
}

export default CustomRoutes;