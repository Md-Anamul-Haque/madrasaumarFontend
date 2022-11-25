import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Faq from '../components/faq';

const Admin_faqs = () => {
    const [faqs,setFaqs]=useState();
    const [isLoading,setIsLoading]=useState(true);
    const [isError,setIsError]=useState(null);
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
    
  return (
    <div className='my-20'>
    <div>
        {isError && <h2 className='text-center text-2xl font-bold'>{isError}</h2>}
        {isLoading && <h2 className='text-center text-2xl font-bold'>Loading...</h2>}
    </div>
    <div className='grid justify-center space-y-5'>
        {faqs && faqs.map((faq)=>{
            return(
                <section className="w-[330px] sm:w-11/12 md:w-[500px] rounded-md shadow-md border-2 bg-white dark:bg-gray-800 ">
                     <Faq 
                        {...{question:faq.question, answer:faq.answer}}
                     />
                </section>
            )
        })}
    </div>
    </div>
  )
}

export default Admin_faqs
