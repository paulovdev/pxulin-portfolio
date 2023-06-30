import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';

function RoutesApp() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;