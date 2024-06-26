import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {

  const navigate = useNavigate();
  const user = useSelector(store => store.user);

  const handleLogOut = () => {
    signOut(auth).then(() => {
    navigate("/"); 
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <div className='absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
      <img className='w-44 '
       src = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
       {user &&<button className='text-xl bg-red-600 rounded-md p-3 mt-auto mb-auto text-white' onClick={handleLogOut}>Sign out</button>}
    </div>
  )
}

export default Header