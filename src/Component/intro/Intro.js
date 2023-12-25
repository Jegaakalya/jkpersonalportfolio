import React,{useContext} from 'react'
import "./intro.css"
import Github from '../../img/github.png'
import LinkedIn from '../../img/linkedin.png'
import Instagram from '../../img/instagram.png'
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup  from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const Intro = () => {
  const trasition = {duration :2 , type :"spring"}
   const theme = useContext(themeContext)
   const darkMode = theme.state.darkMode
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}} >Hy! I Am</span>
                <span  >Jegathis Waran</span>
                <span>Frontend Developer with high level of experience in web designing
                  and developer, producting the Quality work
                </span>
              
            </div>
            <button className='button i-button'> 
            <Link spy={true} to='Contact' smooth={true} >
            Hire me
            </Link></button>
            <div className="i-icons">
              <img src={Github} alt="" />
              <img src={LinkedIn} alt="" />
              <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1} alt=''/>
          <img src={Vector2} alt=''/>
          <img src={boy} alt=''/>
          <motion.img 
          initial ={{left : "-36%"}}
          whileInView = {{left : "-24%"}}
          transition={trasition}
          src={glassesimoji} alt=''/>
          <motion.div 
           initial ={{top : "-4%", left :"74%"}}
           whileInView = {{left :"68%"}}
           transition ={trasition}
          style={{top:'-4%', left:'68%'}}
          className = 'floating-div'>
            <FloatingDiv image={Crown} txt1='web' txt2='Developer'/>
          </motion.div>
          <motion.div 
             initial ={{top : "18rem", left :"-7%"}}
             whileInView = {{left :"0rem"}}
             transition ={trasition}
          style={{top:'18rem', left:'0rem'}}
         >
            <FloatingDiv image={thumbup} txt1='Best Desing' txt2='Award'/>
          </motion.div>
          <div className="blur" style={{background: "rgb(238 210 255)"}}></div>
          <div className="blur"
           style={{
            background: '#C1F5FF',
            top: '17rem',
            width: '21rem',
            height: '11rem',
            left:'-9rem'

           }}></div>
        </div>
      
    </div>
  )
}

export default Intro