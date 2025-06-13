import React, { useState } from 'react';
import { FaFacebookF, FaGoogle, FaEnvelope, FaLock } from 'react-icons/fa';
import { IoEyeOff, IoEye } from 'react-icons/io5';
import {Link} from 'react-router-dom'

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form is valid:', { email, password });
      // Submit to backend here
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#000000] to-[#650808] px-4">
      <div className="w-full max-w-md bg-transparent p-6 rounded-lg shadow-md text-white">
        <Link to="/">
         <img src="/images/Menu.svg" alt="" />
        </Link>
       
        <h2 className="text-3xl font-semibold text-center mb-30">Login</h2>

        {/* Social buttons */}
        <div className="flex justify-center gap-4 mb-4">
          <button className="flex items-center gap-2 bg-white text-black py-2 px-4 rounded-full w-full justify-center text-sm">
            <FaGoogle /> Google
          </button>
          <button className="flex items-center gap-2 bg-[#082eb4] text-white py-2 px-4 rounded-full w-full justify-center text-sm">
            <FaFacebookF /> Facebook
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-500"></div>
          <span className="mx-3 text-gray-400 text-sm">or</span>
          <div className="flex-grow h-px bg-gray-500"></div>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="mb-4 relative">
            <FaEnvelope className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full py-3 pl-10 pr-4 bg-transparent border-b text-sm focus:outline-none text-white placeholder-gray-400 ${
                errors.email ? 'border-red-500' : 'border-gray-600'
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div className="mb-2 relative">
            <FaLock className="absolute top-3.5 left-3 text-gray-400" />
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full py-3 pl-10 pr-10 bg-transparent border-b text-sm focus:outline-none text-white placeholder-gray-400 ${
                errors.password ? 'border-red-500' : 'border-gray-600'
              }`}
            />
            <span
              className="absolute right-3 top-3.5 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoEyeOff /> : <IoEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-base text-[#ee7262] hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#082eb4] to-[#640707] rounded-full text-white font-semibold text-sm hover:opacity-90"
          >
            Login
          </button>
        </form>

        {/* Signup */}
        <p className="text-center mt-4 text-base text-gray-400">
          Do you already have an account?{' '}
          <a href="#" className="text-[#ee7262] hover:underline">
            Sign up now
          </a>
        </p>
      </div>
    </div>
  );
}
