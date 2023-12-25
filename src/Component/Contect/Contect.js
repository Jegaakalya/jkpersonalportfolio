import React from 'react'
import { useContext } from 'react'
import { themeContext } from '../../Context'
import "./Contect.css"
// import emailjs from '@emailjs/browser';

const Contect = () => {

    // const sendEmail = (e) => {
    //     e.preventDefault();
    
    //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    //       .then((result) => {
    //           console.log(result.text);
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode;

  return (
     <div className="contact-from" id='Contact'>
        <div className="c-left">
            <div className="awesome">
                <span  style={{background : darkMode ? 'black': "",
            color: darkMode ? 'white' : ""}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur c-blur1" style={{background : "#ABF1FF94"}}>
                </div>

            </div>
        </div>
         <div className="c-right">
             <form action="" className='Form'>
                <input type="text" name = "Usernamr"className ="user" placeholder='Name'/>
                <input type="email" name="user-email" className='user' placeholder='Email' id="" />
                <textarea name="message" className='message' placeholder='Message'  ></textarea>
                <input type="submit" value="send" className='button' />
                <div className='blur c-blur2' style={{background : "var(--purple)"}}>
                </div>
            </form>
         </div>
            
     </div>
  )
}

export default Contect
