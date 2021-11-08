// http://localhost:3001/planets/temperature?pick=hottest

// fetch
// axios

import { useEffect, useState } from "react";

export default function HottestPlanet() {
  useEffect(async () => {
    const response = await fetch(
      "http://localhost:3001/planets/temperature?pick=hottest"
    );

    console.log(response);
  }, []);

  const [serverMessage, setServerMessage] = useState("");

  return <>{serverMessage}</>;
}
