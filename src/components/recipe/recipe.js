import React from "react";
import "./recipe.css";

export const Recipe = ({ title, image, ingredients, url }) => (
  <a href={url}>
    <div className="recipe">
      <h1 className="recipe_title">{title}</h1>
      <div className="image_div">
        <img className="image" src={image} alt="" />
      </div>

      <h2>Ingredients:</h2>
      <ul className="ingredients">
        {ingredients.map((ingredient, index) => (
          <li className="ingredient" key={index}>
            <i className="fas fa-caret-right" /> {ingredient.text}
          </li>
        ))}
      </ul>
    </div>
  </a>
);
