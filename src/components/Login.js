import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {
        const [isSignInForm , setIsSignInForm] = useState(true);

        const toggleSignInForm = () => {
              setIsSignInForm(!isSignInForm);
        }

  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black  mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-70'>
        <h1 className = "font-bold text-3xl p-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&<input type="text" placeholder="Full Name" className="p-3 m-3 w-full bg-gray-700"/>}
        <input type="text" placeholder="Email Address" className="p-3 m-3 w-full bg-gray-700"/>
        <input type="password" placeholder="Password" className="p-3 m-3 w-full bg-gray-700"/>
        <button className="p-3 m-3 my-6 bg-red-700 w-full rounded-lg">{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className = "p-3 cursor-pointer" onClick = {toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login