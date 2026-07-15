import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Paiement from './pages/Paiement';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/pages/Home.css';
import './styles/pages/About.css';
import './styles/index.css';
// import CoursCollege from './components/cours/CoursCollege';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />


              <Route path="/about" element={<About/>} /> 
              <Route path="/paiement" element={<Paiement />} />
              {/* <Route path="/conferences" element={<Conferences />} /> */}
              {/* <Route path="/cours/collegiens" element={<CoursCollege />} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
