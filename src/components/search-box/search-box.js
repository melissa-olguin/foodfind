import React, { Component } from "react";
import { FaSearch } from "react-icons/fa";
import "./search-box.css";

export const SearchBox = ({ search, updateSearch, placeholder }) => (
  <div>
    <input
      type="text"
      className="search-bar"
      value={search}
      onChange={updateSearch}
      placeholder={placeholder}
    />
    <button type="submit" className="search-button">
      <FaSearch />
    </button>
  </div>
);
