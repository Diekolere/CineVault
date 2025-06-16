import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';

export default function VerifySign() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "example@email.com";
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const [verified, setVerified] = useState(false);
  const [resendMessage, setResendMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const inputsRef = useRef([]);

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setError('');

    if (value && index < 3) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = () => {
    const enteredOtp = otp.join('');
    const correctOtp = '5256';

    if (enteredOtp === correctOtp) {
      setVerified(true);
    } else {
      setError('Invalid OTP. Please try again.');
    }
  };

  const handleResendOTP = () => {
    setResendMessage(`A new OTP has been sent to ${email}`);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 10000);
  };

  useEffect(() => {
    if (verified) {
      const timer = setTimeout(() => {
        navigate('/home');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [verified, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#000000] via-[#000000] to-[#650808] px-4">
      {!verified ? (
        <div className="p-8 rounded-lg shadow-lg w-full max-w-sm relative">
          <Link to="/signup">
            <img src="/images/Menu.svg" alt="Menu" />
          </Link>

          <h2 className="text-lg font-semibold text-center text-white  mb-8">OTP Verification</h2>
          <p className="text-center text-sm text-gray-700 mb-1">
            A one-time password has been sent to <span className="text-blue-500">{email}</span>
          </p>
          <p className="text-center text-gray-500 text-sm mb-6">
            Enter the 4 digit code we sent you via email to continue.
          </p>

          {showMessage && (
            <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-2 rounded text-sm text-center mb-4">
              {resendMessage}
            </div>
          )}

          <div className="flex justify-between mb-4">
            {otp.map((digit, index) => (
              <input
                key={index}
                type="tel"
                maxLength="1"
                inputMode="numeric"
                className="w-12 h-12 text-center text-xl text-white border border-gray-300 rounded-md focus:outline-blue-500"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                ref={(el) => (inputsRef.current[index] = el)}
              />
            ))}
          </div>

          {error && <p className="text-red-500 text-sm text-center mb-2">{error}</p>}

          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-gradient-to-r from-[#082eb4] to-[#640707] rounded-full text-white font-semibold text-sm hover:opacity-90"
          >
            Verify →
          </button>

          <div className="text-center text-sm mt-4">
            <p className="text-gray-600">
              Not your email? / Didn’t receive the code?{" "}
              <button onClick={handleResendOTP} className="text-blue-600 hover:underline font-medium">
                Try Again
              </button>
            </p>
          </div>
        </div>
      ) : (
        <div className="p-8 rounded-lg shadow-red-950 border-2 border-amber-50 w-full max-w-sm text-center">
          <h2 className="text-3xl font-semibold text-white mb-8">🎉 Congratulations</h2>
          <p className="text-base text-white mb-6">Welcome 👋 to Home Page</p>
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-green-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h3 className="text-md font-medium mb-2 text-white">Thank you</h3>
          <p className="text-base text-white">
            Your OTP Verification has been completed successfully!
          </p>
        </div>
      )}
    </div>
  );
}
