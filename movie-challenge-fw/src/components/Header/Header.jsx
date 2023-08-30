import { useState } from 'react';
import './Header.css';
import NavigationBar from '../navigationbar/navigationbar';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <header className={`header ${menuOpen ? 'menu-open' : ''}`}>
        <div className="menu-icon" onClick={handleMenuToggle}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <h1 className="title">Streamix</h1>
      </header>
      <NavigationBar isOpen={menuOpen} onClose={handleCloseMenu} />
    </div>
  );
}

export default Header;