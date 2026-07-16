import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import CoursCollege from './components/cours/CoursCollege';
import Paiement from './pages/Paiement';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/pages/Cours.css';
import './styles/pages/Home.css';
import './styles/pages/About.css';
import './styles/pages/Paiement.css';
import './styles/index.css';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />


              <Route path="/about" element={<About/>} /> 
              <Route path="/cours/collegiens" element={<CoursCollege />} />
              <Route path="/paiement" element={<Paiement />} />
              {/* <Route path="/conferences" element={<Conferences />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
