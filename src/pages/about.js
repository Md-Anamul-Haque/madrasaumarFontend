import React from 'react';
import LogoCard from '../components/LogoCard';
import Stuffs from '../components/Stuffs';

const About = () => {   
  return (    
    <section className="pt-16">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <LogoCard />
        <Stuffs />
      </div>
    </div>
    </section>
  )
}

export default About
