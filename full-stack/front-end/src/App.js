// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos pages
import Home from './pages/Home';

// ---- Importer nos feuilles de style ---- //

// Customiser nos pages
import './styles/pages/Home.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
