import { Button } from 'flowbite-react';
import React, { useState } from 'react';

const Book = () => {
    const [isActiveArticle,setIsActiveArticle]=useState(false)
    return (
        <div className=" w-[280px] flex flex-col justify-center shadow-2xl mx-4 rounded-sm">
            <div className='relative'>
                <img className=' drop-shadow-2xl w-full max-h-[200px] my-5' 
                    src="/asset/files/logo.jpeg" alt="" srcset="" />
                <h1 className=' text-center text-4xl'>book name</h1>
                <h3 className=' text-center text-lg mb-5'>book type</h3>
                <div className={` absolute w-full bottom-0 p-5 border-4 bg-white shadow-sm rounded-lg duration-200 ${!isActiveArticle ? 'scale-0 translate-y-full': 'scale-100 translate-y-0'}`}>
                    <p>Tempor duis ut dolore elit occaecat culpa anim ullamco et enim amet fugiat. Velit aliquip sit labore est sunt. Velit cupidatat incididunt magna deserunt. Cupidatat quis veniam amet aliquip. Ut elit incididunt consequat id ea dolor labore incididunt aliquip irure veniam est aliqua.</p>
                </div>
            </div>
            <div className='bg-white z-10 border-t-2 p-5 flex justify-center space-x-5'>
                <Button className='w-28' color="gray" onClick={()=>setIsActiveArticle(!isActiveArticle)}>
                    {isActiveArticle ? 'back' : 'more info.'}
                </Button>
                <a href="#" download={true}><Button>download</Button></a>
            </div>
        </div>
       );
}

export default Book

