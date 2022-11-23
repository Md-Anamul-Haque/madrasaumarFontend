import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Admin_contact = () => {
    const [contacts,setContacts]= useState();
    const [isLoading,setIaLoading]= useState(true);
    const [isError,setIsError]= useState(null);
    useEffect(()=>{
        axios.get('/api/admin/contacts')
        .then(res=>{
            if (res.data.status) {
                setContacts(res.data.data);
                setIsError(null)
                setIaLoading(false)
            } else {
                setIsError(res.data.message)
                setIaLoading(false)
            }
        })
        .catch(err=>{
            setIsError(err.message)
            setIaLoading(false)
        })
    })
    const handleDeleteContact=(contact_id)=>{
        if (window.confirm('are you confirm for delete')) {
            axios.delete(`/api/admin/contact/${contact_id}`)
            .then(res=>{
                if (res.data.status) {
                    setContacts(contacts.map(c=>c.contact_id !== contact_id && c));
                } else {
                    alert(res.data.message)
                }
    
            })
            .catch(err=>{
                alert(err.message)
            })
        }
    }
  return (
    <div>
        {isLoading && <h2 className='text-4xl text-center font-semibold'>Loading...</h2>}
        {isError && <h2 className='text-4xl text-center font-semibold'>{isError}</h2>}
      {!isLoading && !isError && contacts && <div>
            {contacts.map((contact)=>{
                return(
                    <section className='flex flex-col p-3 m-2 my-5 ring-2 rounded-md shadow-2xl relative hover:shadow-green-400'>
                        {contact.createdAt && <p className='text-sm text-blue-500 font-light'>Created date : {contact.createdAt}</p>}
                        {contact.name && <p className='font-bold '>Name : {contact.name}</p>}

                        {contact.email && <p className='text-red-500'>Email :
                                 <Link className='hover:underline hover:text-red-700 hover:font-medium' 
                                    onClick={(e) => {window.location.href = `mailto:${contact.email}`;e.preventDefault();}}
                                    > {contact.email} </Link>
                        </p>}

                        {contact.phone && <p className='text-green-500'>Phone : 
                            <Link className='hover:underline hover:text-green-700 hover:font-medium' to='#'
                                     onClick={(e) => {window.location.href = `tel:${contact.phone}`;e.preventDefault();}} 
                                        > {contact.phone}</Link>
                         </p>}
                        {contact.message && <div>
                             Message is : <br /> 
                                                <article className='p-5 bg-slate-300 rounded shadow-inner'> {contact.message}</article>
                        </div>}
                        {contact && <button 
                            className='bg-white shadow-inner text-red-600 rounded-md mt-4 p-2 hover:text-blue-300 inline w-36 hover:bg-red-700 focus:bg-rose-600 focus:text-white '
                            onClick={()=>handleDeleteContact(contact.contact_id)}>delete</button>}
                    </section>
                )
            })}
        </div>}
    </div>
  )
}

export default Admin_contact
