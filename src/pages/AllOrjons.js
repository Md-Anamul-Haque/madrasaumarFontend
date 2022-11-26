import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Orjon from '../components/Orjon';

const AllOrjons = () => {
    const [isloading,setIsloading]=useState(true);
    const [isError,setIsError]=useState(true);

    const [datas,setDatas]= useState({})
    const [getFinishWorld,setGetFinishWorld]=useState(false)
    const [getFinishCountry,setGetFinishCountry]=useState(false)
    const [getFinishMadrasa,setGetFinishMadrasa]=useState(false)
    let getDatas={}
    const handleSetGetData=(key,value)=>{
      setDatas({...getDatas, ...{[key]:value}})
      getDatas[key]=value;
    }
    useEffect(()=>{
      (getFinishWorld && getFinishCountry && getFinishMadrasa && setIsloading(false))
    },[getFinishWorld+getFinishCountry+getFinishMadrasa])
   
    
   useEffect(()=>{
      axios.get('/api/cards/orjon_in_world?sort=-1')
      .then(res=>{
        if (res.data.status && res.data.data.length) {
          console.log(res.data.data)
          handleSetGetData('orjon_in_world', res.data.data)
          setGetFinishWorld(true)
        } else {
          console.log('not found gain in the world orjons')
          setGetFinishWorld(true)
        }
  
      })
      .catch(err=>{
          setIsError(err.message)
      })
  },[])
  useEffect(()=>{
    axios.get('/api/cards/orjon_in_country?sort=-1')
    .then(res=>{
        if (res.data.status && res.data.data.length) {
          console.log(res)
          handleSetGetData('orjon_in_country', res.data.data)
          setGetFinishCountry(true)
        } else {
          console.log('data is not found in country orjon')
          setGetFinishCountry(true)
        }
    })
    .catch(err=>{
        setIsError(err.message)

    })
  },[])
  useEffect(()=>{
    axios.get('/api/cards/orjon_in_madrasa?sort=-1')
    .then(res=>{
        if (res.data.status && res.data.data.length) {
          handleSetGetData('orjon_in_madrasa', res.data.data)
          setGetFinishMadrasa(true)
        } else {
          console.log('data is not found in madrasa orjon')
          setGetFinishMadrasa(true)
        }
    })
    .catch(err=>{
        setIsError(err.message)

    })
  },[])

  useEffect(()=>{
    document.title="আমাদের অর্জন";
  },[])
  return (
    <div className='bg-purple-200'>
        <div className='text-center pt-1'>
        <h1 style={{textShadow:'2px 2px #afaeef'}} className='text-4xl px-2 py-1 mt-1  rounded-lg bg-orange-200 inline font-black text-black text-center my-5 p-15'>আমাদের অর্জন</h1>

        </div>
    {isloading && <h2 className='text-2xl text-center m-5'>Loading...</h2>}
    {isError && <h2 className='text-2xl text-center m-5'>{isError}</h2>}
    
   
    <h2 className='text-center text-2xl font-semibold w-full block'>orjons in world</h2>
    
    <div className='flex flex-wrap w-full justify-center'>
      {datas && datas.orjon_in_world && datas.orjon_in_world.map(ow=> <Orjon {...ow} />)}
    </div>
    
    
    <h2 className='text-center text-2xl font-semibold w-full block'>orjons in country</h2>
    
    <div className='flex flex-wrap w-full justify-center'>
      {datas && datas.orjon_in_country && datas.orjon_in_country.map(oc=><Orjon {...oc} />) }
    </div>
    
    
    <h2 className='text-center text-2xl font-semibold w-full block'>orjons in madrasa</h2>
    
    <div className='flex flex-wrap w-full justify-center'>
      {datas && datas.orjon_in_madrasa && datas.orjon_in_madrasa.map(om=><Orjon {...om} />) }
    </div>
</div>
  )
}

export default AllOrjons
