import axios from 'axios';
import { readAndCompressImage } from 'browser-image-resizer';
import { Button } from 'flowbite-react';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import ImageInputResizeAndBack from './ImageInputResizeAndBack';

const AddEdiitCarousel = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);

  useEffect(()=>{
    axios.get('/api/cards/carousel')
    .then((res)=>{
      console.log(res)
      return(<Navigate to="/login" replace />)

    })
    .catch((err)=>{
      return(<Navigate to="/login" replace />)

    })
  },[])
  const handleSubmitCarousel =(e) =>{
    e.preventDefault();
    const _img = {image:selectedFile};
    let formData = new FormData();
    formData.append(_img);
    axios.post("/api/admin/card/carousel")
    .then((res)=>{
      if (res.data.redirect) {
        <Navigate to="/login" replace />
      } else {
        
      }
    })
    .catch((err)=>{

    })
  }
  const handleCarouselImage = async(e)=>{
    const config = {
      quality: 0.7,
      width: 500,
      height:250
    };
      try {
        const file = e.target.files[0];
        let resizedImage = await readAndCompressImage(file, config);
        setSelectedFile(resizedImage)
      } catch (error) {
        console.error(error);
      }
  }
  return (
    <div>
    
      <div className='flex flex-wrap justify-center'>
        <div className='shadow-xl p-4 border-4 rounded-lg'>
          <ImageInputResizeAndBack classes='w-[500px] h-[250px] break-words mb-6 shadow-lg rounded-lg'/>
          <section className='flex justify-end space-x-10'>
            <Button color={'gray'}>edit</Button>
            <Button color={'success'}>delete</Button>
          </section>
        </div>

      </div>
      {/* <form onSubmit={handleSubmitCarousel} className='bg-white p-5 grid place-items-center my-6'>
          <div className='flex'>
            <input type={'file'} onChange={handleCarouselImage} id="file" required/>
            <Button type='submit' color="gray">
              + new slider image
            </Button>
          </div>
      </form> */}
      <a href="/new" class="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
        <svg class="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
        </svg>
        New project
      </a>
      {/* <ImageInputResizeAndBack />
      <ImageInputResizeAndBack />
      <ImageInputResizeAndBack /> */}
    </div>
  )
}

export default AddEdiitCarousel
