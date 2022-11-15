import axios from 'axios';
import { Carousel } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
const HomeCarousel = () => {
  const [datas,setDatas]= useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(null);

  useEffect(()=>{
    axios.get('/api/cards/carousel')
    .then((res)=>{
      if(res.data.status){
        setIsError(null)
        setDatas(res.data.data)
      setIsLoading(false)
      }else{
        setIsError(res.data.message)
        setDatas([])
      setIsLoading(false)
      }
    })
    .catch((err)=>{
      setIsError(err.message)
      setIsLoading(false)
      setDatas([])
    })
  },[]);

  return (
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 px-2 sm:px-5 lg:px-8 xl:px-12 2xl:px-14">
                  {isLoading && <h2 className='text-4xl text-center font-bold'>Loading...</h2>}
                  {isError && <h2 className='text-4xl text-center font-bold'>{isError}</h2>}
                  {datas && <Carousel>
                          {datas.map((data)=>{
                            return(
                              <div key={uuid()} className="flex h-full items-center justify-center bg-gray-500 dark:bg-slate-900 dark:text-white">
                                  <img className='w-auto h-full' src={`/asset/files/${data.image}`} alt='slide image'/>
                              </div>
                            )
                          })}
                   </Carousel>}

      </div>
  )
}

export default HomeCarousel
