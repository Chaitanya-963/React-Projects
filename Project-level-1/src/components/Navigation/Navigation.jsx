import React from 'react'
import img from "../../images/logo.png"
import "../Navigation/Navigation.css"

const Navigation = () => {
  return (
    <nav className='container'>
        <img src={img} alt="Logo" />
    </nav>
  )
}

export default Navigation