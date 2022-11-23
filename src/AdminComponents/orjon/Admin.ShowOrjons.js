import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import Editable_Orjon from './A.EditableOrjon';
import { DatascontrolerContext } from './Datas.CreateContext';

const Admin_showOrjons = () => {
  const {datas,setDatas,isloading,setIsloading} = useContext(DatascontrolerContext);
  
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
    axios.get('/api/cards/orjon_in_world')
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
        console.log(err.message)
    })
},[])
useEffect(()=>{
  axios.get('/api/cards/orjon_in_country')
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
      console.log(err.message)
  })
},[])
useEffect(()=>{
  axios.get('/api/cards/orjon_in_madrasa')
  .then(res=>{
      if (res.data.status && res.data.data.length) {
        console.log(res)
        handleSetGetData('orjon_in_madrasa', res.data.data)
        setGetFinishMadrasa(true)
      } else {
        console.log('data is not found in madrasa orjon')
        setGetFinishMadrasa(true)
      }
  })
  .catch(err=>{
      console.log(err.message)
  })
},[])
  return (
    <div>
      {isloading && <h2 className='text-2xl text-center font-bold'>Loading...</h2>}
      <div>

        <div>
          {datas && 
            datas.orjon_in_world &&
              <div>
                <h1 className='text-2xl text-center w-full' >orjon_in_world</h1>
                 <div className='flex flex-warp w-full h-full bg-purple-400 '>
                  {datas.orjon_in_world.map((data)=>{
                        return(
                          <Editable_Orjon key={v4()} {...data}  />
                        )
                  })}
                </div>
              </div>
          }
        </div>


        <div>
          {datas && 
            datas.orjon_in_country &&
              <div> 
                <h1 className='text-2xl text-center w-full' >orjon_in_country</h1>
                <div className='flex flex-warp w-full h-full bg-purple-400 '>
                    {datas.orjon_in_country.map((data)=>{
                          return(
                            <Editable_Orjon key={v4()} {...data}  />
                          )
                    })}
                </div>
              </div>
          }
        </div>
        <div>
          {datas && 
            datas.orjon_in_madrasa && 
              <div>
                <h1 className='text-2xl text-center w-full' >orjon_in_madrasa</h1>
                <div className='flex flex-warp w-full h-full bg-purple-400 '>
                  {datas.orjon_in_madrasa.map((data)=>{
                        return(
                          <Editable_Orjon key={v4()} {...data}  />
                        )
                  })}
                </div>
              </div>
          }
        </div>
      </div>
    </div>
  )
}


export default Admin_showOrjons

