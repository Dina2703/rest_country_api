import { useState } from "react";
import Card from "./Card";

function Cards({ data }) {
  const [selectedCountry, setSelectedCountry] = useState({});

  console.log(selectedCountry);
  return (
    <div className="cards_container">
      {data.map((country) => (
        <Card
          country={country}
          key={country.area}
          setSelectedCountry={setSelectedCountry}
        />
      ))}
    </div>
  );
}

export default Cards;
