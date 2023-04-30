import React from 'react';
import ReactDOM from 'react-dom/client';
import Nav from './Nav';
import Hero from './Hero';
import Chunk from './Chunk';
import Steps from './Steps';
import Challenges from './Challenges';
import Footer from './Footer';
import Instruction from './Instruction';
import FAQs from './FAQ';
import Sponsor from './Sponsor';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <Chunk />
    <Steps />
    <Challenges />
    <Instruction />
    <FAQs />
    <Sponsor />
    <Footer />
  </React.StrictMode>
);


