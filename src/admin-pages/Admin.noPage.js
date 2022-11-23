import axios from 'axios';
import React, { useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";

const NoPage = () => {
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

  return (
<main className="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
	<h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
	<div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
		Page Not Found
	</div>
	<button className="mt-5">
      <span
        className="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
      >
        <span
          className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
        ></span>

        <span className="relative block text-white px-8 py-3 bg-[#1A2238] border border-current">
          <NavLink to="/admin">Go Home</NavLink>
        </span>
      </span>
    </button>
</main>
  )
}

export default NoPage
