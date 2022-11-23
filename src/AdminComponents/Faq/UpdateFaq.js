import { TextField } from '@mui/material';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';




const UpdateFaq = ({faqs,setFaqs, setIsActiveUpdate, faq_id}) => {

    const [formCommError,setFormCommError]=useState(null);
    const [isLoading,setIsLoading]=useState(true);

    const formik = useFormik({
    initialValues: {
        question: '',
        answer: '',
      },
      validationSchema: Yup.object({
        question: Yup.string()
          .min(3)
          .max(120, 'Must be 120 characters or less')
          .required('Required'),
          answer: Yup.string()
          .max(1000, "Must be 1000 characters or less")
          .required(),
      }),
      onSubmit: (values, {resetForm}) => {
       axios.put(`/api/admin/txt/faq/${faq_id}`,values)
        .then((res)=>{
            if (res.data.status) {
                resetForm({values:''})
                setFaqs(faqs.map((faq)=>faq.txt_id === faq_id ? res.data.data : faq))
                setIsActiveUpdate(false)
            } else {
                setFormCommError(res.data.message)
            }
        })
        .catch((err)=>{
            setFormCommError(err.message)
        })
      },
    })
    

    useEffect(()=>{
        axios.get(`/api/txt/faq/${faq_id}`)
        .then((res)=>{
            if (res.data.status) {
                formik.values.question = res.data.data.question
                formik.values.answer = res.data.data.answer
            } else {
                setFormCommError(res.data.message)
            }
        })
        .catch(err=>{
            setFormCommError(err.message)
        })
        .finally(f=>{
            setIsLoading(false)
        })
    },[])
  return (
    <div className='w-full h-full fixed top-0 left-0 bg-[#0003] grid place-items-center z-50'>
        <div className='z-50 rounded-xl p-5 ring-2 bg-white relative pt-10'>
            <button onClick={()=>setIsActiveUpdate(false)} className='absolute inline  bg-red-500 p-1 hover:text-white rounded-lg top-0 right-0'>close</button>
            {isLoading && <h2>isLoading...</h2>}
            {!isLoading && <form onSubmit={formik.handleSubmit} className="flex flex-col justify-center p-2 rounded-md w-80">
                <TextField label='Question' name='question' className=''
                    onChange={formik.handleChange} value={formik.values.question}
                    required />
                {formik.touched.question && formik.errors.question && 
                    <span className='text-red-500 mt-1 text-sm font-light font-serif'>
                        {formik.errors.question}
                    </span>}

                <textarea label='Answer' name='answer' className=''
                    onChange={formik.handleChange} value={formik.values.answer}
                    required>
                    </textarea>
                    
                    {formik.touched.answer && formik.errors.answer && 
                    <span className='text-red-500 mt-1 text-sm font-light font-serif'>
                        {formik.errors.answer}
                    </span>}
                    
                    {formCommError &&
                        <div className='text-center font-mono block text-white'>
                            <p className='bg-red-600 underline inline p-1 m-2 mt-4 rounded-lg font-bold'>
                                {formCommError}!
                            </p>
                        </div>}
                <div className='flex justify-center'>
                    <Button onClick={()=>setIsActiveUpdate(false)} color={'gray'}>cancle</Button>
                    <Button color={'success'} type='submit'>save change</Button>
                </div>
            </form>}
        </div>
    </div>
  )

  
}

export default UpdateFaq
