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
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    <h1>Ben.</h1>
                </NavLink>
                
                <button class="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
                
                <nav className={`menu ${menuOpen ? "show" : ""}`}>
                    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                    A propos de nous
                    </NavLink>
                    <NavLink to="/cours" className={({ isActive }) => isActive ? "active" : ""}>
                    Clients
                    </NavLink>
                    <NavLink to="/#formulaire-contact" className={"contact"}>
                    Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
