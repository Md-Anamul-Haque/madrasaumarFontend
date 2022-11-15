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
    <div className='w-full grid md:grid-cols-2 my-16 md:space-x-7 px-3 dark:bg-slate-800 dark:text-white dark:shadow-xl'>
      <div className=' border-2 p-5 h-[300px]'>
        {isLoadingL && <h2 className='text-2xl text-center'>Loading...</h2>}
        {isErrorL && <h2 className='text-2xl text-center'>{isErrorL}</h2>}
        {!isLoadingL && datasL && <>
          <h2 className='text-center text-2xl font-bold italic'>{datasL.h2}</h2>
        <p>{datasL.article}</p>
        </> }
      </div>
      <div className=' border-2 p-5 h-[300px]'>
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
