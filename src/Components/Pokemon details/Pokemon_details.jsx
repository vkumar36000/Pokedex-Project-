import React from 'react'
import { useParams } from 'react-router-dom';
import '../Pokemon details/Pokemon_detail.css';
import UsePokemonDetails_ from '../../Hooks/UsePokemonDetails_';




function PokemonDetails({ pokemonName}) {
    const { id } = useParams(); 
    const [Pokemon] = UsePokemonDetails_( id, pokemonName);
    // console.log(Pokemon)
    // const TypesOfPokemons = Pokemon.simillarPokemons ? Pokemon.simillarPokemons.map((poke) => UsePokemonDetails_(poke)) : [];    //this is called fallback value for prevent run time error
   
  console.log(Pokemon);
   
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
          {Pokemon.simillarPokemonsMap.map((poke, idx)=>(
            <div key={idx} className='pokemon-actual-container'>
               <p className='types-name'>{poke.name} </p>
               {poke.image ? <img src={poke.image} className='types-image'/> : <div className='loader2'></div>}
            </div>
          ))
          
          }
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