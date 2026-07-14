import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);
    const [boutonClientsOpen, setBoutonClientsOpen] = useState(false);
    const [boutonEntreprisesOpen, setBoutonEntreprisesOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleClients = () => {
        setBoutonClientsOpen(!boutonClientsOpen);
    };

    const toggleEntreprises = () => {
        setBoutonEntreprisesOpen(!boutonEntreprisesOpen);
    };

    return (
        <header>
            <div className="header-container">
                {/* --------------------------------------------------------------------------------------------- */}
                {/* La partie où cela doit rester en ligne si on appuie sur Clients, sans monter vers le haut */}
                <div className="header-line">
                    <div className="header-title">
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                            <h1>Ben.</h1>
                        </NavLink>
                    </div>
                
                    <button class="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
                
                    <nav className="menu">

                        {/* Ligne principale */}
                        <div className="menu-main">
                            <NavLink to="/about">A propos de nous</NavLink>

                            <button className={`submenu-toggle ${boutonClientsOpen ? 'active' : ''}`} onClick={toggleClients}>
                                Clients
                            </button>

                            <NavLink to="/#formulaire-contact" className="contact">
                                Contact
                            </NavLink>
                        </div>
                    </nav>
                </div>
                {/* ------------------------------------------------------------------- */}

                    {/* Sous-menu Clients */}
                <div className="submenus-container">
                    {boutonClientsOpen && (
                        <div className="submenu level1">
                            <NavLink to="/cours/collegiens">Collégiens</NavLink>
                            <NavLink to="/cours/lyceens">Lycéens</NavLink>
                            <NavLink to="/cours/ecole-de-commerce">École de commerce</NavLink>

                            <button className={`submenu-toggle ${boutonEntreprisesOpen ? 'active' : ''}`} onClick={toggleEntreprises}>
                                Entreprises
                            </button>
                        </div>
                    )}

                    {/* Sous-menu Entreprises */}
                    {boutonEntreprisesOpen && (
                        <div className="submenu level2">
                            <NavLink to="/cours/entreprises/banques">Banques</NavLink>
                            <NavLink to="/cours/entreprises/assurances">Assurances</NavLink>
                            <NavLink to="/cours/entreprises/etablissements-banquieres">
                                Établissements banquiers
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
