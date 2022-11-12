import React, { useEffect, useRef, useState } from 'react';

const বিভাগ_সমুহ = () => {
    const [isSlideRun, setIsSlideRun] = useState(true);
    const AllContainsRef = useRef(null)
    useEffect(()=>{

        const flavoursScrollWidth = AllContainsRef.current.scrollWidth;
        let tmpLeftValue;
        let leftAutoScrollInterval = setInterval(() => {
              if (AllContainsRef.current.scrollLeft !== AllContainsRef.current.scrollWidth) {
                  AllContainsRef.current.scrollTo(AllContainsRef.current.scrollLeft + 1, 0);
                  if(tmpLeftValue !== AllContainsRef.current.scrollLeft){
                      tmpLeftValue = AllContainsRef.current.scrollLeft;
                  }else{
                      AllContainsRef.current.scrollLeft=1;
                  }
              }else{
                  alert(AllContainsRef.current.scrollRight)
              }
        }, 15);
         AllContainsRef.current.addEventListener('mouseover', () => {clearInterval(leftAutoScrollInterval)})
        //  AllContainsRef.current.addEventListener('mouseout', () => {})
          
        // });
    })
  return (
    <div className='grid place-items-center w-full bg-slate-500'>
        <h2 className='text-4xl text-center text-white font-bold my-9'>বিভাগ সমুহ</h2>
      
      <div onMouseOver={()=>setIsSlideRun(false)} onMouseOut={()=>setIsSlideRun(true)} ref={AllContainsRef} className=' flex w-full md:w-10/12 lg:w-8/12 overflow-x-auto '>
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
        <img className='w-56 grow' src='/asset/files/logo.jpeg' alt='orjon' />
      </div>
    </div>
  )
}

export default বিভাগ_সমুহ
