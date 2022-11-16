import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogoCard from '../AdminComponents/adminLogoCard';
import Stuffs from '../AdminComponents/Stuffs';

const About = () => {  
  const [isLogin,setIsLogin]=useState(false);
  const [isError,setIsError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  
  const navigate = useNavigate();
  useEffect(()=>{
    const checkLogin=()=>{
      axios.get('/api/login')
    .then((res)=>{
      if (!res.data.isLogin) {
        navigate('/login')
      }
    })
    .catch(err=>{
      setTimeout(() => {
        checkLogin();
      }, 1.500);
    })
    };
    checkLogin()
  },[]);


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
