import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../theme-context";

function Card({ country, setSelectedCountry }) {
  const { theme } = useContext(ThemeContext);
  return (
    <Link to={country.name.toString().toLowerCase()}>
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
    </Link>
  );
}

export default Card;
