import React from 'react';
import FooterArea from '../organisms/footer-organism/Footer-area';
import HomeShowArea from '../organisms/home-organism/Showcase-area';
import HomeTextArea from '../organisms/home-organism/Text-area';
import NavArea from '../organisms/navBarArea-organism/NavBarArea';






function HomePage() { 
    


    return (

     <>
        <div className="body">

            <NavArea />
            <HomeShowArea />
            <HomeTextArea />
            <FooterArea />

            </div> 
            
    </>
        
    )
}

export default HomePage