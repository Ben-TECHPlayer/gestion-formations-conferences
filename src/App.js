import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FormulaireCandidature from './components/FormulaireCandidature';

import Home from './pages/Home';
import Formations from './pages/Formations';
import Conferences from './pages/Conferences';
import Candidature from './pages/Candidature';
import FormationCollege from './pages/formations/FormationCollege';
import FormationEcoleDeCommerce from './pages/formations/FormationEcoleDeCommerce';
import FormationLycee from './pages/formations/FormationLycee';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/Home.css';
import './styles/index.css';
import './styles/Formations.css';
import './styles/Conferences.css';
import './styles/Candidature.css';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/formations" element={<Formations/>} /> 
              <Route path="/formations/formation-college" element={<FormationCollege/>} />
              <Route path="/formations/formation-lycee" element={<FormationLycee/>} />
              <Route path="/formations/formation-ecole-de-commerce" element={<FormationEcoleDeCommerce/>} />

              <Route path="/conferences" element={<Conferences />} />
              
              <Route path="/candidature" element={<Candidature />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
