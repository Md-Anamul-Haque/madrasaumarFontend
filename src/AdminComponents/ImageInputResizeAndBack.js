import { readAndCompressImage } from 'browser-image-resizer';
import React, { useState } from 'react';
import { GiPencil } from "react-icons/gi";

const ImageInputResizeAndBack = (props) => {
    const required = props.required || false;
    const {cb}= props;
    const classes= props.classes || props.className;
    const notsetImage = props.notsetImage || '';
    const type = props.type || 'file';
    const [baseImage, setBaseImage] = useState("");

    // const uploadImage = async (e) => {
    //   const file = e.target.files[0]; //document.get... dom with file
    //   const base64 = await convertBase64(file);
    //   cb(base64);
    //   setBaseImage(base64);
    // };
  
    const convertBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
  
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
  
        fileReader.onerror = (error) => {
          reject(error);
        };
      });
    };

const config = {
  quality: 0.7,
  width: 300,
  height:300
};

// Note: A single file comes from event.target.files on <input>
const uploadImage= async (e)=>{
  try {
    const file = e.target.files[0];

    let resizedImage = await readAndCompressImage(file, config);
    const base64 = await convertBase64(resizedImage);
    // console.log(base64)
    setBaseImage(base64)
   cb(resizedImage);
  } catch (error) {
    console.error(error);
  }
}
    return (
      <div className='flex'>
        <label className={classes+' relative shadow-lg ring-4 items-center'}> 
          <input
          type={type}
          accept="image/*"
          name='image'
          onChange={uploadImage}
          className='hidden'
          required={required}
        />
        {(baseImage || notsetImage) && <img src={baseImage ? baseImage : notsetImage} className={classes} alt={"previewImage"} />}

        <span className={classes+' absolute top-0 grid place-items-center left-0 text-2xl text-white bg-[#0003] opacity-0 hover:opacity-100 duration-200'}>
        <GiPencil size={'1.6em'}/>
        </span>
        </label>
      </div>
    );
  }


export default ImageInputResizeAndBack
