import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';







function NavLinks() {
    const [open, setOpen] = useState(false);
    
    
    
    
    
    return (
        
        <>
            <ul className="nav-links"style={{ transform: open ? "translateX(0px)" : "" }}>
                
                
                <NavLink activeClassName="navbar__link--active" onClick={() => setOpen(!open)} exact to='/blog' >
                    <li   >
                         Blog
                        </li> 
                </NavLink>  
                

                <NavLink activeClassName="navbar__link--active" onClick={() => setOpen(!open)} to='/projects'  >

                    <li>Projects</li>
                </NavLink>              
                    
                
                
                <NavLink activeClassName="navbar__link--active" onClick={() => setOpen(!open)} to='/contact'  >

                    <li>Contact</li>
                </NavLink>               

                
        </ul> 
        
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
        
     </>
    );
}

export default NavLinks