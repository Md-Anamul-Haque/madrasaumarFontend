import axios from 'axios'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [userdata,setUserData]=useState({})
    const [isError,setIsError]=useState(null)
    const [isLogin,setIsLogin]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const navigate = useNavigate();

    useEffect(()=>{
      axios.get('/api/login')
      .then((res)=>{
        console.log(res)
        setIsLogin(res.data.isLogin)
        setIsLoading(false)
        setIsError(null);
        if (res.data.isLogin) {
          navigate('/admin')
        }
      })
      .catch(err=>{
        setIsLogin(false)
        setIsError(err.message+'try again letter');
        setIsLoading(false)
      })
    });

    const handleChange=(e)=>{
        setUserData({...userdata,...{[e.target.name]: e.target.value}})
        console.log(userdata)
    }
    const handleSubmitLogin =(e)=>{
      e.preventDefault();
      setIsError(null)
        axios.post('/api/login',userdata)
        .then(res=>{
            if (res.data.status) {
                navigate('/admin');
            } else {
                setIsError(res.data.message)
            }
        })
    }
  return (
    <div className="max-w-sm block mx-auto my-20">
        {isLoading && <h2 className='text-4xl text-center font-bold'>Loading...</h2>}
        {isError && <h2 className='text-4xl text-center font-bold'>{isError}</h2>}
      
  <Card>
    <form onSubmit={handleSubmitLogin} className="flex flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="username"
            value="Your username"
          />
        </div>
        <TextInput
          id="username"
          name='username'
          onChange={handleChange}
          type="text"
          placeholder="username"
          required={true}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="password"
            value="Your password"
          />
        </div>
        <TextInput
          id="password"
          name="password"
          onChange={handleChange}
          type="password"
          required={true}
          minLength={8}
        />
      </div>
  {isError && <p style={{textShadow:"-1px 2px 1px pink"}} className='text-red-500 text-sm font-bold p-1'>{isError}</p>}
      <div className="flex items-center gap-2">
        <Checkbox id="remember" name='remember'/>
        <Label htmlFor="remember">
          Remember me
        </Label>
      </div>
      <Button type="submit">
        login
      </Button>
    </form>
  </Card>
</div>
  )
}

export default Login
