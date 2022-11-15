import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTwitter, FaYoutube } from 'react-icons/fa'

const LeftIcons = ({isActiveLeftIcons}) => {
  return (
    <div className={`duration-300 
            ${!isActiveLeftIcons ? '-translate-x-[98%]':'translate-x-0'}
             fixed left-0 top-[50%] hover:translate-x-0 -translate-y-2/4 z-50 `} >
      <ul className='space-y-3 shadow-2xl bg-pink-200 py-3 pl-1 pr-2 rounded-md'>
        <li className=' bg-white-500  hover:bg-blue-500 text-blue-500 hover:text-white rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>
          <FaFacebook />
        </li>
        <li className=' bg-white-700 text-pink-700 hover:text-white hover:bg-pink-600 rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>
          <FaInstagramSquare />
        </li>
        <li className=' bg-white-400 hover:bg-blue-500 text-blue-500 hover:text-white rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>
          <FaTwitter />
        </li>
        <li className=' bg-white-400 text-red-700 hover:text-white hover:bg-red-600 rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>
          <FaYoutube />
        </li>
      </ul>
    </div>
  )
}

export default LeftIcons
