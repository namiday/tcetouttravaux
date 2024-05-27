import React from "react"
import "./Navbar.css"
import { Link } from 'react-router-dom';


const Navbar = () => {
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return(
    <div>
        <head>
            <title>Responsive Navbar</title>
        </head>
        <body>
            <header>
            <nav>
                <div class="logo">
                    <a href="#anchorWelcome" onClick={topFunction()}><img id="logo_img"  src="/images/logo.PNG" alt="temp" /></a>
                </div>
                <input type="checkbox" id="menu-toggle"/>
                <label for="menu-toggle" class="menu-icon">&#9776;</label>
                <ul class="nav-links">
                    <li><Link to="/">Accueil</Link></li>
                    <li><Link to="/galerie">Notre Galerie</Link></li>
                    <li><Link to="/legal">Mentions légales</Link></li>
                </ul>
            </nav>
            </header>  
        </body> 
    </div>
  )
  }
export default Navbar;