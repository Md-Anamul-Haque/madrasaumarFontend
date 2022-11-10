import { Alert, AlertTitle, TextField } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import ImageInputResizeAndBack from './ImageInputResizeAndBack';


const EditStuffCard = ({stuffsData, setStuffsData, card_id, setIsEditable}) => {
    const formRef = useRef(null)
    const [tmp_formData,setTmp_formData]=useState({});
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


  useEffect(()=>{
    axios.get('/api/card/stuff/'+card_id)
    .then((res)=>{
        console.log(res)
        if (res.data.status) {
            console.log(res.data.message)
            setTmp_formData(res.data.data)
        }else {
            console.log(res.data.message)
            custom_alert.Error(res.data.message);
        }
    })
    .catch(err=>{
        custom_alert.Error(err.message);
            setTimeout(() => {
                alert(false)
                setIsEditable(false)
            }, 2000);
            console.log(err)
    })
},[])

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
        if (window.confirm('if you want to update this data click "ok"')) {
            const formData = new FormData();
            selectedFile && formData.append("image", selectedFile);
            Object.entries(tmp_formData).forEach((data)=>{
            formData.append(data[0],data[1]);
            });
            
            try {
            const response = await axios({
                method: "put",
                url: "/api/admin/card/stuff/"+card_id,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
            });
            console.log(response)
            if (response.data.status) {
                setStuffsData(stuffsData.map((stuff,i)=>{
                    if (stuff.card_id === card_id ) {
                        return(response.data.data);
                    }else{
                        return(stuff);
                    }
                }));
                // setStuffsData([...[response.data.data],...stuffsData])
                setIsDisabled(false)
                custom_alert.success(response.data.message)
                setIsEditable(false)
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
    <div className='block z-20'>
        <div className='z-10 fixed top-0 left-0 h-full min-w-96 w-full grid place-items-center overflow-auto px-6'>
              <button onClick={()=>setIsEditable(false)} className="absolute top-0 left-0 w-full h-full bg-[#0003]">add a new card</button>
          <form ref={formRef} onSubmit={handleSubmit} method='post' className='relative w-full  max-w-xl grow shadow-2xl flex flex-col m-4 mb-0 mt-8 px-5 border bg-white border-blue-300 rounded-md p-4 mx-auto space-y-2 overflow-auto'>

          <button type='button' onClick={()=>setIsEditable(false)}
              className='absolute p-1 text-2xl bg-slate-400 hover:bg-red-600 hover:font-bold	top-2 right-2'>
          <AiOutlineClose />
          </button>
                <div className='flex flex-col sm:flex-row items-center space-x-6'>
                    <ImageInputResizeAndBack notsetImage={'/asset/files/'+tmp_formData.image} classes='w-36 break-words mb-6 shadow-lg rounded-lg h-32' name='image' cb={handleUploadImage} required={true} disabled={isDisabled} />
                    <TextField variant="standard" name='name' value={tmp_formData.name} onChange={handleChangeInput} label='name' required={true} disabled={isDisabled}/>
                </div>

                <TextField variant="standard" className='text-xl' name='title' 
                    value={tmp_formData.title || ''} onChange={handleChangeInput} 
                    label='title...' required={true} disabled={isDisabled}/>

                <TextField type='mail' name='mail' value={tmp_formData.mail} 
                    onChange={handleChangeInput} label='@mail' required={true} 
                    disabled={isDisabled} size='small' InputLabelProps={{shrink: true,}} />

                <TextField variant="standard" name='phone' value={tmp_formData.phone}
                     onChange={handleChangeInput} label='phone number' required={true}
                      disabled={isDisabled}/>

                <TextField variant="standard" name='address' 
                    value={tmp_formData.address || ''} onChange={handleChangeInput} 
                    label='address...' required={true} disabled={isDisabled}/>

                <textarea name='article' value={tmp_formData.article} onChange={handleChangeInput} placeholder='article is' disabled={isDisabled} ></textarea>
          <Button type='submit'>send</Button>
        </form>
      </div>
      
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

export default EditStuffCard
