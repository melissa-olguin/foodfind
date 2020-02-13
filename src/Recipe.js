import React from "react";

const Recipe = ({ title, calories, image, ingredients, url }) => {
  return (
    <div>
      <a href={url}>
        <h1>{title}</h1>
        <p>{ingredients}</p>
        <p>{calories}</p>
        <img src={image} alt="" />
      </a>
    </div>
  );
};
export default Recipe;
