import React from 'react';
import Navbar from './../components/Navbar.js';
import Footer from './../components/Footer.js';
import Legal from './../components/Legal.js';
import './LegalMention.css';
 
const LegalMentionPage = () => {
  return (
    <>
    <Navbar/>
    <div class="div_legal_mention">
        <h1 class="titre_mention_legal">Mentions Légales</h1>
        <p class="p_balise">En vigueur au 20/05/2024</p>

        <p class="p_balise">Conformément aux dispositions des Articles 6-III et 19 de la Loi n°2004-575 du 21 juin 2004 pour la Confiance dans l’économie numérique, dite L.C.E.N., il est porté à la connaissance des utilisateurs et visiteurs, ci-après l"Utilisateur", du site <a href="http://TCEToutTravaux.fr">TCEToutTravaux.fr</a>, ci-après le "Site", les présentes mentions légales.</p>
        <p class="p_balise">La connexion et la navigation sur le Site par l’Utilisateur implique acceptation intégrale et sans réserve des présentes mentions légales.</p>
        <p class="p_balise">Ces dernières sont accessibles sur le Site à la rubrique « Mentions légales ».</p>

        <h2 class="titre_mention_legal">ARTICLE 1 - L'ÉDITEUR</h2>
        <p class="p_balise">L’édition et la direction de la publication du Site est assurée par Fabien Mendez, domiciliée 14 rue Jean Jaurès Mareuil-sur-Ourcq, dont le numéro de téléphone est 0611223344, et l'adresse e-mail <a href="mailto:TCEToutTravaux@gmail.com">TCEToutTravaux@gmail.com</a>.</p>

        <h2 class="titre_mention_legal">ARTICLE 2 - L'HÉBERGEUR</h2>
        <p class="p_balise">L'hébergeur du Site est la société Hostinger, dont le siège social est situé au 1 avenue Hugo, Paris 75000, avec le numéro de téléphone : 0122334455 + adresse mail de contact</p>

        <h2 class="titre_mention_legal">ARTICLE 3 - ACCÈS AU SITE</h2>
        <p class="p_balise">Le Site est accessible en tout endroit, 7j/7, 24h/24 sauf cas de force majeure, interruption programmée ou non et pouvant découlant d’une nécessité de maintenance.</p>
        <p class="p_balise">En cas de modification, interruption ou suspension du Site, l'Éditeur ne saurait être tenu responsable.</p>

        <h2 class="titre_mention_legal">ARTICLE 4 - COLLECTE DES DONNÉES</h2>
        <p class="p_balise">Le site est exempté de déclaration à la Commission Nationale Informatique et Libertés (CNIL) dans la mesure où il ne collecte aucune donnée concernant les utilisateurs.</p>
        <p class="p_balise">Toute utilisation, reproduction, diffusion, commercialisation, modification de toute ou partie du Site, sans autorisation de l’Éditeur est prohibée et pourra entraîner des actions et poursuites judiciaires telles que notamment prévues par le Code de la propriété intellectuelle et le Code civil.</p>
    </div>
    <Footer/>
    <Legal/>
    </>
  );
}

export default LegalMentionPage;