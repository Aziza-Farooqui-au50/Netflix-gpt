import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

  const [isSignIn, setIsSignIn]= useState(true);

  const toggleSignIn =()=>{
   setIsSignIn(!isSignIn)
  }
  return (
    <div >
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='header-img' />
      </div>
      
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'>
      <h1 className='font-bold text-3xl py-4'>
        {isSignIn? "Sign In" : "Sign Up"}
        </h1>
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-slate-600' />
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-slate-600' />
        <button className='p-4 my-4 bg-red-700 w-full'>
        {isSignIn? "Sign In" : "Sign Up"}
        </button>
        <p className='py-4' onClick={toggleSignIn}>
         {isSignIn? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login