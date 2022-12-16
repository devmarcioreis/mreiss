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
        </div>
        <div className="cards">
            <div>
                <Card
                    emoji = {Heart}
                    heading = {'JavaScript'}
                    detail = {"Hoje praticamente utilizo o JavaScript em todos os projetos que desenvolvo"}
                />
            </div>
        </div>
    </div>
  )
}

export default About