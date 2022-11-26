import React, { useState } from 'react';
import { AiOutlineMinusSquare } from 'react-icons/ai';
    
const Orjon =({name,article,image})=>{
    const [isActiveArticle, setIsActiveArticle] = useState(false);
    return(<div className="mx-auto md:mx-6 my-10 sm:w-[320px] flex flex-col justify-center shadow-2xl rounded-lg hover:shadow-pink-400 hover:shadow-sm">
    <div className='relative bg-white rounded-2xl text-black dark:bg-gray-500'>
        <img className=' drop-shadow-2xl w-auto mx-auto rounded-xl border-4 border-lime-400 max-h-[200px] mb-5' 
            src={`/asset/files/${image}`} alt="" />
        <h1 className=' text-center text-4xl px-2 shadow-sm font-serif shadow-sky-500 py-3'>{name}</h1>
        <h3 className=' text-center mb-5 p-2 text-md font-mono'>{article.slice(0, 120)+'...'}
            <span onClick={()=>setIsActiveArticle(!isActiveArticle)} className='text-blue-500 text-sm cursor-pointer hover:font-semibold'>more</span>
        </h3>
        <div className={` absolute w-full max-h-full overflow-auto bottom-0 border-4 bg-white shadow-sm rounded-lg duration-200 ${!isActiveArticle ? 'scale-0 translate-y-full': 'scale-100 translate-y-0'}`}>
            <p className='relative pt-2 p-5'>
                <button onClick={()=>setIsActiveArticle(!isActiveArticle)} 
                 className=' absolute top-2 right-0 z-30' >
                    <AiOutlineMinusSquare className='text-2xl w-8 h-8 text-red-500 hover:text-white 
                     hover:bg-red-500 animate-bounce hover:animate-none ' />
                </button>
                {article}
            </p>
        </div>
    </div>
    {/* <div className='bg-white z-10 border-t-2 p-3 flex justify-center space-x-5'>
        <Button className='w-28' color="gray" onClick={()=>}>
            <AiFillEdit />
        </Button>
    </div> */}
</div>)
}


export default Orjon
