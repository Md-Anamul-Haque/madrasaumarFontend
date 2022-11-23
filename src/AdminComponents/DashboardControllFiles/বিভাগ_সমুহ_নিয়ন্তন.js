import axios from 'axios';
import { readAndCompressImage } from 'browser-image-resizer';
import { Button } from 'flowbite-react';
import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import HandleSingleBivag from './handleSingleBivag';

const বিভাগ_সমুহ_নিয়ন্তন = () => {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(null);
  const [datas, setDatas] = React.useState([]);



  useEffect(()=>{
    axios.get('/api/cards/বিভাগ')
    .then((res)=>{
      console.log(res)
      if(res.data.status){
        setIsError(null)
        setDatas(res.data.data)
      setIsLoading(false)
      }else{
        setIsError(res.data.message)
        setDatas([])
      setIsLoading(false)
      }
    })
    .catch((err)=>{
      setIsError(err.message)
      setIsLoading(false)
      setDatas([])
    })
  },[]);


  const handleSubmitVibag = async(e) =>{
    e.preventDefault();
    // const _img = {image:selectedFile};
    const formData = new FormData();
    formData.append("image", selectedFile);

    const response = await axios({
      method: "post",
      url:'/api/admin/card/বিভাগ',
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    });
    console.log(response)
    if (response.data.status) {
      window.location.reload();

  }
}
  
  const handleVibagImage = async(e)=>{
    const config = {
      quality: 0.8,
      width: 500,
      height:200
    };
      try {
        const file = e.target.files[0];
        let resizedImage = await readAndCompressImage(file, config);
        setSelectedFile(resizedImage)
        console.log(resizedImage)
      } catch (error) {
        console.error(error);
      }
  }
  return (<>
            {isLoading && <h2 className='text-4xl text-center font-bold'>Loading...</h2>}
            {isError && <h2 className='text-4xl text-center font-bold'>{isError}</h2>}
            <div className='flex flex-wrap justify-center'>
              {datas && <div className='flex overflow-auto'>
                            {datas.map((data)=>{
                                return(<HandleSingleBivag key={uuid()} {...{slidId:data.card_id,img:data.image}} />)
                              })}
                        </div>}
            </div>
            <form onSubmit={handleSubmitVibag} className='bg-white p-5 grid place-items-center my-6'>
                <div className='flex'>
                  <input type={'file'} onChange={handleVibagImage} id="file" required/>
                  <Button type='submit' color="gray">
                    + new slider image
                  </Button>
                </div>
            </form>
      </>
  )
}

export default বিভাগ_সমুহ_নিয়ন্তন
