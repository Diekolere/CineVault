import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';

export default function SignUp() {
  const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  password: ''
});


  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};
    const { firstName, lastName, email, password } = formData;

    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      newErrors.email = 'Invalid email format';
    }

    if (!password) {
      newErrors.password = 'Password is required';
    } else {
      const hasLetter = /[a-zA-Z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSymbol = /[^a-zA-Z0-9]/.test(password);
      const validCount = [hasLetter, hasNumber, hasSymbol].filter(Boolean).length;

      if (validCount < 2) {
        newErrors.password = 'Password must include at least two of: letters, numbers, or symbols';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      localStorage.setItem('userEmail', formData.email);
     navigate('/verifyotp', { state: { email: formData.email } });

    }
  };

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#000000] to-[#650808] px-4">
      <div className="w-full max-w-md p-8 rounded-lg shadow-md">
        <Link to="/">
          <img src="/images/Menu.svg" alt="Menu" />
        </Link>
        <h2 className="text-2xl font-semibold text-white text-center mb-8">Sign up</h2>

        <div className="flex space-x-4 mb-6">
          <button className="flex-1 flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-300 hover:bg-blue-950 text-white py-2 rounded-lg">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            <span>Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-300 hover:bg-blue-950 text-white py-2 rounded-lg">
            <img src="https://www.svgrepo.com/show/475647/facebook-color.svg" alt="Facebook" className="w-5 h-5" />
            <span>Facebook</span>
          </button>
        </div>

        <div className="flex items-center mb-6">
          <div className="flex-grow h-px bg-gray-600"></div>
          <span className="text-gray-400 px-3">or</span>
          <div className="flex-grow h-px bg-gray-600"></div>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 shadow-lg rounded-2xl border border-gray-300 bg-transparent text-white placeholder-gray-400"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              {errors.firstName && <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>}
            </div>

            <div className="relative">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 shadow-lg rounded-2xl border border-gray-300 bg-transparent text-white placeholder-gray-400"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              {errors.lastName && <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>}
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-2 shadow-lg rounded-2xl border border-gray-300 bg-transparent text-white placeholder-gray-400"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                @
              </span>
              {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full pl-10 pr-10 py-2 rounded-2xl shadow-lg border border-gray-300 bg-transparent text-white placeholder-gray-400"
            />
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaLock />
            </span>
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 focus:outline-none"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-400 text-sm mt-1">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#082eb4] to-[#640707] rounded-full text-white font-semibold text-sm hover:opacity-90"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-4">
          Do you already have an account?{' '}
          <Link to="/login" className="text-gray-300 hover:underline">Login now</Link>
        </p>
      </div>
    </div>
  );
}
