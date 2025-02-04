import React from "react";
import UseDebounce from "../../Hooks/UseDebounce";

function SearchPokemon({ updateSearchTerm }) {
  const debouncedCallback = UseDebounce((event) => updateSearchTerm(event.target.value));

  return (
    <div className="search-wrapper ">
      <input
        type="text"
        placeholder="  Pokemon Name..."
        id="pokemon-name-search"
        onInput={debouncedCallback}
      />
    </div>
  );
}

export default SearchPokemon;
