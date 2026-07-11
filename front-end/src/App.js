import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FormulaireCandidatureCollege from './components/formulaire-candidature/FormulaireCandidatureCollege';
import FormulaireCandidatureLycee from './components/formulaire-candidature/FormulaireCandidatureLycee';
import FormulaireCandidatureEcoleDeCommerce from './components/formulaire-candidature/FormulaireCandidatureEcoleDeCommerce';
import FormationCaracteristiques from './components/FormationCaracteristiques';

import AdminDashboard from './pages/admin/AdminDashboard';
import AdminCandidatureDetails from './pages/admin/AdminCandidatureDetails';

import Home from './pages/Home';
import Formations from './pages/Formations';
import Conferences from './pages/Conferences';
import Candidature from './pages/Candidature';

import FormationCollege from './pages/formations/FormationCollege';
import FormationEcoleDeCommerce from './pages/formations/FormationEcoleDeCommerce';
import FormationLycee from './pages/formations/FormationLycee';

import ConferenceRentreeLycee from './pages/conferences/ConferenceRentreeLycee';
import ConferenceRentreeCollege from './pages/conferences/ConferenceRentreeCollege';
import ConferenceRentreeEcoleDeCommerce from './pages/conferences/ConferenceRentreeEcoleDeCommerce';

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
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/candidature/:id" element={<AdminCandidatureDetails />} />


              <Route path="/formations" element={<Formations/>} /> 
              <Route path="/formations/formation-college" element={<FormationCollege/>} />
              <Route path="/formations/formation-lycee" element={<FormationLycee/>} />
              <Route path="/formations/formation-ecole-de-commerce" element={<FormationEcoleDeCommerce/>} />

              <Route path="/conferences" element={<Conferences />} />
              <Route path="/conferences/conference-rentree-college" element={<ConferenceRentreeCollege/>} />
              <Route path="/conferences/conference-rentree-lycee" element={<ConferenceRentreeLycee/>} />
              <Route path="/conferences/conference-rentree-ecole-de-commerce" element={<ConferenceRentreeEcoleDeCommerce/>} />
              
              <Route path="/candidature" element={<Candidature />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
