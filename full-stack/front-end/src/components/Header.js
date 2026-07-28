import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [boutonClientsOpen, setBoutonClientsOpen] = useState(false);
    const [boutonEntreprisesOpen, setBoutonEntreprisesOpen] = useState(false);

    const location = useLocation();
    
    // 1. On crée une référence pour notre zone de navigation
    const menuRef = useRef(null);

    const isClientsActive = location.pathname.startsWith('/cours');
    const isEntreprisesActive = location.pathname.startsWith('/cours/entreprises');

    // 2. L'écouteur de "clic à l'extérieur"
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Si le menu existe ET que le clic n'est pas DEDANS
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setBoutonClientsOpen(false);
                setBoutonEntreprisesOpen(false);
                setMenuOpen(false); // Referme aussi le menu mobile
            }
        };

        // On écoute les clics de la souris sur tout le document
        document.addEventListener("mousedown", handleClickOutside);
        
        // Nettoyage de l'écouteur quand on quitte le composant
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 3. Fermer automatiquement les menus dès qu'on change de page
    useEffect(() => {
        setBoutonClientsOpen(false);
        setBoutonEntreprisesOpen(false);
        setMenuOpen(false);
    }, [location]); // Ce code s'exécute à chaque fois que l'URL (location) change

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleClients = () => {
        setBoutonClientsOpen(!boutonClientsOpen);
        if (boutonClientsOpen) {
            setBoutonEntreprisesOpen(false);
        }
    };

    const toggleEntreprises = () => {
        setBoutonEntreprisesOpen(!boutonEntreprisesOpen);
    };

    return (
        <header>
            <div className="header-container">
                <div className="header-line">
                    <div className="header-title">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            <h1>Ben.</h1>
                        </NavLink>
                    </div>
                
                    <button className="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
                
                    {/* On attache notre référence (menuRef) ici à la racine de la navigation */}
                    <nav className="menu" ref={menuRef}>
                        <div className={`menu-main ${menuOpen ? 'show' : ''}`}>
                            
                            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
                                A propos de nous
                            </NavLink>

                            <div className="dropdown-group">
                                <button 
                                    className={`submenu-toggle ${boutonClientsOpen || isClientsActive ? 'active' : ''}`} 
                                    onClick={toggleClients}
                                >
                                    Clients
                                </button>

                                <div className={`submenu level1 ${boutonClientsOpen ? 'open' : ''}`}>
                                    <NavLink to="/cours/collegiens" className={({ isActive }) => isActive ? "active" : ""}>Collégiens</NavLink>
                                    <NavLink to="/cours/lyceens" className={({ isActive }) => isActive ? "active" : ""}>Lycéens</NavLink>
                                    <NavLink to="/cours/ecole-de-commerce" className={({ isActive }) => isActive ? "active" : ""}>École de commerce</NavLink>

                                    <div className="dropdown-group">
                                        <button 
                                            className={`submenu-toggle ${boutonEntreprisesOpen || isEntreprisesActive ? 'active' : ''}`} 
                                            onClick={toggleEntreprises}
                                        >
                                            Entreprises
                                        </button>
                                        
                                        <div className={`submenu level2 ${boutonEntreprisesOpen ? 'open' : ''}`}>
                                            <NavLink to="/cours/entreprises/banques" className={({ isActive }) => isActive ? "active" : ""}>Banques</NavLink>
                                            <NavLink to="/cours/entreprises/assurances" className={({ isActive }) => isActive ? "active" : ""}>Assurances</NavLink>
                                            <NavLink to="/cours/entreprises/etablissements-banquieres" className={({ isActive }) => isActive ? "active" : ""}>
                                                Établissements banquiers
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <NavLink to="/#formulaire-contact" className="contact">
                                Contact
                            </NavLink>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;