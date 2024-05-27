import React from "react"
import "./Legal.css"
import { Link } from 'react-router-dom';

const Legal = () => {


  return(
    <section class="section_legal">
        <p>2024 © TCE Tout travaux. Tous droits réservés. En savoir plus sur les <Link to="/legal">Mentions légales</Link></p>
    </section>

  )
  }
export default Legal;