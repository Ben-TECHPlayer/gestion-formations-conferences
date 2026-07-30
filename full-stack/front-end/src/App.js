// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos composants réutilisables
import Header from './components/Header';
import Footer from './components/Footer';

// Importer nos pages
import Home from './pages/Home';
import About from './pages/About';

// Pages de cours
import CoursCollege from './pages/cours/CoursCollege';
import CoursLycee from './pages/cours/CoursLycee';
import CoursEcoleDeCommerce from './pages/cours/CoursEcoleDeCommerce';

import CoursBanque from './pages/cours/CoursBanque';
import CoursAssurance from './pages/cours/CoursAssurance';
import CoursEtablissementBanquier from './pages/cours/CoursEtablissementBanquier';


// Page de paiement
import Paiement from './pages/Paiement';

// ---- Importer nos feuilles de style ---- //

// Customiser nos composants
import './styles/Header.css';
import './styles/Footer.css';

// Customiser nos pages
import './styles/pages/Home.css';
import './styles/pages/About.css';
import './styles/pages/Cours.css';
import './styles/pages/Paiement.css';

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter notre header qui est notre menu */}
                    <Header/>
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About/>} /> 

                        {/* Partie Clients */}
                        <Route path="/cours/collegiens" element={<CoursCollege />} /> 
                        <Route path="/cours/lyceens" element={<CoursLycee />} />
                        <Route path="/cours/ecole-de-commerce" element={<CoursEcoleDeCommerce />} />

                        {/* Partie Entreprises */}
                        <Route path="/cours/entreprises/banques" element={<CoursBanque />} />
                        <Route path="/cours/entreprises/assurances" element={<CoursAssurance />} />
                        <Route path="/cours/entreprises/etablissements-banquiers" element={<CoursEtablissementBanquier />} />

                        {/* Partie Paiement */}
                        <Route path="/paiement" element={<Paiement />} />
                    </Routes>
                    {/* Ajouter notre footer */}
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App;
