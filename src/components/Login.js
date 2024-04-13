import React from 'react'
import Header from './Header'
import { useState , useRef } from 'react';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword , updateProfile  } from "firebase/auth";
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {
        const [isSignInForm , setIsSignInForm] = useState(true);
        const [errorMessage,setErrorMessage] = useState(null);
        const navigate = useNavigate();
        const dispatch = useDispatch();

        const name = useRef(null);
        const email = useRef(null);
        const password = useRef(null);

        const handleClick = () => {
          
         const message = checkValidData(email.current.value, password.current.value,name?.current?.value,isSignInForm);
         setErrorMessage(message);

         if(message) return;  //Validation Failed

         //Sign Up
          if(!isSignInForm){
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: name?.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
            }).then(() => {
              // Profile updated!
              const {uid,displayName,email} = user;
              dispatch(addUser({uid,displayName,email}));
               navigate("/browse");
            }).catch((error) => {
              // An error occurred
             setErrorMessage(error.code + error.message);
              
            });
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode + errorMessage);
          });
          }

          //Sign In
          else{
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              if(errorCode === "auth/invalid-credential")setErrorMessage("Invalid Credentials");
            });
          }
        

        }

        const toggleSignInForm = () => {
              setIsSignInForm(!isSignInForm);
        }

  return (
    <div>
      <Header />
      <div className="absolute">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="logo"/>
      </div>
      <form className='w-3/12 absolute p-12 bg-black  mx-auto my-36 right-0 left-0 text-white rounded-lg bg-opacity-70'
      onSubmit={(e) => e.preventDefault()}>
        <h1 className = "font-bold text-3xl p-3">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm &&<input type="text" ref={name} placeholder="Full Name" className="p-3 m-3 w-full bg-gray-700"/>}
        <input type="text" ref={email} placeholder="Email Address" className="p-3 m-3 w-full bg-gray-700"/>
        <input type="password" ref={password} placeholder="Password" className="p-3 m-3 w-full bg-gray-700"/>
        <p className = "text-red-500 w-fit m-3 text-l">{errorMessage}</p>
        <button className="p-3 m-3 my-6 bg-red-700 w-full rounded-lg" onClick={handleClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className = "p-3 cursor-pointer" onClick = {toggleSignInForm}>{isSignInForm ? "New To Netflix? Sign Up Now" : "Already Registered? Sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login