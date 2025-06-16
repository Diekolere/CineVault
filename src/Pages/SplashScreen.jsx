import { useState } from "react"
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import React from 'react'

export default function SplashScreen(){
    const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const handleSignUp = (e) => {
    e.preventDefault();

    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      setError('Email is required');
    } else if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
       navigate('/signup');
    }
  };

    return(
        <div>
            <div className='bg-gradient-to-br from-[#000000] via-[#000000] to-[#650808] w-full h-full'>
              <div className='flex'>  
                <img src="/images/Group 13.svg" alt=""  className='pt-4 pl-5'/>
                <p className='text-2xl sm:text-3xl lg:text-3xl text-white pt-12 '>CineVault</p>
              </div>
    

        {/* Movie Posters */}
        <div className='flex gap-5 justify-center'>
            <img src="/images/image 10.svg" alt=""
            className='w-[158px] shadow-lg hover: ' />

            <div className='gap-30'>
                <img
            src="/images/image 11.svg"
            alt="Movie 1"
            className=" w-[158px] shadow-lg"
          />
           <img
            src="/images/image 8.svg"
            alt="Movie 3"
            className="w-[158px] shadow-lg mt-7"
          />
            </div>
        </div>
    
             {/* Text + Email Form + Button */}
        <div className="mt-8 text-center md:text-center md:mt-12 max-w-2xl mx-auto">
          <h1 className="text-3xl text-white md:text-5xl font-bold leading-tight">
            <span className="block md:inline">Entertainment what you want.</span>
          </h1>
          <p className="text-gray-400 mt-2 text-sm md:text-base">
            <span className="block md:inline">Download and watch offline across the world wide.</span>
          </p>

          <form onSubmit={handleSignUp} className="mt-5 mx-auto max-w-[300px]">
            <Link 
            to="/signup"
              className="mt-2 px-6 py-2 bg-gradient-to-r from-[#082eb4] to-[#640707] hover:opacity-90 text-white rounded-full transition"
            >
              Sign up
            </Link>
          </form>

          <p className="mt-2 text-gray-200 text-sm">
            or <Link to="/login" className="underline cursor-pointer">Login</Link>
          </p>

          {/* Dots */}
          <div className="flex justify-center mt-4">
            <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
            <div className="w-2 h-2 bg-gray-500 rounded-full mx-1"></div>
          </div>
        </div>
      </div>
      </div>
    
    )
}