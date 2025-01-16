import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './custom.scss';
import './App.css';
import Hero from './Hero';
import Service from './Service';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

function App() {
    return (
    <>
     <Hero />
     <Service />
     <About />
     <Contact />
     <Footer />
    </>
  )
}

export default App
