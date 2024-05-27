import React, { useState } from 'react';
import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';

import Legal from './../components/Legal.js';
import './Galerie.css'

const Galerie = () => {
  // State to manage which div is visible, initialized to show the first div
  const [visibleDiv, setVisibleDiv] = useState(1);

  // Function to change the visible div
  const showDiv = (divNumber) => {
    setVisibleDiv(divNumber);
  };

  return (
    <>
    <Navbar/>
    <div id='entete_galerie'>
      <h2 class="h1-titre-page-galerie">Bienvenue sur notre galerie</h2>
      <p id="galerie-p">Peinture et Revêtement, ravalement de façade, Plomberie, électicité... <br/>
        Notre galerie vous propose un aperçu du savoir-faire de notre équipe à travers différents projets.</p>
    </div>
    <ul class="nav " id="myTab" role="tablist">
      <li class="nav-item">
          <button onClick={() => showDiv(1)} class={visibleDiv === 1 ? 'nav-link' : 'nav-link-unactive'} id="tous-tab" >Tous</button>
      </li>
      <li class="nav-item">
          <button onClick={() => showDiv(2)} class={visibleDiv === 2 ? 'nav-link' : 'nav-link-unactive'} id="maisons-appartements-tab" >Ravalement / Facade</button>
      </li>
      <li class="nav-item">
          <button onClick={() => showDiv(3)} class={visibleDiv === 3 ? 'nav-link' : 'nav-link-unactive'} id="traitement-tab" >sols</button>
      </li>
      <li class="nav-item">
          <button onClick={() => showDiv(4)} class={visibleDiv === 4 ? 'nav-link' : 'nav-link-unactive'} id="autres-tab" >Peintures</button>
      </li>
    </ul>

    <div class="tab-content" id="myTabContent">
      {visibleDiv === 1 && 
      <div class="div_img_galerie" id="tous" role="tabpanel" aria-labelledby="tous-tab">
        <img class="img_galerie"  src="/images/devanture/image3.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/devanture/image4.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/travaux1.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/travaux5.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/travaux6.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/image7.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/image1.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/revetement_sol/image1.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/peinture_hotel/image1.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/peinture_hotel/image2.JPG" alt="temp" />
      </div>
      }
      {visibleDiv === 2 &&       
      <div class="div_img_galerie" id="maisons-appartements" role="tabpanel" aria-labelledby="maisons-appartements-tab">
          <img class="img_galerie"  src="/images/devanture/image3.JPG" alt="temp" />
          <img class="img_galerie"  src="/images/devanture/image4.JPG" alt="temp" />
          <img class="img_galerie"  src="/images/travaux1.JPG" alt="temp" />
          <img class="img_galerie"  src="/images/travaux5.JPG" alt="temp" />
          <img class="img_galerie"  src="/images/travaux6.JPG" alt="temp" />
      </div>
      }
      {visibleDiv === 3 && 
      <div class="div_img_galerie" id="traitement" role="tabpanel" aria-labelledby="traitement-tab">
        <img class="img_galerie"  src="/images/image7.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/image1.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/revetement_sol/image1.JPG" alt="temp" />
      </div>
      }
      {visibleDiv === 4 && 
      <div class="div_img_galerie" id="autres" role="tabpanel" aria-labelledby="autres-tab">
        <img class="img_galerie"  src="/images/peinture_hotel/image1.JPG" alt="temp" />
        <img class="img_galerie"  src="/images/peinture_hotel/image2.JPG" alt="temp" />
      </div>
      }
    </div>
    <Footer/>
    <Legal/>
    </>
  );
}

export default Galerie;