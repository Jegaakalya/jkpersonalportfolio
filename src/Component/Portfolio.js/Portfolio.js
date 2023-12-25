import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import "./Portfolio.css"
import Sidebar from "../../img/sidebar.png"
import Ecommerce from "../../img/ecommerce.png"
import HOC from "../../img/hoc.png"
import MusicApp from "../../img/musicapp.png"
import "swiper/css"

const Portfolio = () => {
  return (
    <div className="portfoloi" id='Portfolio'>
        <span>Recent Projects</span>
        <span>Protfolio</span>
  <Swiper
  spaceBetween={10}
  slidesPerView = {3}
  grabCursor = {true}
  className="portfoloi-slider">
     <SwiperSlide>
        <img src={Sidebar} alt="" />
     </SwiperSlide>
     <SwiperSlide>
        <img src={Ecommerce} alt="" />
     </SwiperSlide>
     <SwiperSlide>
        <img src={HOC} alt="" />
     </SwiperSlide>
     <SwiperSlide>
        <img src={MusicApp} alt="" />
     </SwiperSlide>
  </Swiper>
    </div>
  )
}

export default Portfolio
