import { Alert } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FaFileDownload } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

import AddNoticeWindow from '../AdminComponents/addNoticeWindow';
import EditNotice from '../AdminComponents/Admin.edit.notice';
const AdminNotices = () => {
    const [notices,setNotices]=useState([]);
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(null);
    const [isEditorShow,setIsEditorShow]=useState(false);
    const [isEditorId,setIsEditorId]=useState(false);
    const navigate = useNavigate();
    useEffect(()=>{
        const checkLogin=()=>{
          axios.get('/api/login')
        .then((res)=>{
          if (!res.data.isLogin) {
            navigate('/login')
          }
        })
        .catch(err=>{
          setTimeout(() => {
            checkLogin();
          }, 1500);
        })
        };
        checkLogin()
      },[]);
    

    
    const handleNoticeEditor = (id) =>{
        setIsEditorShow(true);
        setIsEditorId(id)
    }

    const handleDeleteNotice=(notice_id)=>{
        if(window.confirm('Delete the item?')){
            axios.delete('/api/admin/notice/'+notice_id)
        .then((res)=>{
            if (res.data.status && res.data.data.deletedCount == 1) {
                console.log(res.data)
                let tmpTotice=[];
                notices.forEach((n)=>{
                    if (n.notice_id !== notice_id) {
                        tmpTotice.push(n);
                    }
                })
                setNotices(tmpTotice)
                
            }else{
                alert(res.data.message)
            }
        })
        .catch((err)=>{
            alert(err.message)
        })
        }
    }
    const Notice =({data})=>{
        const noticeBtnClass='flex justify-self-end text-2xl w-full h-full items-center p-1 bg-sky-200 hover:bg-blue-500 hover:rounded-sm hover:text-white focus:bg-slate-500 focus:text-white';
    
        return(<div className='shadow-xl grid grid-cols-[25px,25px,auto,30px] bg-sky-200 w-11/12 min-w-[400px] md:w-2/3 2xl:w-1/2 m-2 mx-5'>
                    <button className={noticeBtnClass} onClick={()=>handleNoticeEditor(data.notice_id)} ><AiFillEdit /></button>
                    <button className={`bg-red-500 text-2xl`} onClick={()=>handleDeleteNotice(data.notice_id)} ><AiFillDelete /></button>
                    <Alert severity="info" className='bg-red-500'>{data.title} — </Alert>
                    <a href={'/asset/files/'+data.file} download={true} className={noticeBtnClass}>
                        <FaFileDownload />
                    </a>
                </div>)
    }

    useEffect(()=>{
        axios.get('/api/admin/notices')
        .then((res)=>{
            console.log(res.data)
            setIsLoading(false)
            if(res.data.status){
                if(res.data.data.length > 0){console.log(res.data.data.length >0)

                    setNotices(res.data.data) 
                }else{
                    setIsError("notices is not found")
                }
            }else{
                setIsError(res.data.message);
            }
        })
        .catch((err)=>{
            console.log(err)
            setIsLoading(false)
            setIsError(err.message);
        })
    },[])

    return (
        <div>
            <div className="mx-auto container py-20 flex flex-col w-full items-center">
                    <div className='z-20 grid w-full md:w-2/3 2xl:w-1/2 justify-end'>
                        <AddNoticeWindow {...{notices,setNotices}}/>
                        {isEditorShow && <EditNotice {...{id:isEditorId,setIsEditorShow,notices,setNotices}}/>}
                    </div>
                    <hr className='border my-2 w-full' />
                    {isLoading && <h3 className='text-2xl'>loading...</h3>}
                    {!notices && <h3 className='text-2xl'>{isError}</h3>}
                    {notices && notices.map((ntc)=>{
                        return(<Notice key={v4()} data={ntc} />)
                    })}
                </div>
            </div>
    )
}

export default AdminNotices
