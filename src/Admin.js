import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './admin-pages/Admin.about'
import Adminbooks from './admin-pages/Admin.books'
import AdminNotices from './admin-pages/Admin.notices'
import Dashboard from './admin-pages/Dashboard'
import AddEdiitCarousel from './AdminComponents/addEditCarousel'
import Nav from './AdminComponents/navigation/nav'

const Admin = () => {
  return (
    <div>
      <Nav />
       <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/notice" element={<AdminNotices />} />
              <Route path="/about" element={<About />} />
              <Route path="/book" element={<Adminbooks />} />



              <Route path="/carousel" element={<AddEdiitCarousel />} />

              {/* <Route path="contact" element={<Contact />} />
              <Route path="Islamic-story" element={<Islamic_story />} />
              <Route path="faqs" element={<FAQs />} />
              <Route path="contact" element={<Contact />} />
              <Route path="notice" element={<Notices />} />
              <Route path="*" element={<NoPage />} /> */}
          </Routes>
    </div>
  )
}

export default Admin
