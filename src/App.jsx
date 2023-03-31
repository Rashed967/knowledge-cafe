import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import Blog from './components/Blog/Blog'

function App() {


  return (
    <div className="App">
       <Navbar></Navbar>
       <HomePage></HomePage>
       <Blog></Blog>
    </div>
  )
}

export default App
