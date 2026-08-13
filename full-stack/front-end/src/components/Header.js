import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [boutonClientsOpen, setBoutonClientsOpen] = useState(false);
    const [boutonEntreprisesOpen, setBoutonEntreprisesOpen] = useState(false);

    const location = useLocation();
    const menuRef = useRef(null);

    const isClientsActive = location.pathname.startsWith('/cours');
    const isEntreprisesActive = location.pathname.startsWith('/cours/entreprises');

    // 1. L'écouteur de "clic à l'extérieur"
    useEffect(() => {
        const handleClickOutside = (event) => {
            // NOUVEAU : On ignore totalement le clic si l'utilisateur clique sur la barre de défilement à droite
            if (event.clientX >= document.documentElement.clientWidth) {
                return; // On stoppe la fonction ici, le menu reste ouvert
            }

            // Si le menu existe ET que le clic n'est pas DEDANS
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setBoutonClientsOpen(false);
                setBoutonEntreprisesOpen(false);
                setMenuOpen(false); 
            }
        };

        // On écoute les clics de la souris sur tout le document
        document.addEventListener("mousedown", handleClickOutside);
        
        // Nettoyage de l'écouteur quand on quitte le composant
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    // 2. Fermer automatiquement les menus dès qu'on change de page
    useEffect(() => {
        setBoutonClientsOpen(false);
        setBoutonEntreprisesOpen(false);
        setMenuOpen(false);
    }, [location]);

    // 3. NOUVEAU : Fermer le menu au scroll, SAUF sur ordinateur (largeur >= 1150px)
    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth < 1150 && menuOpen) {
                setMenuOpen(false);
                setBoutonClientsOpen(false);
                setBoutonEntreprisesOpen(false);
            }
        };

        // On écoute le défilement de la page
        window.addEventListener("scroll", handleScroll);
        
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [menuOpen]); // Ce useEffect se met à jour quand menuOpen change

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
                
                    <nav className="menu" ref={menuRef}>
                        <div className={`menu-main ${menuOpen ? 'show' : ''}`}>
                            
                            {/* NOUVEAU : Le bouton X pour fermer le menu */}
                            <button 
                                className="menu-close" 
                                aria-label="Fermer le menu" 
                                onClick={() => setMenuOpen(false)}
                            >
                                &times;
                            </button>
                            
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

                            <NavLink to="/#formulaire-contact" className={`contact ${location.hash === '#formulaire-contact' ? 'active' : ''}`}>
                                Contact
                            </NavLink>

                            <div className="espace-apprenant">
                                <p>Espace Apprenant</p>
                                <div className="btn-authentification">
                                    <NavLink to="/login" className={({ isActive }) => isActive ? "active" : ""}>
                                        Se connecter
                                    </NavLink>

                                    <NavLink to="/register" className={({ isActive }) => isActive ? "active" : ""}>
                                        Créer un compte
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default Header;