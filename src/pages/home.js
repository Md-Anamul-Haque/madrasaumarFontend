import { Button } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import Donate from '../components/donate'
import HomeCarousel from '../components/HomeCarousel'
import LogoCard from '../components/LogoCard'
import Stuffs from '../components/Stuffs'
import FAQs from './FAQs'

const Home = () => {
  return (
    <div className='bg-gray-100'>
      <HomeCarousel />
      <div className='flex justify-center pt-10'>
        <LogoCard />
      </div>
      <Donate />

      <div className="flex flex-wrap items-center container my-10">
        <Stuffs />
        <NavLink className="w-full text-center h-10" to={'/about'} ><Button>more...</Button></NavLink>
      </div>
      <FAQs />
    </div>
  )
}

export default Home
