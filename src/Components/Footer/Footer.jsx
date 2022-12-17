import React from 'react'
import './Footer.css'

import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineTwitter, AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <span>dev.marcioreis@gmail.com</span>
        <div className="footer-icons">
          <AiOutlineFacebook />
          <AiOutlineInstagram />
          <AiOutlineTwitter />
          <AiFillGithub />
          <AiFillLinkedin />
        </div>
      </div>
    </div>
  )
}

export default Footer