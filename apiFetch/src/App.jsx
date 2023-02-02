import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import SetAvatar from './pages/avatars/setAvatar'
import Example from './pages/avatars/Example'
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
  //   <BrowserRouter>
  //  <Login/>
  //  <Routes>
  //   <Route path="/" element={<SetAvatar/>}  />
    
    
  //   </Routes>
  //   </BrowserRouter>
  <div>
    <SetAvatar/>
    {/* <Example/> */}
    
  </div>
   
  )
}

export default App
