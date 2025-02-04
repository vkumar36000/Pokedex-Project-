import React from "react";
import { Link } from "react-router-dom";





function Pokemon({ name, image, id }) {
  return (
    <Link to={`/pokemon/${id}`}>
      <div className="pokemon block" >
        <h3>{name}</h3>
        <div>
          <img className="pokemon-img" loading="lazy" width="300px" height="200px" src={image} alt="this was an image" />
        </div>
      </div>
    </Link>
  );
}

export default Pokemon;
