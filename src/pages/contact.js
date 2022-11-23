import React, { useEffect } from 'react'
import ContactForm from '../components/contactPageComponents/ContactForm'
import WhatsAppInfo from '../components/contactPageComponents/WhatsAppInfo'

const Contact = () => {
  useEffect(()=>{
    document.title="contact";
  },[])
  return (<>
  <WhatsAppInfo />
  <ContactForm />
</>)
}

export default Contact
