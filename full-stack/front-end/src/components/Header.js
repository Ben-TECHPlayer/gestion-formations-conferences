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
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
                    <h1>Ben.</h1>
                </NavLink>
                
                <button class="menu-toggle" aria-label="Ouvrir le menu" onClick={toggleMenu}>&#9776;</button>
                
                <nav className="menu">

                    {/* Ligne principale */}
                    <div className="menu-main">
                        <NavLink to="/about">A propos de nous</NavLink>

                        <NavLink className="submenu-toggle" onClick={toggleClients}>
                            Clients
                        </NavLink>

                        <NavLink to="/#formulaire-contact" className="contact">
                            Contact
                        </NavLink>
                    </div>

                    {/* Sous-menu Clients */}
                    {boutonClientsOpen && (
                        <div className="submenu level1">
                            <NavLink to="/cours/collegiens">Collégiens</NavLink>
                            <NavLink to="/cours/lyceens">Lycéens</NavLink>
                            <NavLink to="/cours/ecole-de-commerce">École de commerce</NavLink>

                            <NavLink className="submenu-toggle" onClick={toggleEntreprises}>
                                Entreprises
                            </NavLink>
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

                </nav>

            </div>
        </header>
    );
}

export default Header;
