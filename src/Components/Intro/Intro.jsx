import React from 'react'
import './Intro.css'

import { AiOutlineHtml5, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { DiCss3 } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import Profile from '../../img/profile.png'
import HTML from '../../img/html.png'
import Javascript from '../../img/javascript.png'
import ReactJS from '../../img/react.png'
import CSS from '../../img/css.png'


const Intro = () => {
  return (
    <div className='App intro'>
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
        <div className="intro-social-icons">
          <a href="https://github.com/devmarcioreis" target='_blank' rel="noreferrer" ><AiFillGithub /></a>
          <a href="https://www.linkedin.com/in/devmarcioreis/" target="_blank" rel="noreferrer" ><AiFillLinkedin /></a>
        </div>
      </div>
      <div className="intro-right">
        <img src={Profile} alt="Imagem perfil" />
        <img src={Javascript} alt="Imagem perfil" />
        <img src={ReactJS} alt="Imagem perfil" />
        <img src={HTML} alt="Imagem perfil" />
        <img src={CSS} alt="Imagem perfil" />
      </div>
    </div>
  )
}

export default Intro