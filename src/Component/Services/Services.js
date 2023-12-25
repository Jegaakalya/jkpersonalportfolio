import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../card/Card'
import resume from "../../img/Offer Letter_Jegathish E (Software Developer).pdf"
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Services = () => {
  const trasition = {duration :2 , type :"spring"}
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Services'>

      <div className="awesome">
        <span  style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}}>My Awesome</span>
        <span>services</span>
        <span   style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat     
          <br/>
          incidunt laborum dolorem enim quas sunt repudiandae.
        </span>
         <a href={resume} download>
         <button className='button s-button'>Download CV</button>
         </a>
        
        <div className='blur s-blur1' style={{background:"#ABF1FF94"}}></div>

      </div>
      <div className="cards">
            <motion.div
             initial ={{left : "30rem"}}
             whileInView = {{left : "20rem"}}
             transition={trasition}
            style={{left:'20rem'}}>
              <Card
              emoji={HeartEmoji}
              heading = {'Desing'}
              details= {"Figma, Sketch, Photoshop, Adobe, Adodexd"}
              />
            </motion.div>
            <motion.div
             initial ={{left : "-10rem"}}
             whileInView = {{left : "-4rem"}}
             transition={trasition}
            style={{top:"11rem", left:"-4rem"}}>
            <Card
              emoji={Glasses}
              heading = {'Developer'}
              details= {"Html, Css, JavaScript, React, Python , restFramwork"}
              />
            </motion.div>
            <motion.div 
              initial ={{left : "20rem"}}
              whileInView = {{left : "15rem"}}
              transition={trasition}
            style={{top:"20rem", left:"15rem"}}>
            <Card
              emoji={Humble}
              heading = {'UI/UX'}
              details= {"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam saepe facilis, ipsa, repellendus corporis."}
              />
              
            </motion.div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
      </div>
      
    </div>
  )
}

export default Services
