import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import './Portfolio.css'
import 'swiper/css'

import Rest from '../../img/rest.jpg'
import Space from '../../img/space.png'
import Sports from '../../img/sports.jpg'
import Music from '../../img/music.jpg'
import Port from '../../img/port.jpg'
import Ava from '../../img/ava.jpg'
import Modern from '../../img/modern.jpg'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <h1>Portfólio</h1>
        <span>últimos Projetos</span>
        <Swiper spaceBetween={100} slidesPerView={3} grabCursor={true} className="portfolio-slider">
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/restaurante/" target="_blank" rel='noreferrer'><img src={Rest} alt="Restaurant" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/space-theme/" target="_blank" rel='noreferrer'><img src={Space} alt="Space" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/LE-ALLSPORTS/" target="_blank" rel='noreferrer'><img src={Sports} alt="Sports" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/music-react/" target="_blank" rel='noreferrer'><img src={Music} alt="Restaurant" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/personal-portfolio-react/" target="_blank" rel='noreferrer'><img src={Port} alt="Restaurant" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/avatar-card/" target="_blank" rel='noreferrer'><img src={Ava} alt="Restaurant" /></a>
            </SwiperSlide>
            <SwiperSlide>
                <a href="https://devmarcioreis.github.io/modern-react/" target="_blank" rel='noreferrer'><img src={Modern} alt="Restaurant" /></a>
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio