import React, { useState } from 'react'
import "../css/Navbar.css"
import { BiMenu } from 'react-icons/bi'
import Sidebar from './Sidebar'

const Navbar = () => {

    const [showSidebar, setShowSidebar] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setShowSidebar(!showSidebar);
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1pXXENn_m-X9xgEXNGgnFWM7DI7zPTi2N/view?usp=sharing",
            "_blank",
            "noopener",
            "noreferer"
        );
    };

    return (
        <div id="nav-menu" className="nav">
            <p>
                <a href="/" className="logo">Veerangana</a>
            </p>

            <div id="burger-icon" onClick={toggleMenu}>
                <BiMenu />
            </div>

            {/* Render the sidebar component */}
            {showSidebar && <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} toggleMenu={toggleMenu} />}

            <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
                {/* <ul className="menu"> */}
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
                    <a href="./Veerangana-Malav-Resume.pdf" className="nav-link resume" id="resume-link-1" download>
                        <button id="resume-button-1" onClick={handleClick}>Resume</button>
                    </a>
                    {/* <a href="https://drive.google.com/uc?id=1JzWIbxmlHDpX1GjwgXOFHbiIhixuemQk&export=download" target="_blank" rel="noreferrer" className="nav-link resume" id="resume-link-1" download>
                        <button id="resume-button-1">Resume</button>
                    </a> */}
                </li>
            </ul>
        </div>
    )
}

export default Navbar