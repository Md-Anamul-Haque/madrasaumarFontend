import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = ({lable,direction,datas})=>{
  direction = direction || 'right';
  
  const useDropRef = useRef(null)
  useEffect(()=>{
      let i = 0,found=false;
      while (i<useDropRef.current.children[1].children.length) {
        // useDropRef.current.style.border="none";
        if(useDropRef.current.children[1].children[i].className.indexOf('active') > -1){
          found=true;
        }
        if(found){
          useDropRef.current.style.background='red'
          // border="2px solid red";
          useDropRef.current.children[0].style.background='#ed76b0'
        }else{
          useDropRef.current.style.background="none"
          // border="none";
          useDropRef.current.children[0].style.background='none'
        }
        i++
      }
  },[useLocation()])
  return(
    <li ref={useDropRef} className='dropParent relative'>
            <button 
                className='text-gray-900 dark:text-white duration-100 hover:text-white hover:bg-pink-500 rounded-xl p-2 h-[50px]'>
                  {lable}<ArrowDropDownIcon />
            </button>
            <div className={`z-40 hidden dropChild lg:w-40 border-2 shadow-md shadow-lime-200 flex-col absolute top-[50px] 
            ${direction =='right' ? 'right-0' : 'left-0'} bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md`}>
              {datas && datas.map((data)=>{
                  return(
                    <NavLink to={data.to} end className={'text-gray-900 dark:text-white hover:text-white hover:bg-pink-500 rounded-xl p-2'}>
                     {data.lable}
                  </NavLink>
                  )
                })}
            </div>
          </li>

  )
}


const NavElements = ({navItemsRef,showTopOfNav}) => {
    const datas = [
        // { url: '/contact', txt: 'Contact' },
        {url: '/donate', txt: 'Donate'},
        { url: '/faqs', txt: 'FAQs' },
        { url: '/notice', txt: 'Notice' },
        { url: '/book', txt: 'Books' },
        // {url: '/orjon' , txt:'আমাদের অর্জন'},
        // { url: '/about', txt: 'About' },
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
  return (
    <div>
       <ul ref={navItemsRef} 
         className={` lg:h-14 absolute lg:sticky duration-200 bottom-0 translate-y-full lg:translate-y-0 left-0 hidden lg:flex place-items-center
         ${showTopOfNav ? 'justify-center' :'justify-end'}
          bg-white dark:bg-gray-800 dark:text-white lg:bg-none 
          p-7 lg:p-0 lg:px-5 lg:mr-10 space-y-5 lg:space-y-0 
         rounded-md flex-col lg:flex-row lg:space-x-4 font-medium border-4 lg:border-none`}
          >
        <li>
          <NavLink to={'/'} className='text-gray-900 dark:text-white duration-100 hover:text-white hover:bg-pink-500 rounded-xl p-2'>
            <HomeIcon /> Home
          </NavLink>
       </li>
          {datas.map(data => {
            return (
              <Li key={uuidv4()} {...{
                classNames: "text-gray-900 dark:text-white duration-100 hover:text-white hover:bg-pink-500 rounded-xl p-2",
                txt: data.txt,
                url: data.url
              }} />
            )
          })}
          {/* dropParent > dropChild */}
          {/* contact --> with form , with whatsapp  */}
          <Dropdown {...{lable:'Services',datas:[{to:'/contact',lable:<><ContactMailIcon /> Contact US</>},{to:'/runing_info',lable:'...info'},]}} />
          {/* Own -->about,আমাদের অর্জন */}
          <Dropdown {...{lable:'Own',datas:[{to:'/about',lable:<><InfoIcon /> About</>},{to:'/orjon',lable:'আমাদের অর্জন'},]}} />
        </ul>
    </div>
  )
}

export default NavElements
