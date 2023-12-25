import React from 'react'
import "./Testmonial.css"
import {Swiper, SwiperSlide} from 'swiper/react'
import "swiper/css"
import profilePic1 from "../../img/profile1.jpg"
import profilePic2 from "../../img/profile2.jpg"
import profilePic3 from "../../img/profile3.jpg"
import profilePic4 from "../../img/profile4.jpg"
import profilePic5 from "../../img/profile5.jpg"
import profilePic6 from "../../img/profile6.jpg"
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination';


const Testmonial = () => {
    const clients = [
        {
            img: profilePic1,
            review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla fuga, nostrum commodi, nam ullam sunt animi tempora distinctio veniam tempore impedit quod, ipsam cum debitis iusto vel voluptatum quia!."

        },
        {
            img: profilePic2,
            review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla fuga, nostrum commodi, nam ullam sunt animi tempora distinctio veniam tempore impedit quod, ipsam cum debitis iusto vel voluptatum quia!."
            
        },
        {
            img: profilePic3,
            review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla fuga, nostrum commodi, nam ullam sunt animi tempora distinctio veniam tempore impedit quod, ipsam cum debitis iusto vel voluptatum quia!."
            
        },
        {
            img: profilePic4,
            review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla fuga, nostrum commodi, nam ullam sunt animi tempora distinctio veniam tempore impedit quod, ipsam cum debitis iusto vel voluptatum quia!."
            
        }, {
            img: profilePic5,
            review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla fuga, nostrum commodi, nam ullam sunt animi tempora distinctio veniam tempore impedit quod, ipsam cum debitis iusto vel voluptatum quia!."
            
        }, {
            img: profilePic6,
            review : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas nulla fuga, nostrum commodi, nam ullam sunt animi tempora distinctio veniam tempore impedit quod, ipsam cum debitis iusto vel voluptatum quia!."
            
        }
    ]
  return (
    <div className='t-wrapper' id='Testimonials'>
        <div className="t-heading">
            <span>Clints always get</span>
            <span>
                Exceptional Work
            </span>
            <span>
                from me...
            </span>
            <div className="blur t-blur1" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur2" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* slider */}
        <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination ={{clickable :true}}>
             {clients.map((client , index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testmonial">
                        <img src={client.img} alt="" />
                        <span>{client.review}</span>    
                        </div>
                        
                    </SwiperSlide>
                )
             })}

        </Swiper>

      
    </div>
  )
}

export default Testmonial

