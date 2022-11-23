import { Alert, AlertTitle, TextField } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { FaWindowClose } from "react-icons/fa";
import ImageInputResizeAndBack from '../ImageInputResizeAndBack';
const AddOrjonWindow = ({setIsActiveAddWindow,datas,setDatas}) => {
  const [orjonFormInfo,setOrjonFormInfo]=useState({});
  const [orjonType,setOrjonType]=useState('');
  const [selectedImage,setSelectedImage]=useState('');
  const [isDataSendSuccessAlert,setIsDataSendSuccessAlert]=useState('');
  const [isDataSendErrorAlert,setIsDataSendErrorAlert]=useState('');
  const custom_alert={
    success:(message)=>{
        setIsDataSendSuccessAlert(message);
        setTimeout(() => {
            setIsDataSendSuccessAlert('');
            setIsActiveAddWindow(false)
        }, 3000);
    },
    Error:(message)=>{
        setIsDataSendErrorAlert(message);
        setTimeout(() => {
            setIsDataSendErrorAlert('');
        }, 2000);
    }
}


  const handleNewOrjonImage=(Pic)=>{
    setSelectedImage(Pic)
  }
  const handleCardType=(e)=>{
    setOrjonType(e.target.value);
  }
  const handleNewInfo=(e)=>{
    setOrjonFormInfo({...orjonFormInfo,...{[e.target.name]:e.target.value}})
  }
  const handleSubmitOrjon=(e)=>{
    e.preventDefault();
    try {
      const formData = new FormData();
      (selectedImage && formData.append("image", selectedImage))
      Object.entries(orjonFormInfo).forEach((ofi)=>{
        formData.append(ofi[0],ofi[1]);
      });
      axios.post(`/api/admin/card/${orjonType}`,
                    formData,
                    {headers: { "Content-Type": "multipart/form-data" }}
                  )
                  .then((res)=>{
                    if (res.data.status) {
                      let TmpThisDatas=datas[orjonType] || []
                          TmpThisDatas.push(res.data.data)
                      let tmpMainDatas=datas;
                      tmpMainDatas[orjonType]=TmpThisDatas;
                      setDatas(tmpMainDatas);
                      custom_alert.success(res.data.message)

                      console.log(res)
                    } else {
                      custom_alert.Error(res.data.message)
                    }
                  })
                  .catch((err)=>{
                    alert(err.message || err)
                  })
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <div className='w-full h-full bg-[#0004] z-50 grid place-items-center 
                  fixed top-0 left-0'>
      <section className='shadow-xl bg-white p-2 relative '>
      <button onClick={()=>setIsActiveAddWindow(false)} className=' absolute top-2 right-2 z-30' >
        <FaWindowClose className='hover:scale-105 text-lg text-red-400 hover:text-red-500 ' />
      </button>
        <form onSubmit={handleSubmitOrjon} className='flex flex-col space-y-5 w-60 justify-center mt-11'>
            <ImageInputResizeAndBack className="w-full h-28 rounded-lg" cb={handleNewOrjonImage} />
            <select className='text-sm' value={orjonType || ''} onChange={handleCardType} required>
              <option value={''}>Where to gain from it ?________ </option>
              <option value={'orjon_in_world'}>in world</option>
              <option value={'orjon_in_country'}>in country</option>
              <option value={'orjon_in_madrasa'}>in madrasa</option>
            </select>
            <TextField name='name' value={orjonFormInfo.name || ''} label={"Orjon name"} onChange={handleNewInfo} variant="standard" size='small' 
                required/>
            <textarea name='article' value={orjonFormInfo.article || ''} className='h-28 ' placeholder="article or Orjon" onChange={handleNewInfo}
                required />
            <Button type='submit'>+ add a Orjon</Button>
        </form>
      </section>
      {(isDataSendErrorAlert || isDataSendSuccessAlert) && <div className='fixed flex flex-col bottom-24 left-1/2 -translate-x-1/2' >
      {isDataSendErrorAlert && <Alert severity="error">
                          <AlertTitle>Error</AlertTitle>
                              {isDataSendErrorAlert} <strong>check it out!</strong>
                          </Alert>}
      {isDataSendSuccessAlert && <Alert severity="success">{isDataSendSuccessAlert} — check it out!</Alert>}
      </div>}
    </div>
  )
}
export default AddOrjonWindow
