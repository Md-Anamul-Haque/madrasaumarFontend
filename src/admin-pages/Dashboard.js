import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AddEdiitCarousel from '../AdminComponents/addEditCarousel';
import Amader_lokkho_uddesho_controler from '../AdminComponents/DashboardControllFiles/Amader_lokkho_uddesho_controler';
import Marquee_controler from '../AdminComponents/DashboardControllFiles/Marquee_controler';
import বিভাগ_সমুহ_নিয়ন্তন from '../AdminComponents/DashboardControllFiles/বিভাগ_সমুহ_নিয়ন্তন';
import HomeCarousel from '../components/HomeCarousel';
import বিভাগ_সমুহ from '../components/homePageConponents/বিভাগ_সমুহ';
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    document.title="Dashboard";
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
      }, 1500);
    })
    };
    checkLogin()
  },[]);

  return (
    <div>
      <HomeCarousel />
      <AddEdiitCarousel />
      <Marquee_controler />


      <বিভাগ_সমুহ />
      <বিভাগ_সমুহ_নিয়ন্তন />

      <Amader_lokkho_uddesho_controler />

      {/* <Admin_AmaderOrjon /> */}
    </div>
  )
}

export default Dashboard
