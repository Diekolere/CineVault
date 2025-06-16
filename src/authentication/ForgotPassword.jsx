import React, { useState } from 'react';
import {Link} from 'react-router-dom'

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Recovery email submitted:', email);
    // I will later connect this to my  backend
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#000000] to-[#650808] px-4">
      <div className="w-full max-w-sm  p-8 rounded-2xl shadow-lg">
        <div className="flex justify-center bg-transparent rounded-full mb-6">
          <img
            src="/images/image 12.svg" 
            alt="Forgot Password"
            className="w-36 h-36"
          />
        </div>

        {/* Title */}
        <h2 className="text-white text-2xl font-semibold text-center mb-8">Forgot Password?</h2>

        {/* Description */}
        <p className="text-gray-400 text-sm text-center mb-6">
          You forgot your password? Don't worry, please enter your recovery email address
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-6 relative">
            <label htmlFor="email" className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 4H8m2-8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-md  border-gray-300 bg-transparent text-white placeholder-gray-500 focus:outline-none border-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#082eb4] to-[#640707] rounded-full text-white font-semibold text-sm hover:opacity-90"
          >
            Submit
          </button>
          <div className='text-center justify-center'>
          <p className="mt-2 text-gray-200 text-sm">
            or <Link to="/login" className="underline cursor-pointer">Login</Link>
          </p>
          </div>
        </form>
      </div>
    </div>
  );
}
