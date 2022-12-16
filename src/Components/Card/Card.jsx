import React from 'react'
import './Card.css'

const Card = ({emoji, heading, detail}) => {
  return (
    <div className="card">
        <img src={emoji} alt="Emoji" />
        <span>{heading}</span>
        <span>{detail}</span>
    </div>
  )
}

export default Card