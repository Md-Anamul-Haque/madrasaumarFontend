import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const Marquee_controler = () => {
    const [dataOfMarquee,setDataOfMarquee]=useState({});
    const [isError,setIsError]=useState(null);
    const [dataOfMarquee2,setDataOfMarquee2]=useState({});
    const [txt_id, setTxt_id]=useState();
    const [isActiveEditMode,setIsActiveEditMode]=useState(false);

    const handleChangeMarquee =(e)=>{
        setDataOfMarquee2({marquee: e.target.value})
    }
    const handleSubmitMarquee=(e)=>{
        e.preventDefault()
        axios.put('/api/admin/txt/marquee/'+txt_id,dataOfMarquee2)
        .then((res)=>{
            setIsError(null)
            setDataOfMarquee(res.data.data)
            setDataOfMarquee2(res.data.data)
            setIsActiveEditMode(false)
        })
        .catch((err)=>{
            setIsError(err.message)
        })
    }

    
const Marquee = () => {
    return (
      <div className='text-2xl font-bold px-2 sm:px-4 md:px-10 lg:px-14 dark:bg-slate-800 dark:text-white shadow-2xl shadow-gray-700 dark:shadow-slate-300 my-10'>
          {dataOfMarquee && <marquee className=''>{dataOfMarquee.marquee}</marquee>}
      </div>
    )
  }
  
  
  useEffect(()=>{
    axios.get('/api/txts/marquee/')
        .then((res)=>{
            if (res.data.status) {
                setIsError(null)
                setDataOfMarquee(res.data.data[0])
                setDataOfMarquee2(res.data.data[0])
                setTxt_id(res.data.data[0].txt_id)
            } else {
                setIsError(res.data.message)
            }
        })
        .catch((err)=>{
            setIsError(err.message)
        })
  },[])
  return (
    <>
          <Marquee />

    <div className='flex flex-wrap justify-center'>
        {isError && <h2 className='text-2xl text-center text-orange-400'>{isError}</h2>}
      {isActiveEditMode && dataOfMarquee2 &&
       <form className='w-screen flex-wrap flex justify-center' onSubmit={handleSubmitMarquee}>
         <textarea className='w-full md:w-10/12' name='marquee' onChange={handleChangeMarquee} value={dataOfMarquee2.marquee} required >
             {dataOfMarquee2.marquee}
         </textarea>
        <Button type='submit'>save change</Button>
      </form>}
      <Button onClick={()=>setIsActiveEditMode(!isActiveEditMode)} color={'gray'}>{isActiveEditMode ? 'cancle':'edit marquee'}</Button>
    </div>
    </>
  )
}

export default Marquee_controler
