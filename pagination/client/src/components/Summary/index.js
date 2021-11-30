import axios from "axios";
import { useEffect, useState } from "react";
import Item from "./Item";

import styles from "./index.module.css";

export default function Summary() {
  const limit = 20;
  const [results, setResults] = useState([]);
  const [skip, setSkip] = useState(0);
  const [lengthOfCollection, setLengthOfCollection] = useState(0);

  const handleSkipForward = () => {
    // guard
    if (skip >= lengthOfCollection) {
      return;
    }
    setSkip(skip + limit);
  };
  const handleSkipBackwards = () => {
    // guard
    if (skip <= 0) {
      return;
    }

    setSkip(skip - limit);
  };

  async function requestSummary() {
    try {
      const response = await axios.get(
        `http://localhost:3001/movies/search?limit=${limit}&skip=${skip}`
      );
      setResults(response.data["movies"]);
      setLengthOfCollection(response.data["length"]);
      console.log(response.data);
    } catch (error) {
      // runs if server returns status code other than 200
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
    <div className={styles.container}>
      <h1>Movies</h1>
      <p>
        Viewing results {skip} - {skip + limit} of {lengthOfCollection}
      </p>
      <ul>
        <li>
          <button onClick={handleSkipBackwards}>👈</button>
        </li>
        <li>
          <button onClick={handleSkipForward}>👉</button>
        </li>
      </ul>
      {results.map((result, index) => (
        <Item
          key={index}
          title={result.title}
          plot={result.plot}
          year={result.year}
        />
      ))}
    </div>
  );
}
