import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
const StuffCardLoadingEffect=()=>{
    return(<div className=" w-full md:w-5/12 grow shadow-xl flex flex-col m-4 mb-0 mt-8 px-5 border border-blue-300 rounded-md p-4 max-w-sm mx-auto">
        <div className="animate-pulse flex flex-col space-x-4">
            <div className="rounded-full bg-slate-700 h-10 w-10"></div>
            <div className="flex-1 space-y-6 py-1">
                <div className="h-4 w-8/12 bg-slate-700 rounded"></div>
                <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                        <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                        <div className="h-2 w-8/12 bg-slate-700 rounded"></div>
                        <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                    </div>
                    <div className="h-2 bg-slate-700 rounded"></div>
                </div>
            </div>
        </div>
    </div>)
}
const StuffCard=({data})=>{
    return( <div className='w-full md:w-5/12 grow shadow-2xl dark:shadow-slate-400 flex flex-col m-4 mb-0 mt-8 px-5'>
    <div className="text-blueGray-500 text-center inline-flex items-center 
        justify-center w-14 h-14 my-3 shadow-lg rounded-full bg-red-500">
        <img className='w-full h-full rounded-full' src={'/asset/files/'+data.image} alt={`${data.name}`} />
    </div>
        <h2 className="text-xl mb-1 font-semibold">{data.name}</h2>
        
        <h3 className='text-lg mb-1 ml-4 font-medium underline'>{data.title}</h3>
        <span className='text-sm flex '> 
            <Link className=' hover:underline hover:text-red-700 hover:font-medium' to='#' onClick={(e) => {window.location.href = `mailto:${data.mail}`;e.preventDefault();}}>{data.mail}</Link>
        </span>
        <span>Phone : 
            <Link className='hover:underline hover:text-green-700 hover:font-medium' to='#' onClick={(e) => {window.location.href = `tel:${data.phone}`;e.preventDefault();}}>{data.phone}</Link>
        </span>
        <address className='text-md mb-1 font-medium underline'>{data.address}</address>
        {data.article && <p className='mb-4 text-blueGray-500'>{data.article}</p>}
</div>)
}

const Stuffs=()=>{
    const [stuffsData,setStuffsData]=useState([]);
    const [isLoading,setIaLoading]=useState(true);
    const [isError,setIsError]=useState(null);
    useEffect(()=>{
        axios.get('/api/cards/stuff')
        .then((res)=>{
            console.log(res.data);
            if (res.data.status) {
                setStuffsData(res.data.data);
                setIaLoading(false);
                setIsError(null);
            } else {
                setIsError(res.data.message);
                setIaLoading(false);
            }
        })
        .catch(err=>{
            console.log(err);
            setIsError("'...'");
            setIaLoading(false);
        })
    },[])
    return(
        <div className="w-full md:w-6/12 mb-20 dark:bg-slate-700 dark:text-white dark:shadow-xl">
            <h1 className='text-4xl text-center font-bold'>Stuff list</h1>
            <section className='w-full'>
            <div className='w-full overflow-auto max-h-[40rem] flex flex-wrap'>
                {isLoading && <><StuffCardLoadingEffect />
                                <StuffCardLoadingEffect />
                                <StuffCardLoadingEffect />
                                <StuffCardLoadingEffect />
                                </>}

                {isError && <h1 className='text-2xl font-bold m-10'>{isError}</h1>}
                
                {!isLoading && !isError && stuffsData && stuffsData.map((stf)=><StuffCard key={uuidv4()} data={stf} />)}
            </div>
            </section>
        </div>
       )
}

export default Stuffs
