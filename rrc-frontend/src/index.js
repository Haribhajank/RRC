import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import Hero from './Hero';
import Footer from './Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Footer />
  </React.StrictMode>
);


