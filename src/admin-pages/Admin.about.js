import React from 'react';
import LogoCard from '../AdminComponents/adminLogoCard';
import Stuffs from '../AdminComponents/Stuffs';

const About = () => {   
  return (    
    <section className="pt-16">
    <div className="container mx-auto">
      <div className="flex flex-wrap justify-center">
        <LogoCard />
        <Stuffs />
      </div>
    </div>
    </section>
  )
}

export default About
