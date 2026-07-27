// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos composants réutilisables
import Header from './components/Header';

// ---- Importer nos feuilles de style ---- //

// Customiser nos composants
import './styles/Header.css';

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter notre header qui est notre menu */}
                    <Header/>
                </div>
            </Router>
        </div>
    );
}

export default App;
