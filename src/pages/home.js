import React, { useEffect } from 'react';
import HomeCarousel from '../components/HomeCarousel';
import AboutAndNotice_crash from '../components/homePageConponents/AboutAndNotice_crash';
import AmaderLokkhoAndUddesho from '../components/homePageConponents/AmaderLokkhoAndUddesho';
import AmaderOrjons from '../components/homePageConponents/AmaderOrjons';
import HistoryOfWebSummery from '../components/homePageConponents/HistoryOfWebSummery';
import LocationAdderssAndMap from '../components/homePageConponents/LocationAdderssAndMap';
import Marquee from '../components/homePageConponents/Marquee';
import আমাদের_সার্ভিস from '../components/homePageConponents/আমাদের_সার্ভিস';
import বিভাগ_সমুহ from '../components/homePageConponents/বিভাগ_সমুহ';
import FAQs from './FAQs';

const Home = () => {
  useEffect(()=>{
    document.title="Madrasaumar";
  },[])
  return (
    <div className=''>
      <HomeCarousel />
      <Marquee />
      <HistoryOfWebSummery />
      <AboutAndNotice_crash />
      <hr className='w-full border-1 border-black  my-10' />
      <বিভাগ_সমুহ />
      <AmaderOrjons />
      <আমাদের_সার্ভিস />
      <AmaderLokkhoAndUddesho />
      
      {/* <div className='grid mb-20 justify-center pt-10'>
        <div className="flex flex-wrap items-center container my-10">
        <LogoCard />
        {/* <Stuffs /> *
        <NavLink className="w-full text-center h-10" to={'/about'} ><Button>more...</Button></NavLink>
      </div>
      </div>
       */}
      <LocationAdderssAndMap />
              {/* <NavLink to={'/donate#start'} preventScrollReset={true} >
          <BlinkDonateButton />
        </NavLink> */}
      <FAQs />
    </div>
  )
}

export default Home
