import { useState } from 'react'
import { BrowserRouter, Routes, Navigate, Router, Route } from 'react-router-dom'
import SplashScreen from './Pages/SplashScreen'
import LoginPage from './authentication/LoginPage'
import SignUpPage from './authentication/SignUpPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<SplashScreen />}/>
      <Route path='/login' element={<LoginPage />}/>
      <Route path='/signup' element={<SignUpPage />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
