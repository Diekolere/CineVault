import { useState } from 'react'
import { BrowserRouter, Routes, Navigate, Router, Route } from 'react-router-dom'
import SplashScreen from './Pages/SplashScreen'
import LoginPage from './authentication/LoginPage'
import SignUpPage from './authentication/SignUpPage'
import VerifyOTP from './authentication/VerifyOTP'
import ForgotPassword from './authentication/ForgotPassword'
import Home from './Pages/Home'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SplashScreen />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignUpPage />}/>
      <Route path='/verifyotp' element={<VerifyOTP />}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/forgot' element={<ForgotPassword/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
