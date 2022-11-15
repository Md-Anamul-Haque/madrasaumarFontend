import React from 'react';
import AddEdiitCarousel from '../AdminComponents/addEditCarousel';
import Amader_lokkho_uddesho_controler from '../AdminComponents/DashboardControllFiles/Amader_lokkho_uddesho_controler';
import Marquee_controler from '../AdminComponents/DashboardControllFiles/Marquee_controler';
import বিভাগ_সমুহ_নিয়ন্তন from '../AdminComponents/DashboardControllFiles/বিভাগ_সমুহ_নিয়ন্তন';
import HomeCarousel from '../components/HomeCarousel';
import বিভাগ_সমুহ from '../components/homePageConponents/বিভাগ_সমুহ';
const Dashboard = () => {
  return (
    <div>
      <HomeCarousel />
      <AddEdiitCarousel />
      <Marquee_controler />


      <Amader_lokkho_uddesho_controler />
      <বিভাগ_সমুহ />
      <বিভাগ_সমুহ_নিয়ন্তন />
    </div>
  )
}

export default Dashboard
