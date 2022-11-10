import { Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const EditNotice = ({id,setIsEditorShow,notices,setNotices}) => {
  const [tmp_formData,setTmp_formData]=useState({})
  const [isDisabled,setIsDisabled]=useState(false);
  const [isLoading,setIsLoading]=useState(true);
  const [isDataSendSuccessAlert,setIsDataSendSuccessAlert]=useState('');
  const [isDataSendErrorAlert,setIsDataSendErrorAlert]=useState('');
  const custom_alert={
    success:(message,time)=>{
        setIsDataSendSuccessAlert(message);
        setTimeout(() => {
            setIsDataSendSuccessAlert('');
        }, time);
    },
    Error:(message,time)=>{
      console.log(message)
        setIsDataSendErrorAlert(message);
        setTimeout(() => {
            setIsDataSendErrorAlert('');
        },time);
    }
}
  useEffect(()=>{
    axios.get('/api/admin/notice/'+id)
    .then((res)=>{
      console.log(res.data)
    if (res.data.status) {
      setTmp_formData(res.data.data);
    }else{
      setTmp_formData({});
      custom_alert.Error(res.data.message,4000);
      setTimeout(() => {
        setIsEditorShow(false)
      }, 2000);
    }})
    .catch((err)=>{
      setTmp_formData({});
      custom_alert.Error(err.message,4000);
      setTimeout(() => {
        setIsEditorShow(false)
      }, 2000);
    });
  },[])



const handleChangeInput = (e) =>{
  const key = e.target.name, value = e.target.value;
  setTmp_formData({...tmp_formData, ...{[key]:value}})
  console.log(tmp_formData)        
}

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put('http://localhost:3300/api/admin/notice/'+id,tmp_formData)
    .then((res)=>{
      setIsDisabled(true);
      console.log(res.data)
      if (res.data.status) {
        const tnisNoticeId = res.data.data.notice_id;
        const NewDataafterUpdate = res.data.data;
        let tmpNotices = notices;
        tmpNotices.forEach((ntc,i)=>{
          if (ntc.notice_id == tnisNoticeId ) {
              tmpNotices[i].title = NewDataafterUpdate.title;
              tmpNotices[i].article = NewDataafterUpdate.article;
          }
        });
        setNotices(tmpNotices);
        custom_alert.success('update success',2000);
        setTimeout(() => {
          setIsEditorShow(false);
        }, 2000);
      } else {
        setIsDisabled(false);
        custom_alert.Error(res.data.message,2000);
      }
    })
    .catch((err)=>{
      setIsDisabled(false);
      custom_alert.Error(err.message,3000);
    })
  }
  return (<>
   <button onClick={()=>setIsEditorShow(false)}
            className="absolute top-0 left-0 w-full h-full bg-[#0003]">
          </button>

    <div className='z-10 fixed top-0 left-0 h-full w-full grid place-items-center'>
       <form onSubmit={handleSubmit} method='post' className='relative w-full md:w-6/12 grow shadow-2xl flex flex-col m-4 mb-0 mt-8 px-5 border bg-white border-blue-300 rounded-md p-10 max-w-sm mx-auto space-y-1'>

        <button type='button' onClick={()=>setIsEditorShow(false)}
            className='absolute p-1 text-2xl bg-slate-400 hover:bg-red-600 hover:font-bold	top-2 right-2'>
        <AiOutlineClose />
        </button>

        <input type='text' className='text-xl' name='title' value={tmp_formData.title || ''} onChange={handleChangeInput} placeholder='title' disabled={isDisabled} required/>

        <textarea className='h-40' type='text' name='article' value={tmp_formData.article} onChange={handleChangeInput} placeholder='article is' disabled={isDisabled}></textarea>
        <Button disabled={isDisabled} type='submit'>save</Button>
        </form>

        {(isDataSendErrorAlert || isDataSendSuccessAlert) && <div className='fixed flex flex-col bottom-24 left-1/2 -translate-x-1/2' >
        {isDataSendErrorAlert && <Alert severity="error">
                            <AlertTitle>Error</AlertTitle>
                                {isDataSendErrorAlert} <strong>check it out!</strong>
                            </Alert>}
        {isDataSendSuccessAlert && <Alert severity="success">{isDataSendSuccessAlert} — check it out!</Alert>}
        </div>}
    </div>
    </>
  )
}

export default EditNotice
