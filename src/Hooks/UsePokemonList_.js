import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';


function UsePokemonList() {
    const [pokemonState, setpokemonState] = useState({                           //the main-state wich manage all state togather 
        pokimonList:[],
        isDownloading:true,
        pokedexURL:" https://pokeapi.co/api/v2/pokemon/",
        NextURL:'',
        PriveURL:''
      });  
    
    
      async function download() {
          //   setindownloading(true);
          //first 20 pokemons
          
          const responce = await axios.get(pokemonState.pokedexURL); //this downloads first list 20 pokemons of
          setpokemonState( (state) => ({...state, isDownloading:false}));        // first upacked the privious state then update it with new data;
          // setindownloading(false);    // when data is downloaded 
        // console.log('responce=>',responce);
    
        const pokemonResult = responce.data.results; //we get the array of pokemon from result
        
        // console.log("response,s  results=>",pokemonResult);
        // setNextURL(responce.data.next);
        // setPrivURL(responce.data.previous);
     
         setpokemonState((state) => ({
           ...state,                                            // if we use spead operator we have to use in a ""Object"" not a function;
           NextURL:responce.data.next,
           PriveURL:responce.data.previous,
         }));
      
        const pokemonResultPromise = pokemonResult.map((pokemon) =>axios.get(pokemon.url));
        // console.log("result,s  pokemon promises=>", pokemonResultPromise);
    
        const pokemonData = await axios.all(pokemonResultPromise);
    
        // console.log(pokemonData);
        const res = pokemonData.map((pokedata) => {
          const pokemon = pokedata.data;
          // console.log(pokemon);
          return {
            name: pokemon.name,
            image: pokemon.sprites.other.dream_world.front_default,
            type: pokemon.types,
            id: pokemon.id,
          };
        });
        // console.log(res);
        // PokemonList(res); /// storing data in pokimon list
        setpokemonState((state) => ({
          ...state,
          pokimonList:res,
    
        }));
           
      }
    
      useEffect(() => {
        //never return anything exept a function
        download();
      }, [ pokemonState.pokedexURL]);
       
  
  
  
  
    return( {pokemonState, setpokemonState});
}

export default UsePokemonList;