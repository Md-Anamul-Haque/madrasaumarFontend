import axios from 'axios';
import React, { useEffect, useState } from 'react';
const LogoCardLoadingEffect=()=>{
    return(<div className=" w-full md:w-5/12 grow shadow-xl flex flex-col m-4 mb-0 mt-8 px-5 border border-blue-300 rounded-md p-4 max-w-sm mx-auto">
        <div className="animate-pulse flex flex-col space-x-4">
            <div className="relative grow flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500 h-36"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-8 w-8/12 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                        <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                        {/* <div className="h-2 bg-slate-600 rounded col-span-1"></div> */}
                    </div>
                    {/* <div className="h-2 bg-slate-700 rounded"></div> */}
                </div>
            </div>
        </div>
    </div>)
}
const LogoCard = () => {
    const [logo,setLogo]= useState('');
    const [cardData,setCardData]= useState({});
    const [isLoading,setIaLoading]= useState(true);
    const [isError,setIsError]= useState(null);
    useEffect(()=>{
      axios.get('/api/cards/logoCard')
      .then((res)=>{
        console.log(res.data)
        setLogo('/asset/files/'+res.data.data[0].image)
        setCardData(res.data.data[0])
        // console.log(res.data)
        setIaLoading(false)
        setIsError(false)

      })
      .catch((err)=>{
        setIsError(err.message)
        setIaLoading(false)
      })
    },[])
  return (
    <div className="min-w-[320px] max-w-md grow md:px-4 mx-auto ">
        {isLoading && <LogoCardLoadingEffect />}
        {isError && <del>{isError}</del>}

         {!isLoading && cardData 
            && <div className="relative grow flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
            <img alt="..." src={logo || ''} className="w-full align-middle rounded-t-lg" />
            <blockquote className="relative p-8 mb-4">
              <h4 className="text-xl font-bold text-white">
                {cardData.name}
              </h4>
              <p className="text-md font-light mt-2 text-white">{cardData.article}</p>
            </blockquote>
          </div>}
        </div>
  )
}

export default LogoCard
