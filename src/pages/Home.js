import { useState, useEffect } from "react";
import Cards from "../components/Cards";
import axios from "axios";
function Home() {
  const [data, setData] = useState([]);

  console.log(data);
  async function fetchData() {
    try {
      const response = await axios.get(
        "http://localhost:8000/country_data/?_limit=20"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Cards />
    </div>
  );
}

export default Home;
