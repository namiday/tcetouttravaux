import React from "react"
import "./Realisation.css"
import FlipCard from "./FlipCard"
const Realisation = () => {


  return(
    <div>
        <body>
            <div class="container-res">
                <div class="pres1">
                    <img class="img-pres" src="/images/Realisation1.JPG" alt="Photo de chantier" loading="lazy"></img>
                    <div class="text-pres">
                        <h2>Services de Construction et Rénovation</h2>
                        <p>Nous travaillons ensemble depuis 2 ans et avons effectuer tout types de chantiers. Nos expériences nous permettent de nous atteler à tout les sujets !</p>
                    </div>
                </div>
                <div class="pres2">
                    <img class="img-pres" src="/images/img1.JPG" alt="zbra" loading="lazy"></img>
                    <div class="text-pres">
                        <h2>Nos Services</h2>
                        <p>Découvrez nos réalisations à travers une galerie d'images de nos réalisations. Nous vous garantissons un travail de qualité et des résultats satisfaisants.</p>
                    </div>
                </div>
                <div class="pres3">
                    <h2 class="h2-titre-gras">Visitez notre galerie</h2>
                    <p>Peinture et décoration intérieure, ravalement de façade, revêtement de sol... <br></br>
                        Notre galerie vous propose un aperçu du savoir-faire de notre équipe à travers différents projets.</p>
                    <ul id="link_list">
                        <li>
                            <FlipCard Image="/images/travaux1.JPG" Link="/galerie" Title={"Plomberie"}/>
                        </li>
                        
                        <li>
                            <FlipCard Image="/images/travaux2.JPG" Link="/galerie" Title={"Revêtement de sol"}/>
                        </li>
                        
                        <li>
                            <FlipCard Image="/images/travaux3.JPG" Link="/galerie" Title={"Isolation extérieur"}/>
                        </li> 
                    </ul>
                </div>

            </div>
        </body>
    </div>
  )
  }
export default Realisation;