import React from "react";

const HobbyList = () => {
  const hobbies = [
    "Surfing",
    "Rock climbing",
    "Mountain biking",
    "Breakdancing",
  ];
  return (
    <div>
      {hobbies.map((hobby) => {
        return (
          <div>
            <Hobby hobby={"hobby"} />
            <h2>{hobby}</h2>
          </div>
        );
      })}
    </div>
  );
};

const Hobby = ({ hobby }) => {
  return (
    <dive>
      <p>{hobby}</p>
    </dive>
  );
};

export default HobbyList;
