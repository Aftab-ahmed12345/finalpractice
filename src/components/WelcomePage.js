import React from 'react';

import HeroSection from './HeroSection';
import Projects from './Projects';
import Reviews from './Reviews';
import Contact from './Contact';


function WelcomePage() {
return (
    <div> 
       
      <HeroSection/>
      <Projects/>
      <Reviews/>
      <Contact/>

    </div>
)
}

export default WelcomePage