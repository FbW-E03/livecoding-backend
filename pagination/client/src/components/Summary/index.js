import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

export default function Summary() {
  const [results, setResults] = useState([]);
  const [limit, setLimit] = useState(5);
  const [skip, setSkip] = useState(0);

  const handleSkipForward = () => {
    setSkip(5 + skip);
  };
  const handleSkipBackwards = () => {};

  async function requestSummary() {
    try {
      const response = await axios.get(
        `http://localhost:3001/movies/search?limit=${limit}&skip=${skip}`
      );

      setResults(response.data);
      console.log(response.data);
    } catch (error) {
      console.log("Could not get data");
    }
  }

  /*

  2 use cases for using useEffect

  1. Run the callback function when the component first mounts when we do not declare a dependency `[]`
  2. Run the callback function when our dependencies change

  The name comes from "side effect" - we are running a function as a side effect to some other action

  You can think of the callback function as a side effect

   */
  useEffect(() => {
    requestSummary();
  }, [skip]);

  // When we use the array method map(), we transform the array
  // In this case, in our JSX we transform our array of objects
  // into an array of React Elements (JSX)

  return (
    <>
      <h1>Movies</h1>
      {results.map((result, index) => (
        <Item
          key={index}
          title={result.title}
          plot={result.plot}
          year={result.year}
        />
      ))}
      <ul>
        <li>
          <button onClick={handleSkipBackwards}>👈</button>
        </li>
        <li>
          <button onClick={handleSkipForward}>👉</button>
        </li>
      </ul>
    </>
  );
}
