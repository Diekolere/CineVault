import React from "react";

export default function SignUp() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0a2a] px-4">
      <div className="w-full max-w-md bg-[#0e0a2a] p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-white text-center mb-6">Sign up</h2>

        <div className="flex space-x-4 mb-6">
          <button className="flex-1 flex items-center justify-center space-x-2 bg-[#1c1b3a] text-white py-2 rounded-lg">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 bg-[#1c1b3a] text-white py-2 rounded-lg">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
            <span>Facebook</span>
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-gray-400 px-3">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        <form className="space-y-4">
          <div className="relative">
            <input type="text" placeholder="Full Name" className="w-full pl-10 pr-4 py-2 rounded bg-[#1c1b3a] text-white placeholder-gray-400" />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <i className="fas fa-user"></i>
            </span>
          </div>

          <div className="relative">
            <input type="email" placeholder="Email Address" className="w-full pl-10 pr-4 py-2 rounded bg-[#1c1b3a] text-white placeholder-gray-400" />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <i className="fas fa-envelope"></i>
            </span>
          </div>

          <div className="relative">
            <input type="password" placeholder="Password" className="w-full pl-10 pr-10 py-2 rounded bg-[#1c1b3a] text-white placeholder-gray-400" />
            <span className="absolute left-3 top-2.5 text-gray-400">
              <i className="fas fa-lock"></i>
            </span>
            <span className="absolute right-3 top-2.5 text-gray-400">
              <i className="fas fa-eye"></i>
            </span>
          </div>

          <button type="submit" className="w-full py-2 bg-[#7c5fff] text-white rounded-lg hover:bg-[#6951d6] transition-colors">
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Do you already have an account?{' '}
          <a href="#" className="text-[#7c5fff] hover:underline">Login now</a>
        </p>
      </div>
    </div>
  );
}
