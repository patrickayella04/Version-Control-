import React from 'react';
import pic from './Picture/contactKeeper.jpg';
import picGit from './Picture/gitHubFinder.jpg';
import picWeather from './Picture/weatherApp.png';
import picStripe from './Picture/stripepic.png';


function ProjectText() {
    
    return (
        
        <div className="text-area mobile-about">

            
            
            <ul className="vlog-list">
            <li>
                    <a className="link-title" href="https://buy-this-book.netlify.app/">
                        View: Stripe project!
                         </a>
                    <br />
                        Use this application to buy a book!
                        <br />
                    <img className="picture" src={picStripe} alt="" />
                    <p>View Code: <a className="link-title" href="https://github.com/patrickayella04/Purchase-This-Book"> Purchase-This-Book </a></p>
                </li>

            <li>
                    <a className="link-title" href="https://patricks-weather.netlify.app/">
                        View: Weather project!
                         </a>
                    <br />
                        Use this application to check the weather!
                        <br />
                    <img className="picture" src={picWeather} alt="" />
                    <p>View Code: <a className="link-title" href="https://github.com/patrickayella04/Weather-and-News"> Weather-and-News </a></p>
                </li>
            

                <li >
                    
                    <a className="link-title" href="https://stark-wave-03944.herokuapp.com/login">
                        View: MERN stack project!
                        </a>
                    <br />
                        Sign up or sign in to this application to add and store all your contacts!
                        
                        <br />
                    <img className="picture" src={pic} alt="" />

                    <p>View Code:<a className="link-title" href="https://github.com/patrickayella04/contact-keeper"> Contact-Keeper
                        </a>
                    </p>
                                   
               
                </li>        

            <li>
                    <a className="link-title" href="https://githubfinder0101.netlify.app">
                        View: API GitHub Finder project!
                         </a>
                    <br />
                        Find any github profile and the first five repositories in each one with this application!
                        <br />
                    <img className="picture" src={picGit} alt="" />
                    <p>View Code: <a className="link-title" href="https://github.com/patrickayella04/ReactTheory"> ReactTheroy - GitHub Finder</a></p>
                </li>
            
            
            </ul>
        </div>
               

    );
}

export default ProjectText