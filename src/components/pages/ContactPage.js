import React from 'react';
import ContactShowArea from '../organisms/contact-organism/Showcase-area';
import ContactTextArea from '../organisms/contact-organism/Text-area';
import FooterArea from '../organisms/footer-organism/Footer-area';
import NavArea from '../organisms/navBarArea-organism/NavBarArea';





function ContactPage() { 
    


    return (

     <>
        <div className="body">

            <NavArea />
            <ContactShowArea />
            <ContactTextArea />
            <FooterArea />

            </div> 
            
    </>
        
    )
}

export default ContactPage