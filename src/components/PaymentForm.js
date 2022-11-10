import { TextField } from '@mui/material';
import { Button } from 'flowbite-react';
import React from 'react';
import { AiOutlineClose } from "react-icons/ai";
const PaymentForm = ({setIsActiveDonateI, isActiveDonateI}) =>{
    return(<div className={`fixed z-20 top-0 left-0 w-full h-full bg-[#1113] grid place-items-center shadow-2xl ${isActiveDonateI ? 'grid': 'hidden'}`}>
        
    <h2>Payment info to madrasaUmar</h2>,

    <button className=' absolute w-full h-full' onClick={()=>setIsActiveDonateI(false)}></button>

    <form className=' relative z-10 grid w-full bg-slate-200 space-y-3 text-center justify-center flex-col p-5 max-w-sm sm:p-10'>
        
        <Button color="gray" className=' absolute top-1 right-1'><AiOutlineClose className='text-xl' onClick={()=>setIsActiveDonateI(false)}/></Button>

        <TextField autoFocus placeholder='optional' label="Donar name" name='donarName' size='small' className='p-0' required/>
        <TextField label="account number" size='small' placeholder='your account number' required/>
        <TextField type={'number'} size='small' className='rounded-r-xl' label="amount" placeholder='tk-1***' required/>
        <label for="found" className='text-sm'>
        আপনি কি ফান্ড এর মধ্যে দান করবেন?<br />
            <input type="radio" name="colors" id="red" required/>জাকাত ফান্ড<br />
            <input type="radio" name="colors" id="blue" required/>সাধারন ফান্ড
        </label>
        <label className='text-sm'>
            <h3>আপনার মন্তব্য</h3>
            <textarea className=' rounded-r-xl w-full'>

            </textarea>
        </label>
        <Button>Submit</Button>
    </form>
</div>)
}

export default PaymentForm
