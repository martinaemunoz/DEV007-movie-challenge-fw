import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'
import { FiSearch } from "react-icons/fi";

const apiKey = 'db946c84f7b0a4d24fbc4e2ec032838e';

function SearchBar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // If the search input is empty, trigger a callback to show all movies
      onSearch(null);
    } else {
    // Construct the TMDb search URL with the API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    onSearch(url);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // If the Enter key is pressed, trigger the search
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="search-input" />
      <button className="search-button" onClick={handleSearch}>
      <FiSearch className="icon-search" />
      </button>
    </div>
  );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

export default SearchBar;