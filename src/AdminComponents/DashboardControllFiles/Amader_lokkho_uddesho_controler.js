import React from 'react'
import Amader_Lokkho_controler from './Amader_Lokkho_controler'
import Amader_uddesho_controler from './Amader_uddesho_controler'

const Amader_lokkho_uddesho_controler = () => {
  return (
    <div className='w-full grid md:grid-cols-2 my-16 md:space-x-7 px-3 dark:bg-slate-800 dark:text-white dark:shadow-xl'>
      <Amader_Lokkho_controler />
      <Amader_uddesho_controler />
    </div>
  )
}

export default Amader_lokkho_uddesho_controler
