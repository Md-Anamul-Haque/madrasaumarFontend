import axios from 'axios'
import { Button } from 'flowbite-react'
import React, { useEffect, useState } from 'react'

const Amader_Lokkho_controler = () => {
    const [controlerData,setControlerData]=useState({})
    const [isLoading,setIsLoading]=useState(true)
    const [isError,setIsError]=useState(null)
    const [dataL,setDataL]=useState({})
    const [isEditable,setIsEditable]=useState(false)
    const [txt_id, setTxt_id]= useState()


    useEffect(()=>{
        axios.get('/api/txts/lokkho')
        .then((res)=>{
            if(res.data.status){
                setIsError(null);
                setDataL(res.data.data[0])
                setControlerData(res.data.data[0])
                setTxt_id(res.data.data[0].txt_id)
                setIsLoading(false)
            }else{
                setIsError(res.data.message);
                setIsLoading(false)
                setDataL({})
            }
        })
        .catch((err)=>{
            setIsError(err.message);
            setIsLoading(false)
        })
    },[])
    const handleChangeLokkho =(e)=>{
        setControlerData({...controlerData, ...{[e.target.name] : e.target.value}})
    }
    const handlesubmitChangeLokkho =()=>{
        setIsLoading(true)
        axios.put(`/api/admin/txt/lokkho/${txt_id}`,controlerData)
        .then((res)=>{
            if(res.data.status){
                setIsError(null);
                setDataL(res.data.data)
                setControlerData(res.data.data)
                setIsLoading(false)
                setIsEditable(false)

            }else{
                setIsError(res.data.message);
                setIsLoading(false)
                setDataL({})
            }
        })
    }
  return (
    <div>
        {isLoading && <h2 className='text-xl text-center'>Loading...</h2>}
        {isError && <h2 className='text-xl text-center'>{isError}</h2>}
      {!isLoading && !isError && dataL && 
      
      <form onSubmit={handlesubmitChangeLokkho}>
        {!isEditable &&
            <>
                <h2 className='text-2xl text-center p-2 m-2'>{dataL.h2}</h2>
                <article className='w-full p-5'>{dataL.article}</article>
            </>
        }
        {isEditable && <><input className='w-full dark:bg-black' type={'text'} name="h2"
            value={controlerData.h2} placeholder='heading like amader lokkho'
            onChange={handleChangeLokkho} disabled={!isEditable} />
        
        <textarea className='w-full h-full dark:bg-black' name='article'
            placeholder='article' onChange={handleChangeLokkho}
           value={controlerData.article} disabled={!isEditable} >
        </textarea>
        </>
}
        <div className='grid justify-center'>
        <label className='inline'>
            <Button color={'gray'} 
                onClick={()=>setIsEditable(!isEditable)}
                className="" >{!isEditable ? 'edit' : 'cancle'}</Button>
            {isEditable && <Button type='submit'>save</Button>}
        </label>
        </div>

      </form>
      }
    </div>
  )
}

export default Amader_Lokkho_controler
