import React, { useEffect, useRef, useState } from 'react';
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import LeftIcons from './LeftIcons';
import TopOfNav from './TopOfNav';
import TopOfNavLogoAndNameOfORG from './TopOfNavLogoAndNameOfORG';
const Nav = () => {
  const [isActiveLeftIcons, setIsActiveLeftIcons] = useState(false)
  const [showTopOfNav,setShowTopOfNav]=useState(true)
  const navItemsRef = useRef(null);
  const handleNavItemWithThreeDotNenu = (e,bb) => {
    navItemsRef.current.classList.toggle("hidden");
    navItemsRef.current.classList.toggle("flex");
    e.target.classList.toggle("bg-blue-300");
  }
  const datas = [
    { url: '/', txt: 'Home' },
    { url: '/contact', txt: 'Contact' },
    {url: '/donate', txt: 'Donate'},
    { url: '/faqs', txt: 'FAQs' },
    { url: '/notice', txt: 'Notice' },
    { url: '/book', txt: 'Books' },
    { url: '/about', txt: 'About' },
    { url: '/runing_info', txt: '...info' },
  ];

  const Li = (data) => {
    return (<li>
      <NavLink className={data.classNames} end
        to={data.url}
      >
        {data.txt}
      </NavLink>

    </li>)
  }
  const handleSetTimeOutLeftIcon = setTimeout(() => {
    setIsActiveLeftIcons(false)
  }, 3000);
  useEffect(()=>{
      var lastVal = 0
      window.onscroll = function(){
          let y = window.scrollY
          if(y > lastVal){
            setShowTopOfNav(false)
            setIsActiveLeftIcons(true)
            clearTimeout(handleSetTimeOutLeftIcon);
          }
          if(y < lastVal) {
            setShowTopOfNav(true)
            setIsActiveLeftIcons(true)
            clearTimeout(handleSetTimeOutLeftIcon);
          }
          lastVal = y
      }        
  },[])
const TopPartsOfNavHear=()=>{
  return(

    <div className=' grid justify-center'>

    <TopOfNav 
    className='w-screen px-2 content-center md:px-10 italic
    bg-[#EEE3CB] dark:bg-[#D7C0AE] text-black dark:text-[#F2F2F2]
     h-8 flex space-x-5 flex-wrap' />

    <TopOfNavLogoAndNameOfORG 
    logoclass="rounded-sm h-full bg-teal-400 grid place-items-center"
    nameclasses="flex space-x-10"
    className='flex p-1 justify-center space-x-4 italic h-10 place-content-center
      bg-[#EAEAEA] dark:bg-[#dcbde6] text-black dark:text-black' />

  </div>

  )
}
  return (<>
    <div className="h-36"></div> 
    <nav 
      className={` z-50 flex flex-col top-0 w-full
       ${showTopOfNav ? 'translate-y-0' : '-translate-y-[74px]'} fixed duration-300 left-0  shadow-lg lg:items-center z-10`}
    >

      <TopPartsOfNavHear />

      {/* start nav hear  */}
      <div 
        className=' relative lg:static flex w-full h-14 justify-center bg-white dark:bg-gray-800 '
      >
        <button onClick={handleNavItemWithThreeDotNenu} 
          className="z-10 self-center absolute left-5 lg:hidden">
           <FaBars className='dark:text-white text-xl rounded-full h-10 w-10 p-2' /> 
        </button>

{/* Logo and name start hear */}
        <div className={`static duration-200 mx-auto lg:ml-5 ${showTopOfNav ? 'scale-0 w-0 h-0 mr-2  ' : ' scale-100 w-auto h-auto mr-auto'}`}>
          <TopOfNavLogoAndNameOfORG 
            logoclass="rounded-lg h-12 p-1 bg-teal-400 grid place-items-center"
            nameclasses="dark:text-white font-bold"
            className='flex place-items-center space-x-5 px-2 rounded-sm
            bg-[#F1F1F1] dark:bg-[#0F3D3E] shadow-2xl ' />
        </div>
{/* logo and name end hear  */}
        <div >
        <ul ref={navItemsRef} 
         className={` lg:h-14 absolute lg:sticky duration-200 bottom-0 translate-y-full lg:translate-y-0 left-0 hidden lg:flex place-items-center
         ${showTopOfNav ? 'justify-center' :'justify-end'}
          bg-white dark:bg-gray-800 dark:text-white lg:bg-none 
          p-7 lg:p-0 lg:px-5 lg:mr-10 space-y-5 lg:space-y-0 
         rounded-md flex-col lg:flex-row lg:space-x-4 font-medium border-4 lg:border-none`}
          >
          {datas.map(data => {
            return (
              <Li key={uuidv4()} {...{
                classNames: "text-gray-900 dark:text-white duration-100 hover:text-white hover:bg-pink-500 rounded-xl p-2",
                txt: data.txt,
                url: data.url
              }} />
            )
          })}
        </ul>
        </div>
      
      </div>
    </nav>
    <LeftIcons isActiveLeftIcons={isActiveLeftIcons} />
  </>

  )
}

export default Nav



