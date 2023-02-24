import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [Error, setError] = useState("")
  const { loginData, loading } = useSelector((state) => state.User);
  console.log(loginData);
  const signIn = (e) => {
    e.preventDefault();
    const ele = e.target.elements
    const email = ele[0].value;
    const pass = ele[1].value;
    // dispatch(getUser({ email, pass }));
    ele[0].value = "";
    ele[1].value = "";

  }
  useEffect(() => {
    if (loginData.message) {
      window.alert(" Login is Sucess")
      Navigate('/LandingPage')
    } else {
      setError("")
    }

  }, [loginData])





  return (
    <form className='form' onSubmit={signIn}>
      <div className="LoginContainer">


        <input type="text" placeholder='   Email Address *' required className='Input-box1'></input>
        <input type="text" placeholder='   password *' required className='Input-box2'></input>
        <div><span>{Error}</span></div>
        <button className='Sign-in-btn'>SIGN IN</button>



      </div>   </form>

  )

}

export default Login