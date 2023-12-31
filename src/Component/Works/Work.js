import React from 'react'
import "./Works.css"
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Fackbook from "../../img/Facebook.png"
import { useContext } from 'react'
import { themeContext } from '../../Context'
import { motion } from 'framer-motion'

const Work = () => {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode;
    const trasition = {duration :3.5 , type :"spring"}
  return (
    <div className='works'>
          <div className="awesome">
                <span  style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}}>Works for All these</span>
                <span>Brand & clients</span>
                <span  style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repellat     
                <br/>
                incidunt laborum dolorem enim quas sunt repudiandae
                <br />
                incidunt laborum dolorem enim quas sunt repudiandae quas sunt repudiandae
                <br />
                incidunt laborum dolorem enim quas sunt repudiandae
                </span>
                 
                <button className='button s-button'>Hier me</button>
                 
                
                <div className='blur s-blur2' style={{background:"#ABF1FF94"}}></div>

           </div>
           {/* right side */}
           <div className="w-right">
            <motion.div
            initial={{rotate:45}}
            whileInView ={{rotate:0}}
            transition = {trasition}
            viewport ={{margin :"-40px"}}
            className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />

                </div>
                <div className="w-secCircle">
                <img src={Fiverr} alt="" />

                </div>
                <div className="w-secCircle">
                <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                <img src={Shopify} alt="" />
                </div>
                  <div className="w-secCircle">
                <img src={Fackbook} alt="" />
                </div>
            </motion.div>
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
           </div>

      
    </div>
  )
}

export default Work
