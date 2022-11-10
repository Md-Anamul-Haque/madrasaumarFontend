import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import AddStuffCard from './addStuffCard'
import EditStuffCard from './editStuffCard'
import Stuff from './stuff'
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

const Stuffs=()=>{
    const [stuffsData,setStuffsData]=useState([]);
    const [isLoading,setIaLoading]=useState(true);
    const [isError,setIsError]=useState(null);
    const [isCardId,SetIsCardId]= useState();
    const [isEditable,setIsEditable]= useState(false);
    const handleEditStuff=(id)=>{
        setIsEditable(!isEditable)
        SetIsCardId(id)
    };
    useEffect(()=>{
        axios.get('/api/cards/stuff')
        .then((res)=>{
            console.log(res.data)
            if (res.data.status) {
                setStuffsData(res.data.data);
                setIaLoading(false);
                setIsError(null);
            } else {
                setIaLoading(false);
                setIsError(res.data.message);
            }
        })
        .catch(err=>{
            setIsError(err.message);
            setIaLoading(false);
        })
    },[])
    return(
        <div className="w-full md:w-6/12 mb-20">
            <h1 className='text-4xl text-center font-bold'>Stuff list</h1>
            <section className='w-full'>
            <div className='grid w-full justify-end pr-10'>
                <AddStuffCard {...{stuffsData,setStuffsData}} />
                {isCardId && isEditable && <EditStuffCard {...{stuffsData,setStuffsData,card_id:isCardId,setIsEditable}} />}

            </div>

            <div className='w-full overflow-auto max-h-[40rem] flex flex-wrap'>
                {isLoading && <><StuffCardLoadingEffect />
                                <StuffCardLoadingEffect />
                                <StuffCardLoadingEffect />
                                <StuffCardLoadingEffect />
                                </>}

                {isError && <h1 className='text-2xl font-bold m-10'>{isError}</h1>}
               

                {!isLoading && !isError && stuffsData && stuffsData.map((stf)=><Stuff  data={stf} {...{handleEditStuff, isEditable}} key={uuidv4()}/>)}
            </div>
            </section>
        </div>
       )
}

export default Stuffs
