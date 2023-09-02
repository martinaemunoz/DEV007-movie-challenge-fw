import { useState } from 'react';
import PropTypes from 'prop-types';
import './SearchBar.css'

function SearchBar({ onSearch, apiKey }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = () => {
    // Construct the TMDb search URL with the API key
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

    onSearch(url);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search movies..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-input" />
      <button className="search-button" onClick={handleSearch}>
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
}

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
    apiKey: PropTypes.string.isRequired,
  };

export default SearchBar;