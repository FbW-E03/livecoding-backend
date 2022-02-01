import axios from "axios";

import { useEffect, useState } from "react";

import Result from "./Result";

export default function Search() {
  const [results, setResults] = useState([]); // setters and getters

  async function performSearch() {
    return axios("http://localhost:3001/movies/search?limit=20");
  }

  useEffect(async () => {
    try {
      const searchResults = await performSearch();

      console.log(searchResults);

      setResults(searchResults.data.movies);
    } catch (error) {
      console.log("ERROR");
    }
  }, []);

  return (
    <>
      <h1>Search</h1>
      {results.map((item) => {
        return <Result item={item} />;
      })}
    </>
  );
}
