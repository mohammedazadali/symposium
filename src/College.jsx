import React from 'react'
import './App.css'
import logo from '../src/Components/Assest/logo.png'

function College() {
  return (
    <div className="college">
        <img className="college-img"src="https://jit.net.in/wp-content/uploads/2023/01/JIT-LOGO-PNG.png" alt="" />
        <img src={logo} className='logo-img' />
    </div>
  )
}

export default College