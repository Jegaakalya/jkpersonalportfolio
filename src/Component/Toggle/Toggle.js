import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import "./Toggle.css"
const Toggle = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode

  const handleCilck = ()=>{
    theme.dispatch({type : "toggle"})
  }
  return (
    <div className='toggle' onClick={handleCilck}>
        <i class="fa-regular fa-moon"></i>
        <i class="fa-solid fa-sun"></i>
         <div className="t-button"
         
         style={darkMode? {left:'2px'} : {right : "2px"}}>
              
         </div>

    </div>
  )
}

export default Toggle
