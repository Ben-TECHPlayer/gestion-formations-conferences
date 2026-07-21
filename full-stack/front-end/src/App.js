// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer nos composants réutilisables
import Header from './components/Header';
import Footer from './components/Footer';

// Importer nos pages
import Home from './pages/Home';
import About from './pages/About';

// ---- Importer nos feuilles de style ---- //

// Customiser nos composants
import './styles/Footer.css';
import './styles/Header.css';

// Customiser nos pages
import './styles/pages/Home.css';
import './styles/pages/About.css';

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter notre header qui est notre menu */}
                    <Header />
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                        <Route path="/about" element={<About/>} />
                        <Route path="/cours/collegiens" element={<CoursCollege />} /> 
                        <Route path="/paiement" element={<Paiement />} />
                        {/* <Route path="/conferences" element={<Conferences />} /> */}
                    </Routes>
                    {/* Ajouter notre footer */}
                    <Footer />
                </div>
            </Router>
        </div>
    );
}

export default App;
