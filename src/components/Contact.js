import React from "react"
import "./Contact.css"

const Contact = () => {


  return(
    <div>
        <body>
            <div class="container-contact">
                <h2 class="contact-heading">Vous souhaitez nous contacter ?</h2>
                <a href="mailto:contact@mc-peinture.fr" class="email-link">
                    <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2a2 2 0 00-2 2v1H5a2 2 0 00-2 2v11a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2h-1V4a2 2 0 00-2-2h-2z"></path>
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M12 15h.01"></path>
                    </svg>
                    <span>TCEToutTravaux@gmail.com</span>
                </a>
            </div>
        </body>
    </div>
  )
  }
export default Contact;