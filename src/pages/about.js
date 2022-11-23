import React, { useEffect } from 'react';
import LogoCard from '../components/LogoCard';
import Stuffs from '../components/Stuffs';

const About = () => {  
  useEffect(()=>{
    document.title="about";
  },[]) 
  return (    
    <section className="pt-16">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <LogoCard />
        <Stuffs />
        <p>
          Sunt esse elit id mollit mollit ea amet laborum aliquip. Qui exercitation commodo et mollit magna ipsum duis sit. Aliqua sint fugiat sit veniam mollit officia tempor voluptate irure anim. Sunt irure eu ullamco eiusmod. Esse pariatur excepteur enim mollit exercitation magna in culpa ullamco. Laborum voluptate incididunt cupidatat magna voluptate aliquip.
        </p>
      </div>
    </div>
    </section>
  )
}

export default About
