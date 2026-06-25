import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';

import './styles/Footer.css';
import './styles/Header.css';
import './styles/Home.css';
import './styles/index.css';

function App() {
  return (
    <div>
      <Router>
        <div className="App">
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/formations" element={<Formations/>} /> 
              <Route path="/conferences" element={<Conferences />} /> */}

          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
