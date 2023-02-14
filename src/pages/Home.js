import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";

function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(true);

  const { theme } = useContext(ThemeContext);

  // console.log(data);
  async function fetchData() {
    try {
      const response = await axios.get(
        "https://restcountries.com/v2/all/?_limit=12"
      );
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 8);
  };

  async function fetchMoreData() {
    try {
      const response = await axios.get(
        `https://restcountries.com/v2/?_limit=${limit}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMoreData();
  }, [limit]);

  console.log(query);
  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    const response = await axios.get(
      `http://localhost:8000/country_data/?q=${inputValue}`
    );

    setData(response.data);
  };

  return (
    <div className="home_page">
      <div className="input_control flex">
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={handleChange}
        />
        <select name="country" id="country_id">
          <option value="africa">Africa</option>
          <option value="america">America</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="oceania">Oceania</option>
        </select>
      </div>
      {loading ? (
        <div className="loading" style={{ color: theme.color }}>
          <p>Loading...</p>
        </div>
      ) : (
        <>
          <Cards data={data} />
          <button
            onClick={handleLoadMore}
            className="pagination-button"
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            Load more
          </button>
        </>
      )}
    </div>
  );
}

export default Home;
