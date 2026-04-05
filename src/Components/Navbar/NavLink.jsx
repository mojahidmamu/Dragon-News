// components/NavLink.jsx
// import React, { useState } from 'react';
import UserLogo from "../../assets/image/user.png";
import { Link } from 'react-router';

const NavLink = () => {

  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginClick = (e) => { 
  //   e.preventDefault();
  //   setIsLoggedIn(!isLoggedIn);
  //   console.log('Login clicked - Current state:', !isLoggedIn);
  // }

   const NavOptions = (
    <>
      <li>
        <Link
          to="/"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/about"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="/career"
          className="hover:text-purple-400 transition-colors duration-200"
        >
          Career
        </Link>
      </li>
    </>
  );

    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {NavOptions}
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {NavOptions}
    </ul>
  </div>
  <div className="navbar-end gap-4">
    <img className='' src={UserLogo} alt="User" />
    
                <Link to="/login">
                
                  <button
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                        'bg-amber-500 hover:bg-amber-600 text-gray-900 shadow-lg shadow-amber-500/30'
                  }`}
                  >
                  Login
                  </button>
                </Link>
        
   
  </div>
</div>
    );
};

export default NavLink;