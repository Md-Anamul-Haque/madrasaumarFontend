import axios from 'axios';
import { readAndCompressImage } from 'browser-image-resizer';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import ImageInputResizeAndBack from './ImageInputResizeAndBack';

const SingleCatousel = ({slidId,img})=> {
  const [isEditable,setIsEditable]=useState(false)
  const [selectedPic,setselectedPic]=useState(false)
  const [warningSelectImage,setwarningSelectImage]=useState(null)
  const handleChangeSubmitImage = async()=>{
    if (selectedPic) {
      try {
        alert('change success')
        setwarningSelectImage(null)
        let formData = new FormData();
        formData.append("image", selectedPic);
             const res= await axios({
                method: "put",
                url: '/api/admin/card/carousel/'+slidId,
                data: formData,
                headers: { "Content-Type": "multipart/form-data" },
              });
              if(res.data.status){
                window.location.reload();
              }else{
                alert(res.data.message)
              }
      } catch (error) {
        
      }
    }else{
      setwarningSelectImage('select your new slid pic')
    }
  }
  const handleChangeImage=(pic)=>{
    setselectedPic(pic)
    setwarningSelectImage(null)
  }
  return(<div className='shadow-xl p-4 border-4 rounded-lg'>
      <span className={!isEditable? 'hidden' : 'block'}>
        <ImageInputResizeAndBack notsetImage={`/asset/files/${img}`} classes=' opacity-70 w-[220px] h-[80px] break-words mb-6 shadow-lg rounded-lg' required={true} cb={handleChangeImage}/>
        {warningSelectImage && <p className='mb-5 text-red-600'>{warningSelectImage}</p>}
      </span>
      <img src={`/asset/files/${img}`} className={`w-[220px] h-[80px] break-words mb-6 shadow-lg rounded-lg ${isEditable? 'hidden' : 'block'}`}/>
      <section className='flex justify-end space-x-10'>
        <Button color={'gray'} onClick={()=>setIsEditable(!isEditable)}>{isEditable? 'cancle' : 'edit'}</Button>
        {!isEditable && <Button color={'red'} className='bg-red-500' onClick={()=>alert('delete')}>delete</Button>}
        {isEditable && <Button type='submit' color={'success'} onClick={handleChangeSubmitImage}>save</Button>}
      </section>
</div>)
}
const AddEdiitCarousel = async() => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  useEffect(()=>{
    axios.get('/api/cards/carousel')
    .then((res)=>{
      console.log(res)
      // return(<Navigate to="/login" replace />)

    })
    .catch((err)=>{
      // return(<Navigate to="/login" replace />)

    })
  },[]);


  return (
    <div>
    
      <div className='flex flex-wrap justify-center'>
        <SingleCatousel />
        <SingleCatousel />
        <SingleCatousel />
        <SingleCatousel />
        <SingleCatousel />
        

      </div>

      {/* <a href="/new" class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
        <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a> */}
      {/* <ImageInputResizeAndBack />
      <ImageInputResizeAndBack />
      <ImageInputResizeAndBack /> */}
    </div>
  )
}

export default AddEdiitCarousel
