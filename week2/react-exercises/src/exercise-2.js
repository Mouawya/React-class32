import React, { useState } from "react";

const DogGallery = () => {
  const [dogPhotos, setDogPhotos] = useState();
  const getDogPhoto = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setDogPhotos(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Button getPhoto={getDogPhoto} />
      <DogPhoto photo={dogPhotos} />
    </div>
  );
};

const DogPhoto = ({ photo }) => {
  if (photo)
    return (
      <div>
        <img src={photo} alt="dog" />
      </div>
    );

  return <p>Get your first dog by clicking the button!</p>;
};

const Button = ({ getPhoto }) => {
  return (
    <div>
      <button onClick={getPhoto}>Get a dog!</button>
    </div>
  );
};

export default DogGallery;
