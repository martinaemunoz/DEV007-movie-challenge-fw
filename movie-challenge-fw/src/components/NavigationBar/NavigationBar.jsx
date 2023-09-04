import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NavigationBar.css';

function NavigationBar({ isOpen, onClose }) {
  return (
    <div className={`navigation-bar ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={onClose}>x</button>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/allmovies">All Movies</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  );
}

// Define prop types
NavigationBar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default NavigationBar;