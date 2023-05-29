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
                    <a href="https://drive.google.com/uc?id=1JzWIbxmlHDpX1GjwgXOFHbiIhixuemQk&export=download" target="_blank" rel="noreferrer" className="nav-link resume" id="resume-link-1" download>
                        <button id="resume-button-1">Resume</button>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar