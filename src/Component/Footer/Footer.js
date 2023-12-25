import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"



const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" srcset="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>jegathish109@gmail.com</span>
            <div className="f-icons">
            <i class="fa-brands fa-square-instagram" style={{color:"#ffff", fontSize:"2rem"}} ></i>
            <i class="fa-brands fa-square-facebook"  style={{color:"#ffff" , fontSize:"2rem"}}></i>
            <i class="fa-brands fa-github" style={{color:"#ffff" , fontSize:"2rem"}}></i>
            </div>
        </div>
    </div>
  )
}

export default Footer
