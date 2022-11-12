import React, { useState } from 'react';

const Clock = ({...rafrss}) => {
    const [new_time, setNew_time]=useState(new Date().toLocaleTimeString("bn-BD"))
    useState(()=>{
        setInterval(() => {
            setNew_time(new Date().toLocaleTimeString('bn-BD'))
        }, 1000);
    },[])
    
  return (
    <h1 {...rafrss} style={{ textShadow:"0 1px 1px 2px #000"}}>
      { new_time }
    </h1>
  )
}

export default Clock
