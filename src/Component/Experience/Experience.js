import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import "./Experience.css"

const Experience = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
 
  return (
    <div>
      <div className="experience" id='Experience'>
        <div className="achievement">
            <div className="cricle"  style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : "",
            border:"2px solid white"}}>
                8+
            </div>
            <span>years</span>
            <span>Experience</span>
        </div>
        <div className="achievement">
            <div className="cricle"  style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : "",
            border:"2px solid white"}}>
                20+
            </div>
            <span>Completed</span>
            <span>Projects</span>
        </div>
        <div className="achievement">
            <div className="cricle"   style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : "",
            border:"2px solid white"}}>
                5+
            </div>
            <span>Company</span> 
            <span>Work</span> 
        </div>
      </div>
    </div>
  )
}

export default Experience
