import { TextField } from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
const ContactForm = () => {
  const [formCommError,setFormCommError]=useState(null);
  const [isFormSubmitedInOHour,setIsFormSubmitedInOHour] = useState();
  const [isStopContactForm,setIsStopContactForm] = useState(false);
  const [contactSubmitting,setContactSubmitting]=useState(false);

  const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(3)
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      phone: Yup.string()
        .matches(phoneRegExp, 'Phone number is not valid'),
      address : Yup.string(),
      message: Yup.string()
        .min(10)
        .max(1000, "Must be 1000 characters or less")
        .required(),
    }),
    onSubmit: (values, {resetForm}) => {
      // alert(JSON.stringify(values, null, 2));
      setContactSubmitting(true)
      axios.post('/api/contact',values)
        .then(res=>{
          setContactSubmitting(false)
          if (res.data.status) {
            resetForm({values:''})
            setIsFormSubmitedInOHour(Date.now());
            localStorage.setItem('alreadySendContactFormTime',Date.now())
          } else {
            setFormCommError(res.data.message)
          }
        })
        .catch(err=>{
          setContactSubmitting(false)
          setFormCommError(err.message)
        })
    },
  })
  useEffect(()=>{
    setIsFormSubmitedInOHour( localStorage.getItem('alreadySendContactFormTime') || 0)
  },[])

  // (isFormSubmitedInOHour && )
useEffect(()=>{
  (parseInt(isFormSubmitedInOHour) + 1000 * 60 * 60 > Date.now()) &&  setIsStopContactForm(true);
},[isFormSubmitedInOHour])


const AfterSubmitShowThisWindow =()=>{
  return(
  <div className='mt-10 absolute grid place-items-center text-center  z-50'>  
     <section className='w-72 h-72 grid place-items-center font-bold ring-4 bg-orange-200 rounded-full shadow-2xl shadow-green-500'>
       <h2 style={{textShadow:'2px 2px 5px white'}} className='text-2xl text-purple-600 m-2'>
        Your message is submitted.
         Please wait for reply.
         <br />
         ...</h2>
     </section>
  </div>
  )}



  return (<div className="flex min-h-screen items-center justify-center bg-white">
  <div className="mx-auto w-full ">
      <p className="mt-3 text-center">Our Email is at help@domain.com (if you want to send email use this mail)</p>
      <br />
      <h1 className="text-4xl text-center font-medium">Contact us with this website </h1>
      <br />
      <h2 className='text-xl text-center'>complite this form below</h2>

      <form onSubmit={formik.handleSubmit} className=" relative grid place-items-center mt-10">
        {isStopContactForm && <AfterSubmitShowThisWindow />}
          <div className="grid justify-center gap-6">
              <div className="px-5 md:px-0 lg:px-10 grid w-full justify-center md:grid-cols-2 md:w-[650px]">
                    <span className='m-2 md:m-5'>
                      <TextField 
                          className='w-[250px]' 
                          name='name' 
                          id='name' 
                          inputProps={{ minLength:3 , maxLength: 50 }}
                          value={formik.values.name} 
                          onChange={formik.handleChange}
                          label="fullName" 
                          variant="standard" 
                          disabled={isStopContactForm}
                          required
                          />
                       {formik.touched.name && formik.errors.name && <span className='text-red-500 mt-1 text-sm font-light font-serif'>{formik.errors.name}</span>}
                    </span>
                    <span className='m-2 md:m-5'>
                      <TextField 
                          className='w-[250px]' 
                          name='email' 
                          id='email' 
                          value={formik.values.email} 
                          onChange={formik.handleChange}
                          label="email" 
                          type={'mail'} 
                          variant="standard" 
                          disabled={isStopContactForm}
                          required
                          />
                      {formik.touched.email && formik.errors.email && <span className='text-red-500 mt-1 text-sm font-light font-serif'>{formik.errors.email}</span>}
                    </span>
                    <span className='m-2 md:m-5'>
                      <TextField 
                          className='w-[250px]' 
                          name='phone' 
                          id='phone' 
                          value={formik.values.phone} 
                          onChange={formik.handleChange}
                          label="Phone number" 
                          disabled={isStopContactForm}
                          variant="standard" 
                          />
                      {formik.touched.phone && formik.errors.phone && <span className='text-red-500 mt-1 text-sm font-light font-serif'>{formik.errors.phone}</span>}
                    </span>
                    <span className='m-2 md:m-5'>
                      <TextField 
                          className='w-[250px]'
                          name='address' 
                          id='address' 
                          value={formik.values.address} 
                          onChange={formik.handleChange}
                          label="Address" 
                          disabled={isStopContactForm}
                          variant="standard" 
                          />
                      {formik.touched.address && formik.errors.address && <span className='text-red-500 text-sm mt-1 font-light font-serif'>{formik.errors.address}</span>}
                    </span>
              </div>
              <div className="relative z-0 col-span-2">
                  <textarea 
                      name="message" 
                      id="message" 
                      rows="5"
                      maxLength={500}
                      className="peer block w-full appearance-none border-0 border-b border-gray-500 
                                  bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 
                                  focus:outline-none focus:ring-0"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      minLength={10}
                      disabled={isStopContactForm}
                      required
                      >
                  </textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your
                      message</label>
              </div>
              {formik.touched.message && formik.errors.message && 
                <span className='text-red-500 font-bold underline font-serif'>{formik.errors.message}</span>}
          </div>
          {formCommError &&<div className='text-center font-mono block text-white'><p className='bg-red-600 underline inline p-1 m-2 mt-4 rounded-lg font-bold'>{formCommError}!</p></div>}
          <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-sm text-white block mx-auto" 
            disabled={isStopContactForm}>
              {contactSubmitting ? '...' : 'Send Message'}
          </button>
      </form>

  </div>
</div>
  )
}

export default ContactForm
