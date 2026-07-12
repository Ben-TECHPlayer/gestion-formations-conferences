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
                    {/* Les clients */}
                    {/* <NavLink to="/cours/collegiens" className={({ isActive }) => isActive ? "active" : ""}>
                    Collègiens
                    </NavLink>
                    <NavLink to="/cours/lyceens" className={({ isActive }) => isActive ? "active" : ""}>
                    Lycéens
                    </NavLink>
                    <NavLink to="/cours/ecole-de-commerce" className={({ isActive }) => isActive ? "active" : ""}>
                    Ecole de commerce
                    </NavLink>
                    <NavLink to="/cours/entreprises" className={({ isActive }) => isActive ? "active" : ""}>
                    Entreprises
                    </NavLink> */}
                    {/* Clients Entreprises */}
                    {/* <NavLink to="/cours/entreprises/banques" className={({ isActive }) => isActive ? "active" : ""}>
                    Banques
                    </NavLink>
                    <NavLink to="/cours/entreprises/etablissements-banquieres" className={({ isActive }) => isActive ? "active" : ""}>
                    Etablissements banquières
                    </NavLink> */}
                    {/* 
                    <NavLink to="/conferences" className={({ isActive }) => isActive ? "active" : ""}>
                    Conférences
                    </NavLink>
                    */}
                    <NavLink to="/#formulaire-contact" className={"contact"}>
                    Contact
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}

export default Header;
