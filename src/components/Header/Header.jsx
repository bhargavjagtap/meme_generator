import React from 'react'
import './header.css'
import meme from '../../images/troll-face.png'

const Header = () => {
    return (
        <header>
            <img className="logo" src={meme} alt="memeimg" />
            <h2 className="title">Meme Generator</h2>
            <h4 className="project  ">React Course - Project 3</h4>
        </header>
    )
}

export default Header
