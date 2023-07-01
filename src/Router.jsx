import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Skills from './pages/Skills/Skills';
import Setup from './pages/Setup/Setup';

function RoutesApp() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/setup' element={<Setup />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;