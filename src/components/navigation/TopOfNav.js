import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Clock from '../Clock'

const TopOfNav = ({...refars}) => {
  return (
    <div {...refars} >
      
      <span className='hidden sm:inline'>
        <Clock className="font-bold text-lg" />
      </span>

      <h2 className=' text-lg font-serif font-thin text-center grow'>بسم هللا الرحمن الر حيم</h2>
      <Link className={'max-w-[70px]'} to={'/login'}>
        <Button className=' justify-self-end '>login</Button>
      </Link>
    </div>
  )
}

export default TopOfNav
