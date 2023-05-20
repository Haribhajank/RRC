import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/index.css';
import { BrowserRouter, Routes, Route ,Navigate } from "react-router-dom"
import Hero from '../src/Pages/LandingPage';
import Form1 from '../src/Pages/Form1';
import Form2 from '../src/Pages/Form2';
import Form3 from '../src/Pages/Form3';
import Formfill from '../src/Pages/Formfill';
import Team from '../src/Pages/Team';
import Contact from '../src/Pages/Contact';
import Nav from '../src/Components/Nav';
import Footer from '../src/Components/Footer';
import { Switch } from '@headlessui/react';
import Corporate from './Pages/Corporate';
import Creatives from './Pages/Creatives';
import Events from './Pages/Events';

function App () { 
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/form1" element={<Form1 />} />
          <Route path="/form2" element={<Form2 />} />
          <Route path="/form3" element={<Form3 />} />
          <Route path="/formfill" element={<Formfill />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/creatives" element={<Creatives />} />
          <Route path="/events" element={<Events />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

