import "./search.css";
import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = ({ onSearch }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(term.trim());
  };

  return (
    <div className="search-card">
      <div className="search-left-content">
        <h2 className="search-title">Marketplace for all</h2>
        <p className="search-subtitle">
          Find anything you need, from electronics to real estate.
        </p>

        <form className="search-bar-wrapper" onSubmit={handleSubmit}>
          <div className="search-input-group">
            <span className="search-icon-inline">
              <SearchIcon className="search-icon" />
            </span>
            <input
              id="search-input"
              type="text"
              placeholder="Search..."
              className="search-input"
              value={term}
              onChange={(e) => setTerm(e.target.value)}
            />
          </div>
          <button type="submit" className="search-submit-btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
