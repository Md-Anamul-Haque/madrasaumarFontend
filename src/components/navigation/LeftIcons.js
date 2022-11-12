import React from 'react'

const LeftIcons = ({isActiveLeftIcons}) => {
  return (
    <div className={`duration-300 
            ${!isActiveLeftIcons ? '-translate-x-full':'translate-x-0'}
             fixed left-0 top-[50%] hover:translate-x-0 -translate-y-2/4 z-50 `} >
      <ul className='space-y-3 shadow-2xl bg-pink-200 py-3 pl-1 pr-2 rounded-md'>
        <li className=' bg-slate-400 hover:bg-orange-500 text-white rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>fb</li>
        <li className=' bg-slate-400 hover:bg-orange-500 text-white rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>in</li>
        <li className=' bg-slate-400 hover:bg-orange-500 text-white rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>tw</li>
        <li className=' bg-slate-400 hover:bg-orange-500 text-white rounded-2xl hover:rounded-full ring-2 hover:ring-4 p-2 cursor-pointer'>yt</li>
      </ul>
    </div>
  )
}

export default LeftIcons
