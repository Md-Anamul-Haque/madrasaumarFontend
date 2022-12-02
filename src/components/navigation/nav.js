import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { FaBars } from "react-icons/fa";
import LeftIcons from './LeftIcons';
import NavElements from './NavElements';
import TopOfNav from './TopOfNav';
import TopOfNavLogoAndNameOfORG from './TopOfNavLogoAndNameOfORG';
const Nav = () => {
  const [isActiveLeftIcons, setIsActiveLeftIcons] = useState(false)
  const [isFixedNavOfTop,setIsFixedNavOfTop]=useState(false)
  const [isActiveNavMenu,setIsActiveNavMenu]=useState(false)

  const navItemsRef = useRef(null);
  const navbarRef = useRef(null)
  const TopOfNavLogoAndNameOfORGRef = useRef(null)

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
      // let lastVal = 0
      // window.onscroll = function(){
      //     let y = window.scrollY
      //     if(y > lastVal){
      //       setIsFixedNavOfTop(false)
      //       setIsActiveLeftIcons(true)
      //       clearTimeout(handleSetTimeOutLeftIcon);
      //     }
      //     if(y < lastVal) {
      //       setIsFixedNavOfTop(true)
      //       setIsActiveLeftIcons(true)
      //       clearTimeout(handleSetTimeOutLeftIcon);
      //     }
      //     lastVal = y
      // }   

      let lastVal = 0
      const navbar = navbarRef.current;
      // let sticky = navbar.offsetTop; 
      let sticky = TopOfNavLogoAndNameOfORGRef.current.clientHeight;

      window.onscroll = function(){
        if (window.pageYOffset >= sticky) {
          navbar.classList.add("fixed")
          setIsFixedNavOfTop(true)
        } else {
          navbar.classList.remove("fixed");
          setIsFixedNavOfTop(false)
        }
// ----------------------------------------
        let y = window.scrollY
          if(y > lastVal){
            clearTimeout(handleSetTimeOutLeftIcon);
          }
          if(y < lastVal) {
            clearTimeout(handleSetTimeOutLeftIcon);
          }
        lastVal = y
      }      
  },[window.innerWidth])
  
const TopPartsOfNavHear=()=>{
  return(
    <div ref={TopOfNavLogoAndNameOfORGRef} className=' grid justify-center ' style={{}}>
    <TopOfNav 
    className='w-screen px-2 content-center md:px-10 italic
    bg-[#EEE3CB] dark:bg-[#D7C0AE] text-black dark:text-[#F2F2F2]
     h-8 items-center flex space-x-5 flex-wrap' />
    <TopOfNavLogoAndNameOfORG 
    //  ar={true} bn={true}
    ar_bn_bnar='true'
    ar_bn_bnar_classname='bg-transfarent max-h-full max-h-full h-20 sm:h-24 md:h-28 lg:h-36'

    logoclass="rounded-md h-20 sm:h-24 md:h-28 lg:h-36 p-1 bg-teal-400"
    style={{textShadow:'1px 1px 3px #000 , 0px 3px 4px #fff'}}
    nameclasses="flex items-center space-x-10 font-bold space-y-5 p-5 text-purple-600"
    className='flex font-serif text-xl lg:text-2xl xl:text-3xl justify-center space-x-4 h-auto items-center place-content-center
      bg-[#EAEAEA] dark:bg-[#dcbde6] text-black dark:text-black' />
  </div>
  )
}


  return (<section className='max-w-[1300px]'>
    {/* {isActiveNavMenu && <div onClick={handleNavItemWithThreeDotNenu} className='fixed top-0 left-0 w-full h-full lg:hidden bg-[#0003]'></div>} */}
    <TopPartsOfNavHear />
    {/* 
    <nav ref={navbarRef}
      className={` z-50 flex flex-col w-full top-0
       ${isFixedNavOfTop ? 'translate-y-0' : '-translate-y-[88px]' } fixed duration-200 left-0  shadow-lg lg:items-center`}
    >  */}
    <nav ref={navbarRef}
      className={` z-50 flex flex-col w-full top-0 duration-200 left-0  shadow-lg lg:items-center`}
    >
      {/* start nav hear  */}
      <div className={`z-50 relative lg:static flex w-full h-14 justify-center bg-white dark:bg-gray-800`}>

        <button onClick={handleNavItemWithThreeDotNenu} 
          className="z-10 self-center absolute left-5 lg:hidden">
           {!isActiveNavMenu ? <FaBars className='dark:text-white text-xl rounded-full h-10 w-10 p-2' />:
           <AiOutlineClose className='dark:text-white text-xl rounded-full h-10 w-10 p-2 ring-1' />} 
        </button>


{/* Logo and name start hear */}
        <div 
        className={`lg:ml-5 max-h-14 bg-transparent justify-center ${isFixedNavOfTop ? 'scale-100 w-full lg:w-auto static z-0' : 'scale-0 w-0 lg:w-0 absolute -z-50' } duration-200 grid mx-auto`}>
          <TopOfNavLogoAndNameOfORG 
            en={true}
            logoclass="rounded-lg h-12 p-1 bg-teal-400"
            nameclasses="text-purple-500 bg-transparent dark:text-white text-center sm:inline text-2xl md:text-xl lg:text-4xl place-items-center "
            className=' mx-auto max-h-14 font-bold justify-center inline-flex place-items-center whitespace-nowrap space-x-1 font-sans rounded-sm
            bg-transparent lg:w-auto w-auto h-full content-center' 
          />
        </div>
{/* logo and name end hear  */}
        {/* <NavElements {...{navItemsRef,isFixedNavOfTop}} /> */}
        <NavElements {...{navItemsRef}} />
      </div>
    </nav>
    {/* <div className={isFixedNavOfTop ? 'h-14 w-0' : 'h-0 w-0' }></div> */}
    <LeftIcons isActiveLeftIcons={isActiveLeftIcons} />
  </section>

  )
}

export default Nav



