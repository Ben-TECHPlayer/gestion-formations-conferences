// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos pages
import About from './pages/About';

// ---- Importer nos feuilles de style ---- //

// Customiser nos pages
import './styles/pages/About.css';

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        <Route path="/about" element={<About/>} />
                    </Routes>                    
                </div>
            </Router>
        </div>
    );
}

export default App;
