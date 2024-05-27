import React from "react"
import { Link } from 'react-router-dom';
import "./FlipCard.css"

const FlipCard = ({ Image, Link,Title }) => {


  return(
    <a href={Link} style={{ textDecoration: 'none' }}> {/* Adding link to wrap the card */}
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img class="link_img" src={Image} alt="Avatar"></img>
                </div>
                <div class="flip-card-back">
                    <h3>{Title}</h3>
                </div>
            </div>
        </div>
    </a>
  )
  }
export default FlipCard;