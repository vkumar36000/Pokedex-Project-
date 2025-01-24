import { useState, useEffect } from "react";
import axios from "axios";
import UsePokemonList from "./UsePokemonList_";

function UsePokemonDetails_( id, pokemonName) {
    const {usepokemonestate, setusepokemonestate} = UsePokemonList();
    
    const [Pokemon, setPokemon] = useState({});

    async function PokemonDouwnload() {
     try {
        let response;                        // outside the if block response is not defined so we have to define it outside the block;

        if (pokemonName) {                                                                    // if use provides pokemons name we will use it or use id defaulty;
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        }else{
            response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        }
        
        const sameTypeOfpokemone = await axios.get(`https://pokeapi.co/api/v2/type/${response.data.types ? response.data.types[0].type.name : ""}`)
        const samaTypeOfPokemonesData = sameTypeOfpokemone.data.pokemon.map((p) => p.pokemon.name);
        // console.log(samaTypeOfPokemonesData)
        
        setPokemon({
           name:response.data.name,
           image:response.data.sprites.other.dream_world.front_default,
           weight:response.data.weight,
           height:response.data.height,
           types:response.data.types.map((t) => t.type.name),
           simillarPokemons:samaTypeOfPokemonesData.map(poke => poke),
        });
        
        
        setusepokemonestate({...usepokemonestate, type: response.data.types ? response.data.types[0].type.name : ""})

     } catch (error) {
        console.error("something went wrong", error);
     }
        
    }


    useEffect(() => {
      PokemonDouwnload();
    }, [])                       // whenever we want to render the pokemon element only once we use empty array;

    return [Pokemon];
}

export default UsePokemonDetails_;