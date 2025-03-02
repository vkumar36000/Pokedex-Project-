import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import '../Pokemon details/PokemonDetail.css';
import UsePokemonDetails_ from '../../Hooks/UsePokemonDetails';
import UsePokemonList from '../../Hooks/UsePokemonList';

function PokemonDetails({ pokemonName }) {
  const { id } = useParams();
  const [Pokemon] = UsePokemonDetails_(id, pokemonName);
  const { pokemonState } = UsePokemonList();
  const [availabled, setavailable] = useState({});

  useEffect(() => {
    const availabel = pokemonState.pokimonList.map(poke => {
      if (poke.id == id) {
        return {
          name: poke.name,
          image: poke.image,
          weight: poke.weight,
          height: poke.height,
        };
      }
      return null;
    });

    const result = availabel.filter(to => to && to.name);
    if (result.length > 0) {
      setavailable(result[0]);
    } else {
      setavailable({});
    }
  }, [id, pokemonState.pokimonList]);

  const displayPokemon = useMemo(() => availabled.name || Pokemon.name, [availabled, Pokemon]);
  const displayImage = useMemo(() => availabled.image || Pokemon.image, [availabled, Pokemon]);
  const displayHeight = useMemo(() => availabled.height || Pokemon.height, [availabled, Pokemon]);
  const displayWeight = useMemo(() => availabled.weight || Pokemon.weight, [availabled, Pokemon]);

  return (
    <>
      <div className="pokemon-detail-wrapper">
        {displayPokemon ? (
          <div className="pokemon-detail pokemon">
            <img
              src={displayImage}
              alt="pokemon image"
              className="pokemon-detail-image"
            />
            <div className="pokemon-detail-name">
              Name:<span>{displayPokemon}</span>
            </div>
            <div className="pokemon-detail-name">
              Height: <span>{displayHeight}</span>
            </div>
            <div className="pokemon-detail-name">
              Weight: <span>{displayWeight}</span> kg
            </div>
            <div className="pokemon-types">
              {Pokemon.types &&
                Pokemon.types.map((t) => <div key={t}>{t}</div>)}
            </div>
          </div>
        ) : (
          <div className="loader"></div>
        )}

        {Pokemon && (
          <div className="pokemon-types-simillar-wrapper">
            <h2>Types</h2>
            {Pokemon.name ? (
              <div className="pokemon-types-simillar">
                {Pokemon.simillarPokemonsMap &&
                  Pokemon.simillarPokemonsMap.map((poke, idx) => (
                    <div key={idx} className="pokemon-actual-container block">
                      <p className="types-name">{poke.name}</p>
                      {poke.image ? (
                        <img src={poke.image} className="types-image" />
                      ) : (
                        <div className="loader2"></div>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="loader2"></div>
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default PokemonDetails;