import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container } from './global/Container';
import Nav from './components/NavComponent/Nav';
import Footer from './components/Footer/Footer';
import RouterApp from '../RouterApp';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>

        <RouterApp />
      </Container>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
