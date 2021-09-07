import React, { useState, useEffect } from "react";

const RandomJoke = () => {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await response.json();
        setJoke(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <div>
      <Joke joke={joke} />
    </div>
  );
};

const Joke = ({ joke }) => {
  return (
    <div>
      <p>{joke.setup}</p>
      <p>{joke.punchline}</p>
    </div>
  );
};

export default RandomJoke;
