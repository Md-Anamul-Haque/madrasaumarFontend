import { Alert, AlertTitle } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ImageInputResizeAndBack from './ImageInputResizeAndBack';
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
    const [isEditable,setIsEditable]= useState(false)
    const [isDataSendSuccessAlert,setIsDataSendSuccessAlert]=useState('');
    const [isDataSendErrorAlert,setIsDataSendErrorAlert]=useState('');
    const [selectedFile, setSelectedFile] = React.useState(null);
    const [tmp_logoDardData, setTmp_logoDardData] = useState(cardData || {})

    useEffect(()=>{
      axios.get('/api/cards/logoCard')
      .then((res)=>{
        console.log(res.data)
        if (res.data.status) {
            setLogo('/asset/files/'+res.data.data[0].image)
            setCardData(res.data.data[0])
            setTmp_logoDardData({
                image : res.data.data[0].image,
                name : res.data.data[0].name,
                article : res.data.data[0].article
              })
            // console.log(res.data)
            setIaLoading(false)
            setIsError(false)
        } else {
          setIaLoading(false)
          setIsError(res.data.message)
        }

      })
      .catch((err)=>{
        console.log(err)
        setIsError(err.message)
        setIaLoading(false)
      })
    },[])

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
        setTmp_logoDardData({...tmp_logoDardData, ...{[key]:value}})
        console.log(tmp_logoDardData)        
    }
    const handleUploadFile =async(image)=>{
      setSelectedFile(image)
      console.log(image)
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          setIsEditable(false)
        const formData = new FormData();
        selectedFile && formData.append("image", selectedFile);
        Object.entries(tmp_logoDardData).forEach((data)=>{
          formData.append(data[0],data[1]);
        });
        // this is backend style
        // if (Card) {
        //     res.status(201).send({
        //         message:'Card update success',
        //         status:true,
        //         data:Card
        //     })
        // }else{
        //     res.status(200).send({
        //         message:'Card is not update!',
        //         status:false,
        //     })
        // }
        setIaLoading(true);
          const response = await axios({
            method: "put",
            url: "/api/admin/card/logoCard/"+cardData.card_id,
            data: formData,
            headers: { "Content-Type": "multipart/form-data" },
          });
          console.log(response)
          if (response.data.status) {
            setLogo('/asset/files/'+response.data.data.image);
            setCardData(response.data.data);
            setTmp_logoDardData({
                image : response.data.data.image,
                name : response.data.data.name,
                article : response.data.data.article
              });
            setIaLoading(false);
            setIsError(false);
            setIsEditable(false);
            custom_alert.success(response.data.message);
          }else{
            setIaLoading(false);
            setIsError(false);
            setIsEditable(false);
            setIsEditable(true);
            custom_alert.Error(response.data.message);
        }
        } catch(error) {
            setIsEditable(true);
            custom_alert.Error('error');
          console.log(error)
        }
    }

  return (
    <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78 shrink">
        {isLoading && <LogoCardLoadingEffect />}
        {isError && <h2 className='text-xl'>{isError}</h2>}

         {!isLoading && tmp_logoDardData && cardData
            && <div className="relative grow flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-pink-500">
            <img alt="..." src={logo || ''} className={`${!isEditable ? 'block' : 'hidden'} w-full align-middle rounded-t-lg`} />
            <span className={isEditable ? 'block' : 'hidden'}>
              <ImageInputResizeAndBack classes='w-full break-words mb-1 shadow-lg h-full' cb={handleUploadFile} notsetImage={logo || ''}/></span>

            <blockquote className={`${!isEditable ? 'block' : 'hidden'} relative p-8 mb-4`}>
              <h4 className="text-xl font-bold text-white">
                {cardData.name}
              </h4>
              <p className="text-md font-light mt-2 text-white">{cardData.article}</p>
            </blockquote>
            <blockquote className={`${isEditable ? 'block' : 'hidden'} relative p-8 mb-4`}>
              <input onChange={handleChangeInput} name='name' value={tmp_logoDardData.name} className="text-xl w-full border-none font-bold text-white bg-transparent" />

              <textarea onChange={handleChangeInput} className="text-md font-light mt-2 text-black bg-pink-300 w-full border-none h-32" value={tmp_logoDardData.article}></textarea>
            </blockquote>
            
            <section className='flex justify-end space-x-10 pb-3 pr-10'>
              <Button color="light" onClick={()=>setIsEditable(!isEditable)}>{isEditable ? "cancel" : 'edit'}</Button>
              <Button color="success" className={isEditable ? 'block' : 'hidden'} onClick={handleSubmit}>save</Button>
            </section>
            
          </div>}
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

export default LogoCard
