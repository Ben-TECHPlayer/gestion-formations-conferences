// Importer React ainsi que les routeurs
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

// Importer le header ainsi que sa customisation
import Header from './components/Header';
import "./styles/Header.css";

// Importer le système d'authentification ainsi que sa customisation
import Register from './pages/authentification/Register';
import Login from './pages/authentification/Login';

function App() {
    return (
        <div>
            {/* Ajouter notre routeur et mettre en marche pour naviguer */}
            <Router>
                <div className="App">
                    {/* Ajouter notre header */}
                    <Header/>
                    <Routes>
                        {/* Ajouter le système d'authentification */}
                        <Route path="/register" element={<Register/>} /> 
                        <Route path="/login" element={<Login/>} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
