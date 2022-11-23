import axios from "axios"
import { Button } from "flowbite-react"
import { useState } from "react"
import ImageInputResizeAndBack from "../ImageInputResizeAndBack"
const HandleSingleBivag = ({slidId,img})=> {
    const [isEditable,setIsEditable]=useState(false)
    const [selectedPic,setselectedPic]=useState(false)
    const [warningBivagImage,setwarningBivagImage]=useState(null)
    
    const handleBivagVhangeSubmitImage = async()=>{
      if (selectedPic) {
        try {
          setwarningBivagImage(null)
          let formData = new FormData();
          formData.append("image", selectedPic);
               const res= await axios({
                  method: "put",
                  url: `/api/admin/card/বিভাগ/${slidId}`,
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
        setwarningBivagImage('select your new slid pic')
      }
    }
    const handleDeleteImage = async()=>{
        if(window.confirm('are you confirm delete this slid image')){
                try {
                  setwarningBivagImage(null)
                  let formData = new FormData();
                  formData.append("image", selectedPic);
                       const res= await axios({
                          method: "delete",
                          url: `/api/admin/card/বিভাগ/${slidId}`,
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
                  console.log(error.message)
                }
        }
      }
    const handleChangeImage=(pic)=>{
      setselectedPic(pic)
      setwarningBivagImage(null)
    }
    return(<div className='shadow-xl p-4 border-4 rounded-lg'>
        <span className={!isEditable? 'hidden' : 'block'}>
          <ImageInputResizeAndBack notsetImage={`/asset/files/${img}`} classes=' opacity-70 w-[220px] h-[80px] break-words mb-6 shadow-lg rounded-lg' required={true} cb={handleChangeImage}/>
          {warningBivagImage && <p className='mb-5 text-red-600'>{warningBivagImage}</p>}
        </span>
        <img src={`/asset/files/${img}`} className={`w-[100px] h-[100px] break-words mb-6 shadow-lg rounded-lg ${isEditable? 'hidden' : 'block'}`}  />
        <section className='flex justify-end space-x-10'>
          <Button color={'gray'} onClick={()=>setIsEditable(!isEditable)}>{isEditable? 'cancle' : 'edit'}</Button>
          {!isEditable && <Button color={'red'} className='bg-red-500' onClick={handleDeleteImage}>
            delete
            </Button>}
          {isEditable && <Button type='submit' color={'success'} onClick={handleBivagVhangeSubmitImage}>save</Button>}
        </section>
  </div>)
  }

  export default HandleSingleBivag;
  