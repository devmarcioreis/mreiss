import React from 'react'
import './About.css'

import Glasses from '../../img/glasses.png'
import Heart from '../../img/heart.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'

const About = () => {
  return (
    <div className="about">
        <div className="awesome">
            <span>Sobre mim</span>
            <p>Estudo Análise e Desenvolvimento de Sistemas, e também estou estudando e me aperfeiçoando em React e Angular.</p>
            <p>No momento trabalho como desenvolvedor Front-end freelancer.</p>
            <p>Aprendendo novas tecnologias, me preparando para o futuro na área que gosto, e sempre correspondendo com as expectativas e necessidades de meus clientes e amigos.</p>
            <a href='https://github.com/devmarcioreis' target="_blank" rel="noreferrer" className="button about-button"><i class="uil uil-github"></i> Github</a>
        </div>
        <div className="cards">
            <div className='card1'>
                <Card
                    emoji = {Heart}
                    heading = {'JavaScript'}
                    detail = {"Hoje praticamente é a linguagem que mais utilizo."}
                />
            </div>
            <div className="card2">
            <Card
                    emoji = {Glasses}
                    heading = {'React'}
                    detail = {"Estou em meus primeiros passos em React."}
                />
            </div>
            <div className="card3">
            <Card
                    emoji = {Humble}
                    heading = {'Angular'}
                    detail = {"Cada vez mais me esforço para aprender sobre Angular."}
                />
            </div>
        </div>
    </div>
  )
}

export default About