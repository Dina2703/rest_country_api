import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../theme-context";
import axios from "axios";

function CountryDetails() {
  const { theme } = useContext(ThemeContext);
  const { countryName } = useParams();
  const [country, setCountry] = useState(null);

  console.log(country);

  const fecthCountryDetails = async () => {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${countryName}`
      );
      setCountry(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthCountryDetails();
  }, []);

  return (
    country && (
      <div
        className="card"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <img className="card_img" src={country.flag} alt="" />
        <div className="card_body">
          <h3>{country.name}</h3>
          <p>
            <span>Popularion:</span>{" "}
            {country.population
              .toString()
              .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </p>
          <p>
            <span>Region:</span> {country.region}
          </p>
          <p>
            <span>Capital:</span> {country.capital}
          </p>
        </div>
      </div>
    )
  );
}

export default CountryDetails;
