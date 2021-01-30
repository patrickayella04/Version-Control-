import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function NavLinks() {
    const[open, setOpen] = useState(false)
    return (
        
        <>
            <ul className="nav-links"style={{ transform: open ? "translateX(0px)" : "" }}>
                
                <Link onClick={() => setOpen(!open)} to='/'>
                <li>About</li>
                </Link>
                <Link onClick={() => setOpen(!open)} to='/about' >
                <li>Blog</li>
                </Link> 
                <Link onClick={() => setOpen(!open)} to='/contact' >
                <li className="no-border">Contact</li>
                </Link>               
        </ul> 
        
        <i onClick={() => setOpen(!open)} className="fas fa-bars burger"></i>
        
     </>
    );
}

export default NavLinks