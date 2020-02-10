import React from "react";
import "./search-filter.css";

export const SearchFilter = ({ filterLogic }) => (
  <div>
    <ul className="filters">
      <li className="filter" onClick={filterLogic}>
        Chicken
      </li>
      <li className="filter" onClick={filterLogic}>
        Fish
      </li>
      <li className="filter" onClick={filterLogic}>
        Beef
      </li>
      <li className="filter" onClick={filterLogic}>
        Pork
      </li>
      <li className="filter" onClick={filterLogic}>
        Pasta
      </li>
      <li className="filter" onClick={filterLogic}>
        Soup
      </li>
      <li className="filter" onClick={filterLogic}>
        Pizza
      </li>
      <li className="filter" onClick={filterLogic}>
        Salad
      </li>
      <li className="filter" onClick={filterLogic}>
        Risotto
      </li>
      <li className="filter" onClick={filterLogic}>
        Eggs
      </li>
      <li className="filter" onClick={filterLogic}>
        Pie
      </li>
      <li className="filter" onClick={filterLogic}>
        Cake
      </li>
    </ul>
  </div>
);
