import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { v4 as uuid } from 'uuid';

const বিভাগ_সমুহ = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [isError, setIsError] = React.useState(null);
  const [datas, setDatas] = React.useState([]);

    const [isSlideRun, setIsSlideRun] = useState(true);
    const AllContainsRef = useRef(null)
    useEffect(()=>{
      axios.get('/api/cards/বিভাগ')
      .then((res)=>{
        console.log(res)
        if(res.data.status){
          setIsError(null)
          setDatas(res.data.data)
        setIsLoading(false)
        }else{
          setIsError(res.data.message)
          setDatas([])
        setIsLoading(false)
        }
      })
      .catch((err)=>{
        setIsError(err.message)
        setIsLoading(false)
        setDatas([])
      })
    },[]);

    useEffect(()=>{

        const flavoursScrollWidth = AllContainsRef.current.scrollWidth;
        let tmpLeftValue;
        let leftAutoScrollInterval = setInterval(() => {
             try {
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
             } catch (error) {
              
             }
        }, 25);
         AllContainsRef.current.addEventListener('mouseover', () => {clearInterval(leftAutoScrollInterval)})
        //  AllContainsRef.current.addEventListener('mouseout', () => {})
          
        // });
    })


  return (
    <div className='grid py-10 place-items-center w-full text-purple-400 dark:shadow-xl'>
        <h2 style={{textShadow:'1px 2px 2px blue'}} className='text-4xl text-center font-bold my-9 p-2'>বিভাগ সমুহ</h2>
       {isLoading && <h2 className='text-4xl text-center font-bold'>Loading...</h2>}
            {isError && <h2 className='text-4xl text-center font-bold'>{isError}</h2>}
      {datas && <div 
            onMouseOver={()=>setIsSlideRun(false)}
           onMouseOut={()=>setIsSlideRun(true)} 
           ref={AllContainsRef} 
           className='mx-5 px-10 flex w-full md:w-11/12 lg:w-10/12 h-72 shadow-2xl shadow-blue-500 overflow-x-auto space-x-9 md:rounded-3xl'
           >
            {datas.map((data)=>{
                                return(<img style={{boxShadow:'0px 2px 8px 3px #000'}} key={uuid()} className='my-5 rounded-lg unselectable' src={`/asset/files/${data.image}`} alt='vibags' />)
                              })}
        </div>}
    </div>
  )
}

export default বিভাগ_সমুহ
