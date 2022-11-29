import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import React, { memo, useEffect, useRef } from 'react';
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
          useDropRef.current.classList.add('lg:bg-red')
          // useDropRef.current.style.background='red'
          // useDropRef.current.children[0].style.background='#ed76b0'
          // useDropRef.current.children[0].style.color='#fff'
        }else{
          useDropRef.current.classList.remove('lg:bg-red')
          // useDropRef.current.style.background="none"
          // useDropRef.current.children[0].style.background='none'
          // useDropRef.current.children[0].style.color=''
        }
        i++
      }
  },[useLocation()])
  return(
    <li ref={useDropRef} className='dropParent relative w-full lg:w-auto inline-flex flex-grow flex-col justify-center border-t-2 hover:border-dotted rounded-xl scrollbar_none '>
            <button className='group whitespace-nowrap lg:bg-transparent items-center text-gray-900 rounded-lg flex w-full text-center
                              lg:rounded-md transition duration-75 hover:bg-white dark:text-white dark:hover:bg-gray-700
                               h-auto lg:h-[35px]' 
                  onClick={(e)=>{
                          e.target.classList.toggle('bg-green-500')
                          e.target.parentElement.children[1].classList.toggle('hidden')
                    }}
                >
                {/* <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>{lable}</span> */}
                {lable}
                <ArrowDropDownIcon className='lg:bg-transparent '
                              onClick={(e)=>{
                          e.target.parentElement.classList.toggle('bg-green-500')
                          e.target.parentElement.parentElement.children[1].classList.toggle('hidden')
                        }} />
            </button>
            <ul className={`hidden lg:hidden pl-2 dropChild w-full py-2 space-y-2 lg:w-40 shadow-lg lg:shadow-xl shadow-black dark:shadow-lime-200
                              flex-col lg:absolute bg-white dark:bg-gray-800 rounded-lg ${customClassess} 
                              py-2 scrollbar_none overflow-y-auto lg:overflow-y-visible`}>
              {datas && datas.map((data)=>{
                const subDropdown =data.subDropdown || false;
                  return(<>
                          {!subDropdown && <li>
                            <NavLink style={{textShadow:'0px 1px'}} to={data.to} end className={'block text-gray-900 dark:text-white lg:hover:text-white lg:hover:bg-[#ef4a23] dark:lg:hover:bg-pink-500 px-2 pb-2 pt-1 hover:underline h-auto lg:h-[35px] w-full'}>
                              {data.lable}
                            </NavLink>
                          </li>}
                          
                          {subDropdown && <li className={'w-full scrollbar_none text-gray-900 dark:text-white lg:hover:text-white lg:hover:pb-auto m-0 '}>
                              {data.lable}
                          </li>}
                        </>
                  )
                })}
            </ul>
          </li>

  )
}


const NavElements = ({navItemsRef,showTopOfNav}) => {
    const datas = [
        // { url: '/', txt: <p className='flex'> <HomeIcon /> Home</p> },
        // {url: '/donate', txt: 'Donate'},
        { url: '/faqs', txt: 'FAQs' },
        { url: '/notice', txt: 'Notice' },
        // { url: '/book', txt: 'Books' },
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



      
    const staticNavLinkClasses ='block lg:flex w-full text-gray-900 dark:text-white duration-100 hover:text-white hover:bg-blue-500 dark:hover:bg-pink-500 rounded-xl p-2 scrollbar_none';
    
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
              {subDropdown:true,lable:<Dropdown {...{
                                          lable:'বিভাগ',
                                          customClassess:'left-0 -top-2 lg:-translate-x-full', 
                                           datas:biVagDropDownItems
                                        }}
                    />
              },
              {subDropdown:true,lable:<Dropdown {...{
                                        lable:'নিয়ম-কানুন',
                                        customClassess:'right-0 -top-2 text-center lg:translate-x-full', 
                                        datas:niyomKanunsDropdownitems
                                      }} 
                    /> 
              },
            ];
          
        
    const VortiTotthoDropDownItems=[
              {subDropdown:true,lable:<Dropdown {...{
                                          lable:'ভর্তি তথ্য',
                                          customClassess:'right-0 -top-2 text-center lg:translate-x-full', 
                                           datas:[
                                              {to:'/ভর্তি/ভর্তি-তথ্য',lable:'ভর্তি তথ্য' },
                                              {to:'/ভর্তি/ভর্তি-পরামর্শ',lable:'ভর্তি পরামর্শ' },
                                              {to:'/ভর্তি/ভর্তি-শর্ত',lable:'ভর্তি শর্ত' },
                                              {to:'/ভর্তি/অনলাইন-ভর্তি',lable:'অনলাইন ভর্তি' },
                                           ]
                                        }}
                    />
              },
              {subDropdown:true,lable:<Dropdown {...{
                                        lable:'নিয়ম-কানুন',
                                        customClassess:'right-0 -top-2 text-center lg:translate-x-full', 
                                        datas:niyomKanunsDropdownitems
                                      }} 
                    /> 
              },
            ];
          
  return (
    <div ref={navItemsRef} 
    className={`hidden lg:flex lg:h-14 w-64 max-w-sm lg:max-w-full max-h-[80vh] absolute lg:sticky duration-200 bottom-0 translate-y-full lg:translate-y-0 left-0  
    lg:border-none justify-center`}>

       <ul className={`flex flex-col lg:flex-row scrollbar_none overflow-y-auto lg:overflow-y-visible w-full rounded-md lg:space-x-4 font-medium border-2 lg:border-none content-start ${showTopOfNav ? 'lg:justify-center' :'lg:justify-end'} 
            bg-white dark:bg-gray-800 lg:bg-none p-7 lg:p-0 lg:px-5 lg:mr-10 space-y-5 lg:space-y-0 pb-20 pr-5 text-black dark:text-white `}>
        
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
          
          
          {/* শিক্ষা-তথ্য --> ... */}
          <Dropdown {...{
                    lable:'শিক্ষা-তথ্য', 
                    customClassess:'right-0 top-auto lg:top-[35px]',
                    datas:shiKkhaTotthoDropDownItems}}
            /> 
          {/* ভর্তি-তথ্য --> ... */}
          <Dropdown {...{
                    lable:'ভর্তি', 
                    customClassess:'right-0 top-auto lg:top-[35px]',
                    datas:VortiTotthoDropDownItems}}
            /> 

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

        <Dropdown {...{
          lable:'অনুদান',
          customClassess:'right-0 text-center top-auto lg:top-[35px]',
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
