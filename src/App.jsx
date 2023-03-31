import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import Blog from './components/Blog/Blog'
import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <div className="App">
       <Navbar></Navbar>
       <HomePage></HomePage>
       <Blog></Blog>
       <ToastContainer />
    </div>
  )
}

export default App
