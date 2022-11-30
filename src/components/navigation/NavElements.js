/* use static */
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import React, { memo, useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const DropElement=({data})=>{
const subDropdown =data.subDropdown || false;
  return(!subDropdown ? <li>
            <NavLink to={data.to} end className={'block text-gray-900 dark:text-white lg:hover:text-white lg:hover:bg-[#ef4a23] dark:lg:hover:bg-pink-500 px-2 pb-2 pt-1 hover:underline h-auto w-full'}>
              {data.lable}
            </NavLink>
          </li> : data.lable
          )
}


const Dropdown = ({lable, customClassess="right-0",sub=false,datas})=>{
  const [isFoundActive,setIsFoundActive]=useState(false)
  const useDropRef = useRef(null)
  const useDropButtonRef = useRef(null)
  const useDropElementsRef = useRef(null)


  const handleClickSmButton=()=>{
    useDropButtonRef.current.classList.toggle('bg-green-500')
    useDropButtonRef.current.classList.toggle('font-bold')
    useDropElementsRef.current.classList.toggle('hidden')
  }


  useEffect(()=>{
    let i = 0,found=false;
    while (i<useDropRef.current.children[1].children.length) {
      // useDropRef.current.style.border="none";
      // console.log(useDropElementsRef.current.children[i].children[0].className)
      if(useDropElementsRef.current.children[i].children[0].className.indexOf('active') > -1){
        found=true;
      }
      if(found){
        // useDropRef.current.classList.add('lg:bg-green-500')
        // border="2px solid red";
        useDropButtonRef.current.classList.add('lg:bg-green-300')
      }else{
        // useDropRef.current.classList.remove('lg:bg-green-500')
        // border="none";
        useDropButtonRef.current.classList.remove('lg:bg-green-300')
      }
      i++
    }
},[useLocation()])

  return(
    <li ref={useDropRef} className='dropParent relative w-full lg:w-auto inline-flex flex-grow flex-col justify-center border-t-2 border-transparent hover:border-purple-500 hover:border-dotted rounded-xl scrollbar_none lg:hover:bg-[#9eb1ff] dark:lg:hover:bg-[#009fb8] hover:rounded-sm'>

            <button ref={useDropButtonRef} className='group whitespace-nowrap text-lg lg:text-md font-serif lg:bg-transparent items-center text-gray-900 rounded-lg flex w-full text-center lg:rounded-md transition duration-75 hover:bg-pink-500 dark:text-white hover:text-white h-9
                               p-3 lg:p-1 px-2 lg:font-normal'
                  onClick={handleClickSmButton}
                >
                {lable}
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd">
                  </path>
                </svg>
            </button>
            <ul ref={useDropElementsRef} className={`hidden pl-5 lg:pl-0 lg:hidden dropChild w-full py-2 space-y-2 lg:w-40 shadow-lg shadow-black dark:shadow-lime-300 lg:ring-2 
                              flex-col lg:absolute bg-white dark:bg-gray-800 rounded-lg ${customClassess} 
                              scrollbar_none overflow-y-auto lg:overflow-y-visible`}>
              {datas && datas.map((data)=><DropElement key={uuidv4()} {...{setIsFoundActive,data}} />)}
            </ul>
          </li>

  )
}


const NavElements = ({navItemsRef}) => {
    const datas = [
        { url: '/', txt: <p className='flex'> <HomeIcon /> Home</p> },
        // {url: '/donate', txt: 'Donate'},
        { url: '/faqs', txt: 'FAQs' },
        // { url: '/notice', txt: 'Notice' },
        // { url: '/book', txt: 'Books' },
        // {url: '/orjon' , txt:'আমাদের অর্জন'},
        // { url: '/about', txt: 'About' },
        // { url: '/runing_info', txt: '...info' },
      ];
      const Li = (data) => {
        return (<li className='dropParent relative w-full lg:w-auto inline-flex flex-grow flex-col justify-center rounded-xl '>
          <NavLink className={data.classNames} end
            to={data.url}
          >
            {data.txt}
          </NavLink>
    
        </li>)
      }



      
    const staticNavLinkClasses ='group whitespace-nowrap lg:bg-transparent items-center text-gray-900 rounded-lg flex w-full text-center lg:rounded-md transition duration-75 hover:bg-pink-500 dark:text-white hover:text-white h-9 px-2';
    
    const biVagDropDownItems=[
              {to:'/শিক্ষা-তথ্য/বিভাগ/রওজাতুল-আতফাল',lable:'রওজাতুল আতফাল' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/নুরানি',lable:'নুরানি' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/নাজেরা',lable:'নাজেরা' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/হিফজ',lable:'হিফজ' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/কিতাব-বিভাগ' ,lable:'কিতাব বিভাগ...' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/তাখাসসুস',lable:'তাখাসসুস' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/তালিমুদ্দিন',lable:'তালিমুদ্দিন' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/বিবিধ-কোর্স',lable:'বিবিধ কোর্স' },
              {to:'/শিক্ষা-তথ্য/বিভাগ/মেধাবৃত্তি',lable:'মেধাবৃত্তি' },
            ],
          niyomKanunsDropdownitems=[
            {to:'/শিক্ষা-তথ্য/সাধারণ',lable:'সাধারণ' },
            {to:'/শিক্ষা-তথ্য/আবাসিক',lable:'আবাসিক' },
            {to:'/শিক্ষা-তথ্য/অনাবাসিক',lable:'অনাবাসিক' },
          ],
         shiKkhaTotthoDropDownItems=[
              {subDropdown:true,lable:<Dropdown key={uuidv4()} {...{
                                          lable:'বিভাগ',
                                          customClassess:'right-0 lg:translate-x-full -top-2', 
                                           datas:biVagDropDownItems
                                        }}
                    />
              },
              {subDropdown:true,lable:<Dropdown key={uuidv4()} {...{
                                        lable:'নিয়ম-কানুন',
                                        customClassess:'right-0 top-0 text-center lg:translate-x-full', 
                                        datas:niyomKanunsDropdownitems
                                      }} 
                    /> 
              },
              {to:'/notice',lable:'notice'}
            ];
          
        
    const VortiTotthoDropDownItems=[
              {subDropdown:true,lable:<Dropdown key={uuidv4()}  {...{
                                          lable:'ভর্তি তথ্য',
                                          customClassess:'left-0 text-center lg:-translate-x-full -top-2', 
                                           datas:[
                                              {to:'/ভর্তি/ভর্তি-তথ্য',lable:'ভর্তি তথ্য' },
                                              {to:'/ভর্তি/ভর্তি-পরামর্শ',lable:'ভর্তি পরামর্শ' },
                                              {to:'/ভর্তি/ভর্তি-শর্ত',lable:'ভর্তি শর্ত' },
                                              {to:'/ভর্তি/অনলাইন-ভর্তি',lable:'অনলাইন ভর্তি' },
                                           ]
                                        }}
                    />
              },
              {subDropdown:true,lable:<Dropdown key={uuidv4()} {...{
                                        lable:'নিয়ম-কানুন',
                                        customClassess:'left-0 top-0 text-center lg:-translate-x-full', 
                                        datas:niyomKanunsDropdownitems
                                      }} 
                    /> 
              },
              {to:'/notice',lable:'notice'}
            ];
          
  return (
    <div ref={navItemsRef} 
    className={`hidden bg-transparent lg:flex h-[80vh] lg:h-14 w-64 max-w-sm lg:w-auto lg:max-w-full max-h-[80vh] lg:max-h-14 absolute lg:sticky duration-200 bottom-0 translate-y-full lg:translate-y-0 left-0  
    lg:border-none justify-center`}>
{/*  ${showTopOfNav ? 'lg:justify-center' :'lg:justify-end'}  */}
       <ul className={`z-50 flex flex-col lg:flex-row scrollbar_none overflow-y-auto lg:overflow-y-visible w-full h-full rounded-md lg:space-x-4 font-medium border-2 lg:border-none content-start lg:justify-center
            bg-white dark:bg-gray-800 p-5 pb-10 border-b-8 border-double pr-5 lg:p-0 lg:px-5 lg:mr-10 space-y-5 lg:space-y-0 text-black dark:text-white `}>

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
          
          
          {/* শিক্ষা-তথ্য --> ... */}
          <Dropdown key={uuidv4()} {...{
                    lable:'শিক্ষা-তথ্য', 
                    customClassess:'right-0 bottom-0 lg:translate-y-full ',
                    datas:shiKkhaTotthoDropDownItems}}
            /> 
          {/* ভর্তি-তথ্য --> ... */}
          <Dropdown key={uuidv4()} {...{
                    lable:'ভর্তি', 
                    customClassess:'right-0 bottom-0 lg:translate-y-full ',
                    datas:VortiTotthoDropDownItems}}
            /> 

          {/* Services --> Contact US , ওয়াজ/বয়ান  */}
          <Dropdown key={uuidv4()} {...{lable:'Services',customClassess:'right-0 bottom-0 lg:translate-y-full ',datas:[
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
          <Dropdown key={uuidv4()} {...{lable:'মাদরাসা',customClassess:'right-0 bottom-0 lg:translate-y-full ',datas:[
                              {to:'/about',lable:<><InfoIcon /> About</>},
                              {to:'/orjon',lable:'আমাদের অর্জন'},
                              {to:'/লক্ষ-উদ্দেশ্য',lable:'লক্ষ-উদ্দেশ্য'},
                              {to:'/পরিচালক',lable:'পরিচালক'},
                              {to:'#',subDropdown:true,lable:<Dropdown key={uuidv4()} 
                                                      {...{lable:'প্রশাসন',customClassess:'left-0 -top-2 lg:-translate-x-full',datas:[
                                                              {to:'/মজলিসে-শুরা',lable:'মজলিসে-শুরা'},
                                                              {to:'/মজলিসে-ইলমি',lable:'মজলিসে-ইলমি'},
                                                              {to:'/মজলিসে-স্টাফ',lable:'মজলিসে-স্টাফ'},
                                                            ]}}
                                                  />},
                              {to:'/শিক্ষাপদ্ধতি',lable:'শিক্ষাপদ্ধতি'},
                              {to:'/শাখা',lable:'শাখা'},
                              
                            ]}} />

        <Dropdown key={uuidv4()} {...{
          lable:'অনুদান',
          customClassess:'right-0 text-center bottom-0 lg:translate-y-full ',
          datas:[
            {to:'/দানোর-ফজিলত',lable:'দানোর ফজিলত'},
            {to:'/donate',lable:'Donate'},
          ]
        }} />
        </ul>
        
    </div>
  )
}

export default memo(NavElements) 
