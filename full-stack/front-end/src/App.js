// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos composants réutilisables
import Footer from './components/Footer';

// ---- Importer nos feuilles de style ---- //

// Customiser nos composants
import './styles/Footer.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter notre footer */}
                    <Footer/>
                </div>
            </Router>
        </div>
    );
}

export default App;
