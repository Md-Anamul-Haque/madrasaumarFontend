import { Alert, AlertTitle, TextField } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { AiFillEdit, AiOutlineMinusSquare } from 'react-icons/ai';
import ImageInputResizeAndBack from '../ImageInputResizeAndBack';
import { DatascontrolerContext } from './Datas.CreateContext';

const Editable_Orjon = ({cardType,image, card_id,name,article}) => {
    const {datas,setDatas} = useContext(DatascontrolerContext);

        const [isActiveArticle,setIsActiveArticle]=useState(false)
        // const [orjonFormInfo,setOrjonFormInfo]=useState({})
        const [isEditable,setIsEditable]=useState(false)
        const [isDataSendSuccessAlert,setIsDataSendSuccessAlert]=useState('');
        const [isDataSendErrorAlert,setIsDataSendErrorAlert]=useState('');
        const custom_alert={
          success:(message)=>{
              setIsDataSendSuccessAlert(message);
              setTimeout(() => {
                  setIsDataSendSuccessAlert('');
                  setIsEditable(false)
              }, 3000);
          },
          Error:(message)=>{
              setIsDataSendErrorAlert(message);
              setTimeout(() => {
                  setIsDataSendErrorAlert('');
              }, 2000);
          }
      }
        
        const EditableSection=({datas,setDatas,cardType,card_id, name,article,image})=>{
            const [tmp_formDatas,setTmp_formDatas]=useState({name,article,image})
            const [selectedImage,setselectedImage]=useState();
          
            const handleUpdateAndSubmit =(e)=>{
                e.preventDefault();
                const formData = new FormData();
                (selectedImage && formData.append("image", selectedImage))
                Object.entries(tmp_formDatas).forEach((ofi)=>{
                  formData.append(ofi[0],ofi[1]);
                });
                axios.put(`/api/admin/card/${cardType}/${card_id}`,
                              formData,
                              {headers: { "Content-Type": "multipart/form-data" }}
                            )
                            .then((res)=>{
                              if (res.data.status) {
                                let TmpThisDatas=datas[cardType]
                                TmpThisDatas=TmpThisDatas.map((d)=>d.card_id == card_id ? res.data.data : d);
                                setDatas({...datas,...{[cardType]:TmpThisDatas}});
                                // console.log(tmpMainDatas[cardType])
                                custom_alert.success(res.data.message)

                                console.log(res)
                              } else {
                                custom_alert.Error(res.data.message)
                              }
                            })
            };
            const handleNewOrjonImage =(Pic)=>{
                setselectedImage(Pic);
            };
            const handleOrjonInfo=(e)=>{
                setTmp_formDatas({...tmp_formDatas,...{[e.target.name]:e.target.value}})
            };
            return(
                 <section className=' w-[280px] flex flex-col justify-center shadow-2xl mx-4 rounded-sm  bg-white p-2 relative '>
                    <form onSubmit={handleUpdateAndSubmit} className='flex flex-col space-y-5 w-60 justify-center mt-11'>
                        <ImageInputResizeAndBack notsetImage={`/asset/files/${tmp_formDatas.image || ''}`} className="w-full h-28 rounded-lg" cb={handleNewOrjonImage} />
                        <TextField name='name' value={tmp_formDatas.name || ''} label={"Orjon name"} onChange={handleOrjonInfo} variant="standard" size='small' 
                            required/>
                        <textarea name='article' value={tmp_formDatas.article || ''} className='h-28 ' placeholder="article or Orjon" onChange={handleOrjonInfo}
                            required />
                        <label className='flex space-x-2'>
                            <Button color={'gray'} onClick={()=>setIsEditable(false)}>cancle</Button>
                            <Button type='submit'>save change</Button>
                        </label>
                    </form>
                </section>)
        }
        const ViewSection =({name,article,image})=>{
            return(<div className=" w-[280px] flex flex-col justify-center shadow-2xl mx-4 rounded-sm">
            <div className='relative bg-white dark:bg-gray-500'>
                <img className=' drop-shadow-2xl w-full max-h-[200px] my-5' 
                    src={`/asset/files/${image}`} alt="" />
                <h1 className=' text-center text-4xl px-2'>{name}</h1>
                <h3 className=' text-center text-lg mb-5 p-2'>{article.slice(0, 50)+'...'}
                    <span onClick={()=>setIsActiveArticle(!isActiveArticle)} className='text-blue-500 text-sm cursor-pointer hover:font-semibold'>more</span>
                </h3>
                <div className={` absolute w-full max-h-full overflow-auto bottom-0 border-4 bg-white shadow-sm rounded-lg duration-200 ${!isActiveArticle ? 'scale-0 translate-y-full': 'scale-100 translate-y-0'}`}>
                    <p className='relative pt-2 p-5'>
                        <button onClick={()=>setIsActiveArticle(!isActiveArticle)} 
                         className=' absolute top-0 right-0 z-30' >
                            <AiOutlineMinusSquare className='hover:scale-105 text-xl text-red-400
                             hover:text-red-500 ' />
                        </button>
                        {article}
                    </p>
                </div>
            </div>
            <div className='bg-white z-10 border-t-2 p-3 flex justify-center space-x-5'>
                <Button className='w-28' color="gray" onClick={()=>setIsEditable(true)}>
                    <AiFillEdit />
                </Button>
                {/* <button className=' duration-200 bg-white hover:bg-red-500 text-red-500 hover:text-white p-3 rounded-lg shadow-md hover:shadow-xl' ><AiFillDelete className='text-xl' /></button> */}
            </div>
        </div>)
        }
        return (<div className='my-10'>
                    {!isEditable && <ViewSection {...{name,article,image}} />}
                    {isEditable && <EditableSection {...{datas,setDatas,cardType,card_id, name,article,image}}  />}
                    
                    {(isDataSendErrorAlert || isDataSendSuccessAlert) && <div className='fixed flex flex-col bottom-24 left-1/2 -translate-x-1/2' >
                        {isDataSendErrorAlert && <Alert severity="error">
                                            <AlertTitle>Error</AlertTitle>
                                                {isDataSendErrorAlert} <strong>check it out!</strong>
                                            </Alert>}
                        {isDataSendSuccessAlert && <Alert severity="success">{isDataSendSuccessAlert} — check it out!</Alert>}
                        </div>}
                </div>);
    }

export default Editable_Orjon
