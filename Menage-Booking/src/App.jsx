import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignIn from '../src/Authentication/SignIn'
import Home from '../src/Client/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
     
      <Home/>
   
  );
}

export default App
