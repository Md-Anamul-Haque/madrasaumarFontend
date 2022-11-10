import { Button } from 'flowbite-react';
import React, { useState } from 'react';
import { FcDonate } from "react-icons/fc";
import PaymentForm from '../components/PaymentForm';
const PaymentWhy=()=>{
	return(<div className='w-36 h-36 shadow-xl border-2 rounded-md px-5 m-5'>
		<img src='#' alt='#'/>
		<p>+88048484484</p>
	</div>)
}


const Donate = () => {
	const [isActiveDonateI,setIsActiveDonateI]=useState(false);
  return (
	<div className=' relative min-w-[460px]'>
		<div className=' bg-white md:m-10 shadow-orange-300  shadow-2xl text-center'>
			<h1 id='start' className='text-2xl font-bold mb-3'>Anim fugiat aliquip consequat et id laboris labore cillum.</h1>
			<section className='flex flex-wrap justify-center m-auto max-w-screen px-2 md:px-5'>
				<PaymentWhy />
				<PaymentWhy />
				<PaymentWhy />
				<PaymentWhy />
				<PaymentWhy />
			</section>
			<hr class="my-1 h-px bg-red-300 border-0 dark:bg-gray-700"></hr>
			<section className='grid justify-center md:grid-cols-2 px-2 md:px-5'>
				<div className='grid justify-center'>
					<FcDonate className='text-[250px]' />
				</div>
				<div className=' grid justify-center'>
					<h2 className='text-4xl'>Ex sit ex minim proident </h2>
					<p> Excepteur cupidatat proident velit culpa adipisicing est duis Lorem. Ullamco ipsum ad veniam incididunt exercitation in fugiat ad elit. Nisi 
						.</p>
					<Button onClick={()=>setIsActiveDonateI(!isActiveDonateI)}>go donate</Button>
				</div>
			</section>
		</div>
		<PaymentForm {...{setIsActiveDonateI, isActiveDonateI}} />

	</div>
  )
}

export default Donate
