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
    <div style={{textShadow:'1px 2px 2px pink'}}  className='text-2xl font-bold px-2 sm:px-4 md:px-10 lg:px-14 bg-white rounded-xl dark:bg-slate-800 text-green-700 dark:text-white shadow-xl shadow-green-400 dark:shadow-slate-300 my-10 lg:mx-3'>
        {dataOfMarquee && <marquee className=''>{dataOfMarquee.marquee}</marquee>}
    </div>
  )
}

export default Marquee
