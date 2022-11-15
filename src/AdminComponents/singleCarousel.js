import axios from "axios"
import { Button } from "flowbite-react"
import { useState } from "react"
import ImageInputResizeAndBack from "./ImageInputResizeAndBack"

const SingleCarousel = ({slidId,img})=> {
    const [isEditable,setIsEditable]=useState(false)
    const [selectedPic,setselectedPic]=useState(false)
    const [warningSelectImage,setwarningSelectImage]=useState(null)
    
    const handleChangeSubmitImage = async()=>{
      if (selectedPic) {
        try {
          setwarningSelectImage(null)
          let formData = new FormData();
          formData.append("image", selectedPic);
               const res= await axios({
                  method: "put",
                  url: `/api/admin/card/carousel/${slidId}`,
                  data: formData,
                  headers: { "Content-Type": "multipart/form-data" },
                });
                if(res.data.status){
                    setIsEditable(false)
                  window.location.reload();

                }else{
                    console.log(res)
                  alert(res.data.message)
                }
        } catch (error) {
          
        }
      }else{
        setwarningSelectImage('select your new slid pic')
      }
    }
    const handleDeleteImage = async()=>{
        if(window.confirm('are you confirm delete this slid image')){
                try {
                  setwarningSelectImage(null)
                  let formData = new FormData();
                  formData.append("image", selectedPic);
                       axios.delete(`/api/admin/card/carousel/${slidId}`)
                       .then((res)=>{
                            if(res.data.status){
                              setIsEditable(false)
                            window.location.reload();
          
                          }else{
                              console.log(res)
                            alert(res.data.message)
                          }
                       })
                       .catch(err=>{
                        console.log(err.message)
                       })
                } catch (error) {
                  console.log(error.message)
                }
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
          {!isEditable && <Button color={'red'} className='bg-red-500' onClick={handleDeleteImage}>
            delete
            </Button>}
          {isEditable && <Button type='submit' color={'success'} onClick={handleChangeSubmitImage}>save</Button>}
        </section>
  </div>)
  }

  export default SingleCarousel;