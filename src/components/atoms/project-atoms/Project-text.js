import React from 'react';
import pic from './Picture/contactKeeper.jpg';
import picGit from './Picture/gitHubFinder.jpg';


function ProjectText() {
    
    return (
        
        <div className="text-area mobile-about">

            
            
            <ul className="vlog-list">

                <li >
                    
                    <a className="link-title" href="https://stark-wave-03944.herokuapp.com/login">
                        View: MERN stack study project in React!
                        </a>
                    <br />
                        Contact-keeper application using json web tokens for route authentication, and usContext to manages state and actions.
                        <br />
                    <img className="picture" src={pic} alt="" />

                    <p>View Code:
                        <a className="link-title" href="https://github.com/patrickayella04/contact-keeper"> Contact-Keeper
                        </a>
                    </p>
                                   
               
                </li>        

            <li>
                    <a className="link-title" href="https://githubfinder0101.netlify.app">
                        View: Study Project in React!
                         </a>
                    <br />
                        Github Finder application using useContext and useEffect hooks.
                        <br />
                    <img className="picture" src={picGit} alt="" />
                    <p>View Code: <a className="link-title" href="https://github.com/patrickayella04/ReactTheory"> ReactTheroy - GitHub Finder</a></p>
                </li>
            
            
            </ul>
        </div>
               

    );
}

export default ProjectText