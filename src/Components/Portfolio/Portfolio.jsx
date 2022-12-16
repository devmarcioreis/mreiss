import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'

import Music from '../../img/music.jpg'
import Restautant from '../../img/restaurant.jpg'
import Space from '../../img/space.png'
import Sports from '../../img/sports.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <h1>Portfólio</h1>
        <span>últimos Projetos</span>
        <Swiper>
            <SwiperSlide>
                <img src={Music} alt="Music" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio