import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
import { useContext } from "react";
import { ThemeContext } from "../theme-context";

function Home() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [limit, setLimit] = useState(12);
  const [loading, setLoading] = useState(true);

  const { theme } = useContext(ThemeContext);

  // console.log(data);
  async function fetchInitialData() {
    try {
      const response = await axios.get("https://restcountries.com/v2/all");
      setData(response.data.slice(0, 12));
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchInitialData();
  }, []);

  const handleLoadMore = () => {
    setLimit((prev) => prev + 8);
  };

  async function fetchMoreData() {
    try {
      const response = await axios.get(`https://restcountries.com/v2/all`);
      setData(response.data.slice(0, limit));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMoreData();
  }, [limit]);

  // console.log(data);
  const handleChange = async (event) => {
    const inputValue = event.target.value;
    setQuery(inputValue);
    if (query.length > 0) {
      const response = await axios.get(
        `https://restcountries.com/v2/name/${query}`
      );
      // console.log(response);
      setData(response.data);
    }
  };

  // console.log(data);
  const handleSelect = async (e) => {
    const region = e.target.value;
    if (region.length > 0) {
      const response = await axios.get(
        `https://restcountries.com/v2/region/${region}`
      );
      setData(response.data);
      setSelectedRegion(region);
    }
  };

  return (
    <div className="home_page">
      <div className="input_control flex">
        <input
          type="text"
          placeholder="Search for a country..."
          value={query}
          onChange={handleChange}
          onMouseDown={() => setSelectedRegion("")}
        />
        <select name="region" onChange={handleSelect} value={selectedRegion}>
          <option unselectable="on" value="">
            Filter By Region
          </option>
          <option value="africa">Africa</option>
          <option value="americas">America</option>
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
          {!query & !selectedRegion && (
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
          )}
        </>
      )}
    </div>
  );
}

export default Home;
