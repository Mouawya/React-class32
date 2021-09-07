import React, { useState } from "react";

const Friend = () => {
  const [friend, setFriend] = useState();
  const getFriend = async () => {
    try {
      const response = await fetch("https://www.randomuser.me/api?results=1");
      const data = await response.json();
      setFriend(data.results[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button createFriend={getFriend} />
      <FriendProfile friend={friend} />
    </div>
  );
};

const FriendProfile = ({ friend }) => {
  if (friend)
    return (
      <ul>
        <li>First name: {friend.name.first}</li>
        <li>Last name: {friend.name.last}</li>
        <li>
          Address: {friend.location.street.name} {friend.location.street.number}
        </li>
        <li>Country: {friend.location.country}</li>
        <li>E-mail address: {friend.email}</li>
        <li>Phone number: {friend.phone}</li>
      </ul>
    );

  return <p>Get a Friend!</p>;
};

const Button = ({ createFriend }) => {
  return <button onClick={createFriend}>Get a friend!</button>;
};

export default Friend;
