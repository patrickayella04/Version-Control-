import React from 'react';
import AboutShowArea from '../organisms/about-organism/Showcase-area';
import AboutTextArea from '../organisms/about-organism/Text-area';
import FooterArea from '../organisms/footer-organism/Footer-area';
import NavArea from '../organisms/navBarArea-organism/NavBarArea';




function AboutPage() { 
    


    return (

     <>
        <div className="body">

            <NavArea />
            <AboutShowArea />
            <AboutTextArea />
            <FooterArea />

            </div> 
            
    </>
        
    )
}

export default AboutPage