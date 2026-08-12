// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Page de paiement
import Paiement from './pages/Paiement';
import Succes from './pages/Succes';

// ---- Importer nos feuilles de style ---- //

// Customiser nos pages
import './styles/pages/Paiement.css';

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/paiement" element={<Paiement />} />
                        <Route path="/succes" element={<Succes />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
