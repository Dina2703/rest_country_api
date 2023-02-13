import React from "react";

function Card({ country }) {
  return (
    <div className="card">
      <img className="card_img" src={country.flag} alt="" />
      <div className="card_body">
        <h3>{country.name}</h3>
        <p>
          <span>Popularion:</span>{" "}
          {country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <p>
          <span>Region:</span> {country.region}
        </p>
        <p>
          <span>Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
}

export default Card;
