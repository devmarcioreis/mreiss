import React from 'react'
import './Intro.css'

import { AiOutlineHtml5 } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'

const Intro = () => {
  return (
    <div className='intro'>
      <div className="intro-left">
        <div className="intro-name">
          <span>Oi, eu sou</span>
          <span>Márcio Reis</span>
          <span>Desenvolvedor Front-end</span>
          <p>Tenho paixão por tecnologia, e ela me faz ter vontade de trabalhar e estudar cada vez mais para solucionar os mais variados tipos de problemas na área de desenvolvimento.</p>
          <p>Seguir este caminho tem sido desafiador e me faz querer sempre o melhor para meus clientes. Dar uma solução inovadora para seus problemas e suas necessidades é o que me motiva, além de aprender, claro!</p>
          <p>Estou sempre estudando e aprendendo, e no momento estudo e trabalho com: HTML, CSS, JavaScript e React.</p>
          <i className='intro-icons'>
            <AiOutlineHtml5 />
            <DiCss3 />
            <IoLogoJavascript />
            <FaReact />
          </i>
        </div>
        <button className="button intro-button">Fale comigo</button>
      </div>
      <div className="intro-right">
        marcio
      </div>
    </div>
  )
}

export default Intro