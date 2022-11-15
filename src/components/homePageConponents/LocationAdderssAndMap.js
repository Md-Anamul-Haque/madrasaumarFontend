import React, { useEffect, useRef } from 'react';
import { FaMailBulk, FaMapMarkerAlt, FaWhatsappSquare } from 'react-icons/fa';

const LocationAdderssAndMap = () => {
  const mapIframeRef = useRef(null);
  useEffect(()=>{
    mapIframeRef.current.src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14605.29970858232!2d90.3936599!3d23.7714411!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x23020e9ee1ab5065!2zTWFkcmFzYSBVbWFyIFIuIEFsIElzbGFtaWEgRGhha2EuINmF2K_Ysdiz2Kkg2LnZhdixINix2LbZiiDYp9mE2YTZhyDYudmG2Ycg2KfZhNil2LPZhNin2YXZitipINiv2KfZg9inIOCmruCmvuCmpuCmsOCmvuCmuOCmviDgpongpq7gprAg4Kaw4Ka-LiDgpobgprIt4KaH4Ka44Kay4Ka-4Kau4Ka_4Kef4Ka-IOCmouCmvuCmleCmvg!5e0!3m2!1sen!2sbd!4v1668267142833!5m2!1sen!2sbd";
    mapIframeRef.current.referrerPolicy="no-referrer-when-downgrade";
    mapIframeRef.current.loading="lazy";
  },[])
  return (<section className='dark:bg-slate-800 my-10 dark:text-white dark:shadow-xl'>
  <hr className='border-2 my-8' />
        <h2 className='text-4xl text-center mt-10'>Address</h2>
    <div className='grid md:grid-cols-2 p-8 md:space-x-5'>
      <div className='border-2 bg-lime-200 p-5 lg:pl-7'>
        <span className='text-[100px] text-center text-red-500 w-full grid justify-center'>
          <FaMapMarkerAlt />
        </span>
        <h2 className='text-center'>location name / city</h2>
        <address className='italic text-center'>full address..............</address>
        <br />
        <h2 className='flex'>
          <span className='text-4xl text-red-500'><FaMailBulk /></span>
           email .................@............. </h2>
        <h2 className='flex'>
          <span className='text-4xl text-lime-600'><FaWhatsappSquare /></span>
          whatsApp number : </h2>
      </div>
      <div className='border-2'>
        <iframe ref={mapIframeRef} className='border-none w-full h-[300px]' ></iframe>
      </div>
    </div>
    </section>

  )
}

export default LocationAdderssAndMap
