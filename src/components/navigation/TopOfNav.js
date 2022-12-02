import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Clock from '../Clock'

const TopOfNav = ({...refars}) => {
  return (
    <div {...refars} >
      
      <span className='hidden sm:inline-flex w-[125px]'>
        <Clock className="font-bold" />
      </span>

      <h2 style={{textShadow:'1px 1px 2px black'}} className=' text-lg arabic-font not-italic text-center grow'>بسم هللا الرحمن الر حيم</h2>
      <Link className={'max-w-[70px]'} to={'/login'}>
        <Button className=' justify-self-end '>login</Button>
      </Link>
    </div>
  )
}

export default TopOfNav
