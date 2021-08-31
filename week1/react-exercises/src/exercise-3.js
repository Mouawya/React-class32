import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const feedback = count > 10 ? "It's higher than 10!" : "Keep counting...";
  const updateNumber = () => {
    setCount(count + 1);
  };

  return (
    <>
      <Count number={count} />
      <Button counting={updateNumber} />
      <p>{feedback}</p>
    </>
  );
};

const Count = ({ number }) => {
  return <span>{number}</span>;
};

const Button = ({ counting }) => {
  return <button onClick={counting}>Add 1!</button>;
};

export default Counter;
