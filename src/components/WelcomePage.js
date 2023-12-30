import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import Projects from './Projects';
import Reviews from './Reviews';
import Contact from './Contact';
import Footer from './Footer';

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