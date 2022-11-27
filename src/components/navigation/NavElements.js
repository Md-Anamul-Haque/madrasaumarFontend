import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

const Dropdown = ({lable, customClassess="right-0",sub=false,datas})=>{
  
  const useDropRef = useRef(null)
  useEffect(()=>{
      let i = 0,found=false;
      while (i<useDropRef.current.children[1].children.length) {
        // useDropRef.current.style.border="none";
        if(useDropRef.current.children[1].children[i].className.indexOf('active') > -1){
          found=true;
        }
        if(found){
          // useDropRef.current.classList.add('')
          useDropRef.current.style.background='red'
          useDropRef.current.children[0].style.background='#ed76b0'
          useDropRef.current.children[0].style.color='#fff'
        }else{
          // useDropRef.current.classList.remove('active')
          useDropRef.current.style.background="none"
          useDropRef.current.children[0].style.background='none'
          useDropRef.current.children[0].style.color=''
        }
        i++
      }
  },[useLocation()])
  return(
    <li ref={useDropRef} className='dropParent relative hover:bg-blue-500 dark:hover:bg-pink-500 
                  w-[160px] max-w-sm lg:w-auto flex flex-col justify-left hover:border-t-2 border-dotted px-2 rounded-xl
                  scrollbar_none '>
            <button className='text-start duration-100 h-auto lg:h-[35px] px-2 rounded-md'>
                  {lable}<ArrowDropDownIcon />
            </button>
           
            <div className={`z-40 hidden dropChild w-full min-w-[160px] max-w-sm lg:w-40 border-1 lg:border-none shadow-sm lg:shadow-xl shadow-black dark:shadow-lime-200
                              flex-col lg:absolute bg-white dark:bg-gray-800 rounded-lg ${customClassess} 
                              py-2 scrollbar_none overflow-y-auto lg:overflow-y-visible`}>
              {datas && datas.map((data)=>{
                const subDropdown =data.subDropdown || false;
                  return(<>
                          {!subDropdown && <NavLink style={{textShadow:'0px 1px'}} to={data.to} end className={'block text-gray-900 dark:text-white lg:hover:text-white lg:hover:bg-[#ef4a23] dark:hover:bg-pink-500 px-2 pb-2 pt-1 hover:underline h-auto lg:h-[35px] w-full'}>
                            {data.lable}
                          </NavLink>}
                          
                          {subDropdown && <span className={'w-10/12 scrollbar_none text-gray-900 dark:text-white lg:hover:text-white lg:hover:bg-[#ef4a23] lg:dark:hover:bg-pink-500 hover:border-b-2 border-dotted hover:pb-7 hover:lg:pb-0 lg:hover:pb-auto m-0 '}>
                              {data.lable}
                          </span>}
                        </>
                  )
                })}
            </div>
          </li>

  )
}


const NavElements = ({navItemsRef,showTopOfNav}) => {
    const datas = [
        // { url: '/', txt: <p className='flex'> <HomeIcon /> Home</p> },
        {url: '/donate', txt: 'Donate'},
        { url: '/faqs', txt: 'FAQs' },
        { url: '/notice', txt: 'Notice' },
        { url: '/book', txt: 'Books' },
        // {url: '/orjon' , txt:'আমাদের অর্জন'},
        // { url: '/about', txt: 'About' },
        // { url: '/runing_info', txt: '...info' },
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
    const staticNavLinkClasses ='block lg:inline text-gray-900 dark:text-white duration-100 hover:text-white hover:bg-blue-500 dark:hover:bg-pink-500 rounded-xl p-2 scrollbar_none'
  return (
    <div ref={navItemsRef} 
    className={`lg:flex lg:h-14 w-full max-w-sm lg:max-w-full absolute lg:sticky duration-200 bottom-0 translate-y-full lg:translate-y-0 left-0 hidden 
    lg:border-none `}>

       <ul className={`lg:flex scrollbar_none overflow-y-auto lg:overflow-y-visible max-h-screen w-full rounded-md flex-col lg:flex-row lg:space-x-4 font-medium border-2 lg:border-none 
          place-items-center ${showTopOfNav ? 'justify-center' :'justify-end'}  bg-white dark:bg-gray-800 lg:bg-none p-7 lg:p-0 lg:px-5 lg:mr-10 space-y-5 lg:space-y-0 pb-20 pr-5 text-black dark:text-white`}>
        
        <li>
          <NavLink to={'/'} className={staticNavLinkClasses}>
            <HomeIcon /> Home
          </NavLink>
       </li>
          {datas.map(data => {
            return (
              <Li key={uuidv4()} {...{
                classNames: staticNavLinkClasses,
                txt: data.txt,
                url: data.url
              }} />
            )
          })}
          {/* dropParent > dropChild */}
          {/* Services --> Contact US , ওয়াজ/বয়ান  */}
          <Dropdown {...{lable:'Services',customClassess:'right-0 top-auto lg:top-[35px]',datas:[
                        {to:'/contact',lable:<><ContactMailIcon /> Contact US</>},
                        {to:'/ওয়াজ-বয়ান',lable:'ওয়াজ ও বয়ান'},
                        {to:'/দ্বীনি-রচনা',lable:'দ্বীনি রচনা'},
                        {to:'/বিবাহ-ব্যবস্থা',lable:'সুন্নতি বিবাহ ব্যবস্থা'},
                        {to:'/খেদমতে-খালক',lable:'খেদমতে খালক'},
                        {to:'/বিবিধ-কোর্স',lable:'বিবিধ কোর্স'},
                        {to:'/সেবা-রিপোর্ট',lable:'সেবা রিপোর্ট'},
                        {to:'/শীতবস্ত্র-প্রদান',lable:'শীতবস্ত্র প্রদান'},
                    ]}}
           />
          {/* Own -->about,আমাদের অর্জন */}
          <Dropdown {...{lable:'Own',customClassess:'right-0 top-auto lg:top-[35px]',datas:[
                              {to:'/about',lable:<><InfoIcon /> About</>},
                              {to:'/orjon',lable:'আমাদের অর্জন'},
                              {to:'/লক্ষ-উদ্দেশ্য',lable:'লক্ষ-উদ্দেশ্য'},
                              {to:'/পরিচালক',lable:'পরিচালক'},
                              {to:'#',subDropdown:true,lable:<Dropdown 
                                                      {...{lable:'প্রশাসন',customClassess:'left-0 -top-2 lg:-translate-x-full',datas:[
                                                              {to:'/মজলিসে-শুরা',lable:'মজলিসে-শুরা'},
                                                              {to:'/মজলিসে-ইলমি',lable:'মজলিসে-ইলমি'},
                                                              {to:'/মজলিসে-স্টাফ',lable:'মজলিসে-স্টাফ'},
                                                            ]}}
                                                  />},
                              {to:'/শিক্ষাপদ্ধতি',lable:'শিক্ষাপদ্ধতি'},
                              {to:'/শাখা',lable:'শাখা'},
                              
                            ]}} />
        </ul>
        
    </div>
  )
}

export default NavElements
