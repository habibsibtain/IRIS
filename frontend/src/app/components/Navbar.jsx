"use client"
import { SignInButton, UserButton } from '@clerk/nextjs';
import React, { useState } from 'react'

function Navbar() {

  const [Show , setShow] = useState(true);


  return (
    
    <>
      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://res.cloudinary.com/duwddcqzi/image/upload/v1737733679/iris-high-resolution-logo_2_ggmai8.png" className="h-10 rounded-full" alt="Logo"></img>
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <UserButton appearance={{
          elements: {
            userButtonAvatarBox: "w-10 h-10", // Customize avatar size
            userButtonTrigger: "w-10 h-10", // Adjust trigger size if needed
          },
        }}/>
            <button onClick={()=>{setShow(!Show); console.log(Show)}} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
              </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${Show ? "hidden" : 0  } w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page"><b>Home</b></a>
            </li>
            <li>
              <a href="/Register" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><b>Get Started</b></a>
            </li>
            <li>
              <a href="/ContactUs" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"><b>Contact Us</b></a>
            </li>
          </ul>
        </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
