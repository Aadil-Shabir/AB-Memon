import React from 'react';
import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Skills from './pages/Skills';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
