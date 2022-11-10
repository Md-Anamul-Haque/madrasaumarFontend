import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import BlinkDonateButton from '../components/BlinkDonateButton'
import HomeCarousel from '../components/HomeCarousel'
import HistoryOfWebSummery from '../components/homePageConponents/HistoryOfWebSummery'
import Marquee from '../components/homePageConponents/Marquee'
import LogoCard from '../components/LogoCard'
import Stuffs from '../components/Stuffs'
import FAQs from './FAQs'

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HomeCarousel />
      <Marquee />
      <HistoryOfWebSummery />
      <div className='flex flex-col md:flex-row mb-20 justify-center pt-10'>
{/* logo card   */}
        <LogoCard />
        <NavLink to={'/donate#start'} preventScrollReset={true} >
          <BlinkDonateButton />
        </NavLink>
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
