import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'

function App() {


  return (
    <div className="App">
       <Navbar></Navbar>
       <HomePage></HomePage>
    </div>
  )
}

export default App
