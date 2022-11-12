import { Button } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeCarousel from '../components/HomeCarousel';
import AboutAndNotice_crash from '../components/homePageConponents/AboutAndNotice_crash';
import AmaderLokkhoAndUddesho from '../components/homePageConponents/AmaderLokkhoAndUddesho';
import HistoryOfWebSummery from '../components/homePageConponents/HistoryOfWebSummery';
import LocationAdderssAndMap from '../components/homePageConponents/LocationAdderssAndMap';
import Marquee from '../components/homePageConponents/Marquee';
import আমাদের_সার্ভিস from '../components/homePageConponents/আমাদের_সার্ভিস';
import বিভাগ_সমুহ from '../components/homePageConponents/বিভাগ_সমুহ';
import LogoCard from '../components/LogoCard';
import Stuffs from '../components/Stuffs';
import FAQs from './FAQs';

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HomeCarousel />
      <Marquee />
      <AboutAndNotice_crash />
      <hr className='w-full border-1 border-black  my-10' />
      <বিভাগ_সমুহ />
      <AmaderLokkhoAndUddesho />
      <HistoryOfWebSummery />
      <আমাদের_সার্ভিস />
      <LocationAdderssAndMap />
      <div className='flex flex-col md:flex-row mb-20 justify-center pt-10'>
{/* logo card   */}
        <LogoCard />
        {/* <NavLink to={'/donate#start'} preventScrollReset={true} >
          <BlinkDonateButton />
        </NavLink> */}
      </div>

      <div className="flex flex-wrap items-center container my-10">
        <Stuffs />
        <NavLink className="w-full text-center h-10" to={'/about'} ><Button>more...</Button></NavLink>
      </div>
      <FAQs />
    </div>
  )
}

export default Home
