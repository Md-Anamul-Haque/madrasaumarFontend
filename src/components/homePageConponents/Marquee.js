import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Marquee = () => {
  const [isError,setIsError]= useState(null)
  const [dataOfMarquee, setDataOfMarquee] =useState({});
  useEffect(()=>{
    axios.get('/api/txts/marquee/')
        .then((res)=>{
            if (res.data.status) {
                setIsError(null)
                setDataOfMarquee(res.data.data[0])
            } else {
                setIsError(res.data.message)
            }
        })
        .catch((err)=>{
            setIsError(err.message)
        })
  },[])
  return (
    <div className='text-2xl font-bold px-2 sm:px-4 md:px-10 lg:px-14 dark:bg-slate-800 dark:text-white shadow-2xl shadow-gray-700 dark:shadow-slate-300 my-10'>
        {dataOfMarquee && <marquee className=''>{dataOfMarquee.marquee}</marquee>}
    </div>
  )
}

export default Marquee
