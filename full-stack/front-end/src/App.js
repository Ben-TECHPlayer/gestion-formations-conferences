// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Pages de cours
import CoursCollege from './pages/cours/CoursCollege';
import CoursLycee from './pages/cours/CoursLycee';
import CoursEcoleDeCommerce from './pages/cours/CoursEcoleDeCommerce';
import CoursBanque from './pages/cours/CoursBanque';
import CoursAssurance from './pages/cours/CoursAssurance';
import CoursEtablissementBanquier from './pages/cours/CoursEtablissementBanquier';


// ---- Importer nos feuilles de style ---- //

// Customiser nos pages
import './styles/pages/Cours.css';

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        {/* Partie Clients */}
                        <Route path="/cours/collegiens" element={<CoursCollege />} /> 
                        <Route path="/cours/lyceens" element={<CoursLycee />} />
                        <Route path="/cours/ecole-de-commerce" element={<CoursEcoleDeCommerce />} />

                        {/* Partie Entreprises */}
                        <Route path="/cours/entreprises/banques" element={<CoursBanque />} />
                        <Route path="/cours/entreprises/assurances" element={<CoursAssurance />} />
                        <Route path="/cours/entreprises/etablissements-banquiers" element={<CoursEtablissementBanquier />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
