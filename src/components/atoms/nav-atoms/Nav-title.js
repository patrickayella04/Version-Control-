import React, { useState } from 'react';
import { Link } from 'react-router-dom';




function NavTitle() {
    const[open, setOpen] = useState(false)
    return (
        
        <Link onClick={() => setOpen(!open)} to='/'>
               <button className="logo">See it believe it</button>
                </Link>
        
    
    );
}

export default NavTitle