import React from "react";
import Card from "./Card";

function Cards({ data }) {
  return (
    <div className="cards_container">
      {data.map((country) => (
        <Card country={country} key={country.area} />
      ))}
    </div>
  );
}

export default Cards;
