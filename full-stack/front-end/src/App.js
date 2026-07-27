// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

<<<<<<< HEAD
// Importer nos composants réutilisables
import Header from './components/Header';
import Footer from './components/Footer';

// Importer nos pages
import Home from './pages/Home';

// ---- Importer nos feuilles de style ---- //

// Customiser nos composants
import './styles/Header.css';
import './styles/Footer.css';

// Customiser nos pages
import './styles/pages/Home.css';
=======
// Importer nos pages
import About from './pages/About';

// ---- Importer nos feuilles de style ---- //

// Customiser nos pages
import './styles/pages/About.css';
>>>>>>> feature/presentation-entreprise

import './styles/index.css';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
<<<<<<< HEAD
                    {/* Ajouter notre header qui est notre menu */}
                    <Header/>
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        <Route path="/" element={<Home />} /> 
                    </Routes>
                    {/* Ajouter notre footer */}
                    <Footer/>
                    
=======
                    {/* Ajouter nos routes qui sont nos pages */}
                    <Routes>
                        <Route path="/about" element={<About/>} />
                    </Routes>                    
>>>>>>> feature/presentation-entreprise
                </div>
            </Router>
        </div>
    );
}

export default App;
