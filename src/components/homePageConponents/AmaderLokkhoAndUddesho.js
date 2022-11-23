import axios from 'axios'
import React, { useEffect, useState } from 'react'

const AmaderLokkhoAndUddesho = () => {
  const [isLoadingL,setIsLoadingL]=useState(true)
  const [isLoadingU,setIsLoadingU]=useState(true)
  const [isErrorL,setIsErrorL]=useState(true)
  const [isErrorU,setIsErrorU]=useState(true)
  const [datasL,setDatasL]=useState({})
  const [datasU,setDatasU]=useState({})

  useEffect(()=>{
    axios.get('/api/txts/lokkho')
    .then((res)=>{
        if(res.data.status){
          setIsLoadingL(false);
          setIsErrorL(null);
          setDatasL(res.data.data[0]);
        }else{
          setIsLoadingL(false);
          setIsErrorL(res.data.message);
          setDatasL({});
        }
    })
    .catch((err)=>{
      setIsLoadingL(false);
      setIsErrorL(err.message);
      setDatasL({});
    })

    axios.get('/api/txts/uddesho')
    .then((res)=>{
        if(res.data.status){
          setIsLoadingU(false);
          setIsErrorU(null);
          setDatasU(res.data.data[0]);
        }else{
          setIsLoadingU(false);
          setIsErrorU(res.data.message);
          setDatasU({});
        }
    })
    .catch((err)=>{
      setIsLoadingU(false);
      setIsErrorU(err.message);
      setDatasU({});
    })
},[])
  return (
    <div className=' flex flex-col md:flex-row w-full p-5 md:p-10 dark:shadow-xl'>

      <div className='
         text-black dark:text-white w-full md:h-[300px] my-5 lg:mr-5 p-5 grid justify-center 
         bg-gradient-to-r hover:bg-gradient-to-t from-slate-300 dark:from-slate-800
                            via-emerald-100 dark:via-black dark:hover:via-gray-700
                            to-red-200 dark:to-gray-700
         shadow-sm-light hover:shadow-2xl lg:border-r-8
          border-emerald-500 dark:border-sky-500
         rounded-3xl hover:rounded-2xl shadow-emerald-500 hover:shadow-emerald-300 
         dark:hover:shadow-sky-500 font-medium font-sans duration-300 hover:scale-[101%]
         hover:ring-2 ring-offset-slate-700 dark:ring-teal-400
         '>

        {isLoadingL && <h2 className='text-2xl text-center'>Loading...</h2>}
        {isErrorL && <h2 className='text-2xl text-center'>{isErrorL}</h2>}
        {!isLoadingL && datasL && <>
          <h2 className='text-center text-2xl font-bold italic'>{datasL.h2}</h2>
        <p>{datasL.article}</p>
        </> }
      </div>


      <div className='
                   text-black dark:text-white w-full md:h-[300px] my-5 lg:mr-5 p-5 grid justify-center 
                   bg-gradient-to-r hover:bg-gradient-to-b from-green-300 dark:from-slate-800
                                      via-pink-200 dark:via-black dark:hover:via-gray-700
                                      to-orange-200 dark:to-gray-700
                   shadow-sm-light hover:shadow-2xl lg:border-r-8
                    border-pink-500 dark:border-pink-500
                   rounded-3xl hover:rounded-2xl shadow-red-500 hover:shadow-pink-500 
                   dark:hover:shadow-pink-600 font-medium font-sans duration-300 hover:scale-[101%]
                   hover:ring-2 ring-offset-slate-700 dark:ring-teal-400
                   '>
        {isLoadingU && <h2 className='text-2xl text-center'>Loading...</h2>}
        {isErrorU && <h2 className='text-2xl text-center'>{isErrorL}</h2>}
        {!isLoadingU && datasU && <>
          <h2 className='text-center text-2xl font-bold italic'>{datasU.h2}</h2>
        <p>{datasU.article}</p>
        </> }
      </div>
    </div>
  )
}

export default AmaderLokkhoAndUddesho
