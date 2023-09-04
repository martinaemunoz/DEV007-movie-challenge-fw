import { useState, useEffect } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './GenreDropdown.css';

const GenreDropdown = ({ onSelectGenre }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('All Movies');

  const genres = [
    { id: 'all', name: 'All Movies' },
    { id: 28, name: 'Action' },
    { id: 12, name: 'Adventure' },
    { id: 16, name: 'Animation' },
    { id: 35, name: 'Comedy' },
    { id: 80, name: 'Crime' },
    { id: 18, name: 'Drama' },
  ];

  useEffect(() => {
    // Call onSelectGenre(null) only when the component mounts
    if (selectedGenre === 'All Movies') {
      onSelectGenre(null); // Pass null for "All Movies"
    }
  }, []);

  const toggleDropdown = () => {
    console.log('Toggle dropdown');
    setIsOpen(!isOpen);
  };

  const handleGenreSelect = (genre) => {
    setSelectedGenre(genre.name); // Set the selected genre name
    setIsOpen(false);
    onSelectGenre(genre.id === 'all' ? null : genre.id); // Always pass the genre id
  };

  return (
    <div className="genre-dropdown">
      <h2 className="browse-title">Browse by genre:</h2>
      <div className="dropdown-toggle" onClick={toggleDropdown}>
        <span className="dropdown-label">{selectedGenre}</span>
        <FaCaretDown className={`dropdown-icon ${isOpen ? 'open' : ''}`} />
      </div>
      <ul className={`genre-menu ${isOpen ? 'open' : ''}`}>
        {genres.map((genre) => (
          <li
            key={genre.id}
            className="genre-item"
            onClick={() => handleGenreSelect(genre)}
          >
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

GenreDropdown.propTypes = {
  onSelectGenre: PropTypes.func.isRequired,
};

export default GenreDropdown;