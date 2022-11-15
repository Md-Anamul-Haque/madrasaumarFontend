import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TopOfNav = ({...refars}) => {
  return (
    <div {...refars} >
{/*       
      <span className=' grow hidden sm:inline'>
        <Clock className="font-bold text-lg" />
      </span> */}

      <h2 className=' text-lg font-semibold text-center grow'>bismillahgirrohmanir rohim...</h2>
      <Link className={'max-w-[70px]'} to={'/admin/logout'}>
        <Button className=' justify-self-end '>logout</Button>
      </Link>
    </div>
  )
}

export default TopOfNav
