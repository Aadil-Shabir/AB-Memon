import React from 'react';
import {Routes, Route} from 'react-router-dom';

import NavBar from './components/NavBar';

import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Skills from './pages/Skills';

const App: React.FC = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default App;
