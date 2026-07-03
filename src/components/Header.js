import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header>
      <div className="header-container">
        <div className='home'>
        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
          <h1>Ben.</h1>
        </NavLink>
        </div>
        <div className="right-side">
          <button class="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
          <nav className={`menu ${menuOpen ? "show" : ""}`}>
            <NavLink to="/formations" className={({ isActive }) => isActive ? "active" : ""}>
              Formations
            </NavLink>
            <NavLink to="/conferences" className={({ isActive }) => isActive ? "active" : ""}>
              Conférences
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Candidater
            </NavLink>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
}




export default Header;
