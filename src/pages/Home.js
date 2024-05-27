import React from 'react';
import Navbar from './../components/Navbar.js';
import Diapo from './../components/Diapo.js';
import Contact from './../components/Contact.js';
import Realisation from './../components/Realisation.js';
import Footer from './../components/Footer.js';
import Legal from './../components/Legal.js';
import DiapoTravaux from './../components/DiapoTravaux.js';

const Home = () => {
  return (
    <>
      <Navbar/>
      <DiapoTravaux/>
      <Contact/>
      <Diapo/>
      <Realisation/>
      <Footer/>
      <Legal/>
    </>
  );
}

export default Home;