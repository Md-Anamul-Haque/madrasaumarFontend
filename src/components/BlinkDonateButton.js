import React from 'react'
import { FcDonate } from 'react-icons/fc'

const BlinkDonateButton = () => {
  return (
    <div className=' relative w-56 h-40 p-5 mr-10'>
        <span className=' animate-spin w-full h-full translate-x-full  rounded-3xl absolute top-0 left-0 grid justify-center'>
					<FcDonate className='text-[250px]' />
        </span>
        
        <div className='z-10 w-full h-full p-5 absolute rounded-lg shadow-xl shadow-blue-600'>
        <h2>if you want to donate , so click now button below</h2>

        <div className=' '>
        <span className="relative inline-flex mt-8">
            <button type="button" className="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-pointer ring-1 ring-slate-900/10 dark:ring-slate-200/20">
                Go Donate
            </button>
            <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
        </span>
        </div>
    </div>
    </div>
    
  )
}

export default BlinkDonateButton
