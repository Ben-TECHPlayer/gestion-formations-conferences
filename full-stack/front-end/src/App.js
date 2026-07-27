// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Pages de cours
import CoursCollege from './pages/cours/CoursCollege';

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
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
