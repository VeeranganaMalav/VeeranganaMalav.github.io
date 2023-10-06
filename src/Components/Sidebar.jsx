import React, { useEffect, useState } from 'react';
import '../css/Sidebar.css';
import { BiMenu } from 'react-icons/bi'

const Sidebar = ({ showSidebar, setShowSidebar, toggleMenu }) => {
    const [isOpen, setIsOpen] = useState(showSidebar);

    const toggleSidebar = () => {
        toggleMenu()
    }

    const handleClick = () => {
        window.open(
            "https://drive.google.com/file/d/1pXXENn_m-X9xgEXNGgnFWM7DI7zPTi2N/view?usp=sharing",
            "_blank",
            "noopener",
            "noreferer"
        );
    };


    // useEffect(() => {
    //     // Function to handle scroll event
    //     const handleScroll = () => {
    //         if (window.scrollY > 50) {
    //             // If the user scrolls down by 50px, close the sidebar
    //             setIsOpen(false);
    //         } else {
    //             // If the user scrolls back up to the top, open the sidebar (if it was previously open)
    //             setIsOpen(showSidebar);
    //         }
    //     };

    //     // Add scroll event listener when the component mounts
    //     window.addEventListener('scroll', handleScroll);

    //     // Remove the scroll event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [showSidebar]);


    return (
        <>
            <div className={`sidebar ${isOpen ? 'show' : ''}`}>
                <div className="burger-icon">
                    <p onClick={toggleSidebar}>Menu</p>
                </div>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li>
                        <a href="./Veerangana-Malav-Resume.pdf" download>
                            <button id="resume-button-1" onClick={handleClick}>Resume</button>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
