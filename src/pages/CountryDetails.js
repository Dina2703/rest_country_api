import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../theme-context";
import axios from "axios";
import { countries } from "country-data-list";
import { FaLongArrowAltLeft } from "react-icons/fa";

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
        className="country_details_container 
        "
        style={{ color: theme.color }}
      >
        <div className="back_btn_container">
          <Link to="/">
            <button
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
              }}
            >
              <FaLongArrowAltLeft />
              Back
            </button>
          </Link>
        </div>

        <div className="flex details_card">
          <img
            className="card_img"
            src={country.flag}
            alt={country.name}
            style={{ borderColor: theme.backgroundColor }}
          />
          <div className="card_body">
            <h3>{country.name}</h3>
            <div className="stats">
              <ul className="country_stats">
                <li>
                  <span>Native Name:</span> {country.nativeName}
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
              </ul>
              <ul className="country_stats part-2">
                <li>
                  <span>Top Level Domain</span>
                  {country.topLevelDomain}
                </li>
                <li>
                  <span>Currencies:</span>
                  {country.currencies?.map((each) => each.name).join(", ")}
                </li>
                <li>
                  <span>Languages:</span>
                  {country.languages?.map((each) => each.name).join(", ")}
                </li>
              </ul>
            </div>

            <div className="borders">
              <span>Border Countries: </span>

              <ul className="grid_list">
                {country.borders?.map((each) => (
                  <li
                    key={each}
                    style={{
                      backgroundColor: theme.backgroundColor,
                      color: theme.color,
                    }}
                  >
                    {each}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CountryDetails;
