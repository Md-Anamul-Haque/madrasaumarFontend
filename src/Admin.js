import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import About from './admin-pages/Admin.about'
import Admin_AmaderOrjon from './admin-pages/Admin.AmaderOrjon'
import Adminbooks from './admin-pages/Admin.books'
import Admin_contact from './admin-pages/Admin.contact'
import Admin_faqs from './admin-pages/Admin.faq'
import NoPage from './admin-pages/Admin.noPage'
import AdminNotices from './admin-pages/Admin.notices'
import Dashboard from './admin-pages/Dashboard'
import Logout from './admin-pages/Logout'
import Nav from './AdminComponents/navigation/nav'
const Admin = () => {
  const [isLogin,setIsLogin]=useState(false);
  const [isError,setIsError]=useState(null);
  const [isLoading,setIsLoading]=useState(true);
  const navigate = useNavigate();

  useEffect(()=>{
    axios.get('/api/login')
    .then((res)=>{
      console.log(res)
      setIsLogin(res.data.isLogin)
      setIsLoading(false)
      setIsError(null);
      if (!res.data.isLogin) {
        navigate('/login')
      }
    })
    .catch(err=>{
      setIsLogin(false)
      setIsError(err.message+'try again letter');
      setIsLoading(false)
    })
  });
  return (
    <div className='bg-gray-100'>
        {isLoading && <h2 className='text-4xl text-center font-bold'>Loading...</h2>}
        {isError && <h2 className='text-4xl text-center font-bold'>{isError}</h2>}
      
      {isLogin &&
        <>
          <Nav />
        <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/notice" element={<AdminNotices />} />
                <Route path="/about" element={<About />} />
                <Route path="/book" element={<Adminbooks />} />
                <Route path='/contact' element={<Admin_contact />} />
                <Route path='/faqs' element={<Admin_faqs />} />


                <Route path='/logout' element={<Logout />} />
                <Route path='/orjon' element={<Admin_AmaderOrjon />} />
                {/* <Route path="contact" element={<Contact />} />
                <Route path="Islamic-story" element={<Islamic_story />} />
                <Route path="faqs" element={<FAQs />} />
                <Route path="contact" element={<Contact />} />
                <Route path="notice" element={<Notices />} />*/}
                <Route path="*" element={<NoPage />} /> 
            </Routes>
        </>
        }
    </div>
  )
}

export default Admin
