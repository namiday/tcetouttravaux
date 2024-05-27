import Navbar from './components/Navbar.js';
import Diapo from './components/Diapo.js';
import Contact from './components/Contact.js';
import Realisation from './components/Realisation.js';
import Footer from './components/Footer.js';
import Legal from './components/Legal.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.js'
import GaleriePage from './pages/Galerie.js'
import LegalMentionPage from './pages/LegalMentionPage.js';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/galerie" element={<GaleriePage />} />
        <Route path="/legal" element={<LegalMentionPage />} />
      </Routes>
    </Router>
    </>
);
}
export default App;
