import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineDownload } from "react-icons/ai";
import { v4 } from 'uuid';

const Notices = () => {
    const [notices,setNotices]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(null);
    const Notice =({data})=>{
        return(<div className='shadow-xl grid grid-cols-[auto,150px] bg-sky-200 w-full md:w-2/3 2xl:w-1/2 m-2'>
                    <Alert severity="info">{data.title} — </Alert>
                    <a href={'/asset/files/'+data.file} download={true} className="
                    flex justify-self-end h-full text-lg items-center p-1 px-5 bg-sky-200 hover:bg-blue-500 hover:rounded-sm hover:text-white focus:bg-slate-500 focus:text-white
                    z-10">
                            <AiOutlineDownload className="mr-3 h-4 w-4" />
                            {' '}download...
                    </a>
                </div>)
    }
    useEffect(()=>{
        document.title="notices";
        
        axios.get('/api/notices')
        .then((res)=>{
            console.log(res.data)
            setIsLoading(false)
            if(res.data.status){
                if(res.data.data.length > 0){console.log(res.data.data.length >0)

                    setNotices(res.data.data) 
                }else{
                    setIsError("notices is not found")
                }
            }else{
                setIsError(res.data.message);
            }
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false)
            setIsError(err.message);
        })
    },[])
    return (
        <div>
            <div className="mx-auto container py-20 flex flex-col w-full items-center ">
                <h1 className='text-4xl text-center font-normal text-pink-600'>Notice page</h1>
                    {isLoading && <h3 className='text-2xl'>loading...</h3>}
                    {!notices && <h3 className='text-2xl'>{isError}</h3>}
                    {notices && notices.map((ntc)=>{
                        return(<Notice key={v4()} data={ntc} />)
                    })}
                </div>
            </div>
    )
}

export default Notices
