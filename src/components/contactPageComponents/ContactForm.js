import { TextField } from '@mui/material'
import React from 'react'

const ContactForm = () => {
  return (<div className="flex min-h-screen items-center justify-center bg-white">
  <div className="mx-auto w-full ">
      <p className="mt-3 text-center">Our Email is at help@domain.com (if you want to send email use this mail)</p>
      <br />
      <h1 className="text-4xl text-center font-medium">Contact us with this website </h1>
      <br />
      <h2 className='text-xl text-center'>complite this form below</h2>

      <form action="/contact" method="post" className="mt-10">
          <div className="grid justify-center gap-6">
              <div className="px-5 md:px-0 lg:px-10 grid w-full justify-center md:grid-cols-2 md:w-[650px]">
                    <span className='m-2 md:m-5'><TextField className='w-[250px]' id="name" label="fullName" variant="standard" /></span>
                    <span className='m-2 md:m-5'><TextField className='w-[250px]' id="mail" label="Mail" type={'mail'} variant="standard" /></span>
                    <span className='m-2 md:m-5'><TextField className='w-[250px]' id="phone" label="Phone number" variant="standard" /></span>
                    <span className='m-2 md:m-5'><TextField className='w-[250px]' id="phone" label="Phone number" variant="standard" /></span>
              </div>
              <div className="relative z-0 col-span-2">
                  <textarea name="message" rows="5" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" "></textarea>
                  <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-90 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Your
                      message</label>
              </div>
          </div>
          <button type="submit" className="mt-5 rounded-md bg-black px-10 py-2 text-white block mx-auto">Send
              Message</button>
      </form>
  </div>
</div>
  )
}

export default ContactForm
