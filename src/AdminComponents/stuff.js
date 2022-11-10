import { Button } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Stuff=({data, handleEditStuff, isEditable})=>{
    return( <div className='w-full md:w-5/12 grow shadow-2xl flex flex-col m-4 mb-0 mt-8 px-5'>

    <div className='flex h-14 items-center space-x-5'>
        <div className="text-blueGray-500 text-center inline-flex items-center justify-center w-14 h-14 my-3 shadow-lg rounded-full bg-red-500">
                <img className='w-full h-full rounded-full' src={'/asset/files/'+data.image} alt={`${data.name}`} />
        </div>
        <h2 className="text-xl mb-1 font-semibold">{data.name}</h2>
    </div>
    
    <h3 className='text-lg mb-1 ml-4 font-medium underline'>{data.title}</h3>
    <span className='text-sm flex '> 
        <Link className=' hover:underline hover:text-red-700 hover:font-medium' to='#' onClick={(e) => {window.location.href = `mailto:${data.mail}`;e.preventDefault();}}>{data.mail}</Link>
    </span>
    <span>Phone : 
        <Link className='hover:underline hover:text-green-700 hover:font-medium' to='#' onClick={(e) => {window.location.href = `tel:${data.phone}`;e.preventDefault();}}>{data.phone}</Link>
    </span>
    <address className='text-md mb-1 font-medium underline'>{data.address}</address>
    {data.article && <p className='mb-4 text-blueGray-500'>{data.article}</p>}
    <div className='flex justify-end space-x-5 static'>
        <Button color='gray' onClick={()=>{
            handleEditStuff(data.card_id)
            }}>{!isEditable ? 'edit':'cancle'}
        </Button>
        {!isEditable && <Button color='failure'>delete</Button>}
        {isEditable && <Button color='success'>save</Button>}
    </div>
</div>)
}


export default Stuff
