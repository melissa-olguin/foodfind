/*import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "c2b98cb7";
  const APP_KEY = "f0869bf01680a8472affea83a20507fa";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          text="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="search-bar" text="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.recipe.uri}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          url={recipe.recipe.url}
        />
      ))}
    </div>
  );
};

export default App;
*/
import React, { useEffect, useState, Component } from "react";
import { Recipe } from "./components/recipe/recipe";
import { SearchBox } from "./components/search-box/search-box";
import { SearchFilter } from "./components/search-filter/search-filter";
import "./Main.css";
import "./FoodFind.png";
import "./ffLogo.png";
import { Helmet } from "react-helmet";
import { FaDrumstickBite, FaSearchengin } from "react-icons/fa";

const App = () => {
  const APP_ID = "c2b98cb7";
  const APP_KEY = "f0869bf01680a8472affea83a20507fa";

  /*
  const APP_ID = "c2b98cb7";
  const APP_KEY = "f0869bf01680a8472affea83a20507fa";
  */

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getRecipes = async () => {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
    };
    getRecipes();
  }, [query]);

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };

  const filterLogic = e => {
    e.target.classList.toggle("active-filter");
    const li = e.target;
    if (li.classList.contains("active-filter")) {
      setQuery(li.innerText);
    } else {
      setQuery("");
    }
  };
  return (
    <div className="App">

      <header className="header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>FoodFind</title>
        </Helmet>
        <h1 className="logo">
          <FaDrumstickBite />
          <FaSearchengin />
          FoodFind
        </h1>
        <form onSubmit={getSearch} className="search-form">
          <SearchBox updateSearch={updateSearch} placeholder="Find recipes" />
        </form>
        <div className="search-filter">
          <SearchFilter filterLogic={filterLogic} />
        </div>
      </header>
      <div className="recipes">
        {recipes.map((recipe, index) => (
          <Recipe
            key={index}
            title={recipe.recipe.label}

            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
