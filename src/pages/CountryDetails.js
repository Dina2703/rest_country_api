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
        className="country_details container"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div>
          <button>Back</button>
        </div>
        <div className="flex details_card">
          <img className="card_img" src={country.flag} alt="" />
          <div className="card_body">
            <ul>
              <li>
                <h3>{country.name}</h3>
              </li>
              <li>
                <span>Popularion:</span>{" "}
                {country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </li>
              <li>
                <span>Region:</span> {country.region}
              </li>
              <li>
                <span>Sub Region:</span> {country.subregion}
              </li>
              <li>
                <span>Capital:</span> {country.capital}
              </li>
              <li>
                <span>Top Level Domain</span>
                {country.topLevelDomain}
              </li>
              <li>
                <span>Currencies:</span>
                {country.currencies.map((each) => each.name).join(", ")}
              </li>
              <li>
                <span>Languages:</span>
                {country.languages.map((each) => each.name).join(", ")}
              </li>
            </ul>
            <div>
              <span>Border Countries: </span>
              <ul>
                <li>{}</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CountryDetails;
