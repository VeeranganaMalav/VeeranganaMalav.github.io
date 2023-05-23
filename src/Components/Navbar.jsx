import React from 'react'
import "../css/Navbar.css"

const Navbar = () => {
    return (
        <div id="nav-menu" className="nav">
            <p>
                <a href="/" className="logo">Veerangana</a>
            </p>
            <ul className="menu">
                <li>
                    <a href="#home" className="nav-link home">Home</a>
                </li>
                <li>
                    <a href="#about" className="nav-link about">About</a>
                </li>
                <li>
                    <a href="#skills" className="nav-link skills">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="nav-link projects">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="nav-link contact">Contact</a>
                </li>
                <li>
                    <a href="#resume" className="nav-link resume">Resume</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar