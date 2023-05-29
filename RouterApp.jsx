import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './src/pages/Home/Home';
import About from './src/pages/About/About';
import Skills from './src/pages/Skills/Skills';
import Contact from './src/pages/Contact/Contact';
import Setup from './src/pages/Setup/Setup';

function RouterApp() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/setup" element={<Setup />} />
        </Routes>
    );
}

export default RouterApp;
