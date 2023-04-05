import React from "react";
import SearchBar from "./SearchBar";
import "./styles/NavBar.css";

export default function NavBar({ onSearch }) {
  return (
    <div className="nav">
      <SearchBar onSearch={onSearch} />

      <button onClick={() => onSearch()}>Random</button>
    </div>
  );
}
