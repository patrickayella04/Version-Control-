import React, {useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // We just named BrowserRouter to Router/ Install Router: npm install react-router-dom
import './App.scss';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';

import HomePage from './components/pages/HomePage';
import ReactGa from 'react-ga'; // Google Analytics

// import './components/atoms/colors/_index.scss';






  
function App() {


  useEffect(() => {
    ReactGa.initialize('UA-183472135-1')

    //to report page view
    ReactGa.pageview('/')
  }, [])
  
  return (
    <Router> 

      <h1>
        <Switch>
        
          <Route path="/" exact component = {AboutPage} />
          <Route path="/about" component = {HomePage} />
          <Route path="/contact" component = {ContactPage} />
        </Switch>
      </h1>
      
    </Router>
  );
}

export default App;

/* From Danny danny@total-applications.com to Everyone:  06:08 PM
https://projects.raspberrypi.org/en/projects/using-pip-on-windows/4
From Danny danny@total-applications.com to Everyone:  06:35 PM
https://www.amazon.co.uk/Sprint-Solve-Problems-Test-Ideas/dp/0593076117/ref=sr_1_1?dchild=1&keywords=sprint&qid=1606070043&sr=8-1
https://www.amazon.co.uk/Lean-UX-Applying-Principles-Experience/dp/1449311652


From Danny danny@total-applications.com to Everyone:  06:21 PM
https://www.amazon.co.uk/Key-Person-Influence-Revised-Five-Step-ebook/dp/B00NVQE4T8
*/
