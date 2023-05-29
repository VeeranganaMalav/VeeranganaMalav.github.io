import React from 'react'
import passport_photo from "../images/passport_photo.jpg"
import "../css/About.css"

const About = () => {
    return (
        <div id="about" className="about section">
            <h1>About</h1>
            <div className="intro-section">
                <div className="illustration">
                    <img src={passport_photo} alt="illustartion" className="home-img" />
                </div>
                <div id="user-detail-intro" className="about-me">
                    <h1 style={{ color: "#3c547d" }}>Hello 👋🏻</h1>
                    <p>I'm <span className="name-text" id="user-detail-name">Veerangana Malav</span>, an Aspiring Full Stack Web Developer proficient in React, HTML and CSS, an Enthusiastic Learner. I have always found it fascinating to turn my problem-solving skills and creative ideas into real-world applications.</p>
                    <div className="social-media">
                        <a href="https://github.com/VeeranganaMalav" className="social-icons">
                            <i class="fa-brands fa-github" style={{ color: "#3a60a1" }}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/veeranganamalav14/" className="social-icons">
                            <i class="fa-brands fa-linkedin-in" style={{ color: "#3a60a1" }}></i>
                        </a>
                        <a href="mailto:veeranganamalav01@gmail.com" className="social-icons">
                            <i class="fa-solid fa-envelope" style={{ color: "#3a60a1" }}></i>
                        </a>
                    </div>
                    <div className="button">
                        <a href="https://drive.google.com/uc?id=1JzWIbxmlHDpX1GjwgXOFHbiIhixuemQk" id="resume-link-2" target="_blank" rel="noreferrer" download>
                            <button className="resume-button" id="resume-button-2">Resume</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About