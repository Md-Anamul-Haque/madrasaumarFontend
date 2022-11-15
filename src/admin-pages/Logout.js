import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();
    const handleSubmitLogin =()=>{
        axios.get('/api/logout')
        .then(res=>{
          console.log(res)
            if (res.data.status) {
                navigate('/');
            } else {
                window.location.reload();
            }
        })
    }
    useEffect(handleSubmitLogin,[])
  return (
    <div>
      
    </div>
  )
}

export default Logout