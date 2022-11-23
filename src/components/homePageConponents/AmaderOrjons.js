import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiOutlineMinusSquare } from 'react-icons/ai';

const AmaderOrjons = () => {
    const [isloading,setIsloading]=useState(true);
    const [isError,setIsError]=useState(true);
    
    const ViewOrjon =({name,article,image})=>{
        const [isActiveArticle, setIsActiveArticle] = useState(false);
        return(<div className="mx-auto my-10 sm:w-[320px] flex flex-col justify-center shadow-2xl rounded-lg hover:shadow-pink-400 hover:shadow-sm">
        <div className='relative bg-white rounded-2xl text-black dark:bg-gray-500'>
            <img className=' drop-shadow-2xl w-full rounded-xl border-4 border-lime-400 max-h-[200px] mb-5' 
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
      axios.get('/api/cards/orjon_in_world?sort=-1&limit=1')
      .then(res=>{
        if (res.data.status && res.data.data.length) {
          console.log(res.data.data)
          handleSetGetData('orjon_in_world', res.data.data[0])
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
    axios.get('/api/cards/orjon_in_country?sort=-1&limit=1')
    .then(res=>{
        if (res.data.status && res.data.data.length) {
          console.log(res)
          handleSetGetData('orjon_in_country', res.data.data[0])
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
    axios.get('/api/cards/orjon_in_madrasa?sort=-1&limit=1')
    .then(res=>{
        if (res.data.status && res.data.data.length) {
          handleSetGetData('orjon_in_madrasa', res.data.data[0])
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
  return (
    <div className='bg-purple-200'>
        <div className='text-center pt-1'>
        <h1 style={{textShadow:'2px 2px #afaeef'}} className='text-4xl px-2 py-1 mt-1  rounded-lg bg-orange-200 inline font-black text-black text-center my-5 p-15'>আমাদের অর্জন</h1>

        </div>
    {isloading && <h2 className='text-2xl text-center m-5'>Loading...</h2>}
    {isError && <h2 className='text-2xl text-center m-5'>{isError}</h2>}
    <div className='flex flex-wrap w-full justify-center'>
      {datas && datas.orjon_in_world && <ViewOrjon {...datas.orjon_in_world} />}
      {datas && datas.orjon_in_country && <ViewOrjon {...datas.orjon_in_country} />}
      {datas && datas.orjon_in_madrasa && <ViewOrjon {...datas.orjon_in_madrasa} />}
    </div>
</div>
  )
}

export default AmaderOrjons
