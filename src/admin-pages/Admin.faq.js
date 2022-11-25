import axios from 'axios';
import { Button } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import CreateFaq from '../AdminComponents/Faq/CreateFaq';
import UpdateFaq from '../AdminComponents/Faq/UpdateFaq';
import ViewAdminModeFaq from '../AdminComponents/Faq/ViewAdminModeFaq';

const Admin_faqs = () => {
    const [faqs,setFaqs]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(null);

    const [isActiveCreater,setIsActiveCreater]=useState(null);
    const [isActiveUpdate,setIsActiveUpdate] = useState(false);
    const [faq_id,setFaq_id] =useState(null);

    useEffect(()=>{
        axios.get('/api/txts/faq')
        .then((res)=>{
            setIsLoading(false)
            if (res.data.status) {
                setFaqs(res.data.data)
                setIsError(null)
            } else {
                setIsError(res.data.message)
            }
        })
        .catch((err)=>{
            setIsLoading(false)
            setIsError(err.message)
        })
    },[]);
    
    const handleCallUpdateWindow=(faq_id)=>{
        setFaq_id(faq_id);
        setIsActiveUpdate(true)
    }

    const handleDeleteFaq =(txt_id) =>{
        if (window.confirm("if you want to delete this faq click 'ok' or 'cancle'")) {
          axios.delete(`/api/admin/txt/faq/${txt_id}`)
          .then((res)=>{
            if (res.data.status) {
                setFaqs(faqs.map(faq=>faq.txt_id !== txt_id && faq))
            } else {
                alert(res.data.message)
            }
          })
          .catch(err=>{
            alert(err.message)
          })
        }
      }
  return (
    <div>
        {/* stape1:create faq form */}
      <div className='grid justify-end pr-7'>
        <Button onClick={()=>setIsActiveCreater(true)}>+ Add new FAQ</Button>
        {isActiveCreater && <CreateFaq {...{setIsActiveCreater,faqs,setFaqs }} />}
      </div>

    {/* stap2:update faq stape */}
        {isActiveUpdate && <UpdateFaq {...{faqs,setFaqs, setIsActiveUpdate, faq_id}} />}
    {/* stap3:view faq stape */}
    <div>
        {isError && <h2 className='text-center text-2xl font-bold'>{isError}</h2>}
        {isLoading && <h2 className='text-center text-2xl font-bold'>Loading...</h2>}
    </div>
    <div className='grid justify-center space-y-5'>
        {faqs && faqs.map((faq)=>{
            return(
                <section className="w-[330px] sm:w-11/12 md:w-[500px] rounded-md shadow-md border-2 bg-white dark:bg-gray-800 ">
                     <ViewAdminModeFaq 
                        {...{question:faq.question, answer:faq.answer, handleCallUpdateWindow,handleDeleteFaq, faq_id:faq.txt_id}}
                     />
                </section>
            )
        })}
    </div>
    </div>
  )
}

export default Admin_faqs
