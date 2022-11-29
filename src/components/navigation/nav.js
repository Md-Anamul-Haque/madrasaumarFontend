import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from "react-icons/fa";
import LeftIcons from './LeftIcons';
import NavElements from './NavElements';
import TopOfNav from './TopOfNav';
import TopOfNavLogoAndNameOfORG from './TopOfNavLogoAndNameOfORG';
const Nav = () => {
  const [isActiveLeftIcons, setIsActiveLeftIcons] = useState(false)
  const [showTopOfNav,setShowTopOfNav]=useState(true)
  const [isActiveNavMenu,setIsActiveNavMenu]=useState(false)
  const navItemsRef = useRef(null);
  const handleNavItemWithThreeDotNenu = (e,bb) => {
    setIsActiveNavMenu(!isActiveNavMenu)
    navItemsRef.current.classList.toggle("hidden");
    // navItemsRef.current.classList.toggle("flex");
    e.target.classList.toggle("bg-blue-300");
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
    nameclasses="flex space-x-10 font-bold"
    className='flex p-1 justify-center space-x-4 italic h-10 place-content-center
      bg-[#EAEAEA] dark:bg-[#dcbde6] text-black dark:text-black' />

  </div>

  )
}
  return (<>
    <div className="h-36"></div> 
    <nav 
      className={` z-50 flex flex-col w-full
       ${showTopOfNav ? 'top-0' : '-top-[74px]'} fixed duration-300 left-0  shadow-lg lg:items-center z-10`}
    >

      <TopPartsOfNavHear />

      {/* start nav hear  */}
      <div className={`relative lg:static flex w-full h-14 justify-center bg-white dark:bg-gray-800`}>

        <button onClick={handleNavItemWithThreeDotNenu} 
          className="z-10 self-center absolute left-5 lg:hidden">
           {!isActiveNavMenu ? <FaBars className='dark:text-white text-xl rounded-full h-10 w-10 p-2' />:
           <AiOutlineClose className='dark:text-white text-xl rounded-full h-10 w-10 p-2' />} 
        </button>

{/* Logo and name start hear */}
        <div 
        className={`lg:ml-5 justify-center ${showTopOfNav ? 'hidden' : 'grid'} mx-auto w-full `}>
          <TopOfNavLogoAndNameOfORG 
            isNameIndex0={false}
            logoclass="rounded-lg h-12 p-1 bg-teal-400"
            nameclasses="text-purple-500 dark:text-white font-sans pt-1 pb-3 text-sm sm:text-md md:text-lg flex place-items-center "
            className=' mx-auto flex place-items-center whitespace-nowrap space-x-4 rounded-sm
            bg-transparent shadow-2xl lg:w-auto w-full h-full content-center' 
          />
        </div>
{/* logo and name end hear  */}
        <NavElements {...{navItemsRef,showTopOfNav}} />
      </div>
    </nav>
    <LeftIcons isActiveLeftIcons={isActiveLeftIcons} />
  </>

  )
}

export default Nav



