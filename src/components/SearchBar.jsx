import "./styles/SearchBar.css";

export default function SearchBar({ onSearch }) {
  return (
    <div className="bar">
      <input type="search" className="searchInput" />
      <button className="searchButton" onClick={() => onSearch("not found ID")}>
        Agregar
      </button>
    </div>
  );
}
