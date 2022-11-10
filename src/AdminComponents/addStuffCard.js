import { Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useRef, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import ImageInputResizeAndBack from './ImageInputResizeAndBack';


const AddStuffCard = ({stuffsData,setStuffsData}) => {
    const formRef = useRef(null)
    const [tmp_formData,setTmp_formData]=useState({});
    const [isWindowShow,setIsWindowShow]=useState(false);
    const [isDisabled,setIsDisabled]=useState(false);
    const [isDataSendSuccessAlert,setIsDataSendSuccessAlert]=useState('');
    const [isDataSendErrorAlert,setIsDataSendErrorAlert]=useState('');
    // const [isDataSendSuccess,setIsDataSendSuccess]=useState(false);
    const [selectedFile, setSelectedFile] = React.useState(null);

    const custom_alert={
      success:(message)=>{
          setIsDataSendSuccessAlert(message);
          setTimeout(() => {
              setIsDataSendSuccessAlert('');
          }, 3000);
      },
      Error:(message)=>{
          setIsDataSendErrorAlert(message);
          setTimeout(() => {
              setIsDataSendErrorAlert('');
          }, 2000);
      }
  }




    const handleChangeInput = (e) =>{
        const key = e.target.name, value = e.target.value;
        setTmp_formData({...tmp_formData, ...{[key]:value}})
        Object.entries(tmp_formData).forEach((data)=>{
          console.log(data[0],data[1])
        })
        
    }
    const handleUploadImage =async(resizedImage)=>{
      // let tmptmp_formData = tmp_formData;
      setSelectedFile(resizedImage)
        console.log(resizedImage)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        alert('submit')
        if (window.confirm('if you want to add click ok')) {
          const formData = new FormData();
          selectedFile && formData.append("image", selectedFile);
          Object.entries(tmp_formData).forEach((data)=>{
            formData.append(data[0],data[1]);
          });
          
          try {
            const response = await axios({
              method: "post",
              url: "/api/admin/card/stuff/",
              data: formData,
              headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response)
            if (response.data.status) {
              setStuffsData([...[response.data.data],...stuffsData])
              setIsDisabled(false)
              setIsWindowShow(false);
              custom_alert.success(response.data.message)
              setIsWindowShow(false)
              setTmp_formData({})
            }else{
              setIsDisabled(false);
              custom_alert.Error(response.data.message);
          }
          } catch(error) {
            console.log(error)
          }
        }
    }
  return (
    <div className='block'>
      <Button onClick={()=>setIsWindowShow(true)} className='ring-2 p-2 shadow bg-blend-saturation'>+ new stuff</Button>
      {isWindowShow && 
        <div className='z-10 fixed top-0 left-0 h-full w-full grid place-items-center'>
          <button onClick={()=>setIsWindowShow(false)} className="absolute top-0 left-0 w-full h-full bg-[#0003]">add a new card</button>
          <form ref={formRef} onSubmit={handleSubmit} method='post' className='relative w-full md:w-6/12 grow shadow-2xl flex flex-col m-4 mb-0 mt-8 px-5 border bg-white border-blue-300 rounded-md p-4 max-w-sm mx-auto space-y-1'>

          <button type='button' onClick={()=>setIsWindowShow(false)}
              className='absolute p-1 text-2xl bg-slate-400 hover:bg-red-600 hover:font-bold	top-2 right-2'>
          <AiOutlineClose />
          </button>

          <ImageInputResizeAndBack notsetImage='/asset/files/no-photo-logo.jpg' classes='w-36 break-words mb-6 shadow-lg rounded-lg bg-pink-500 h-32' name='image' cb={handleUploadImage} required={true} disabled={isDisabled} />

          <input type='text' className='font-bold' name='name' value={tmp_formData.heading} onChange={handleChangeInput} placeholder='name' required={true} disabled={isDisabled}/>

          <input type='text' className='text-xl' name='title' value={tmp_formData.title || ''} onChange={handleChangeInput} placeholder='title' required={true} disabled={isDisabled}/>

          <input type='mail' className='font-bold border-4 p-1' name='mail' value={tmp_formData.heading} onChange={handleChangeInput} placeholder='@mail' required={true} disabled={isDisabled}/>

          <input type='text' className='font-bold' name='phone' value={tmp_formData.heading} onChange={handleChangeInput} placeholder='phone number' required={true} disabled={isDisabled}/>

          <input type='text' className='font-bold' name='address' value={tmp_formData.heading} onChange={handleChangeInput} placeholder='address' disabled={isDisabled} />

          <textarea className='' type='text' name='article' value={tmp_formData.article} onChange={handleChangeInput} placeholder='article is' disabled={isDisabled} ></textarea>
          <Button type='submit'>send</Button>
        </form>
      </div>
      }
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

export default AddStuffCard
