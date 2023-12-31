import React from 'react'
import TrollFace from '../images/troll-face.png'


const Header = () => {
  return (
    <header className="header">
            <img 
                src={TrollFace}
                alt='joke face'
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React Course - Project 3</h4>
    </header>
  )
}

export default Header