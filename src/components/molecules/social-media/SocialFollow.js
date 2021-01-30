/*From the different packedeges included from fontawesome, svg icons can be brought into the project for social media platforms as React components*/


import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faYoutube,
    faGithub,
    faTwitter,
    faInstagram
    
} from '@fortawesome/free-brands-svg-icons';




function SocialFollow() {
    return (

        <div className="social-container">
            <h3 className="email-social">@Patrickayella04@gmail.com</h3>
            <a href="https://www.youtube.com/channel/UCLdn7A-uA11_tNuOm59WLxA" className="youtube social">

                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
            <a href="https://www.github.com/patrickayella04/" className="github social">

                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.instagram.com/jump3_7/" className="instagram social">

                <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://twitter.com/jump3_7" className="twitter social">

                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            
            </div>
       
    )
}

export default SocialFollow