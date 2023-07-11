import React from 'react'
import Flip from 'react-reveal/Flip'
import Fade from 'react-reveal/Fade'
import "../css/Skills.css"

const Skills = () => {
  return (

    <div id="skills">
      <h1>Skills</h1>
      <div className="skills-part1">
        <Flip top duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg" alt="html5" className="skills-card-img" />
            <p className="skills-card-name">HTML</p>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/css3.svg" alt="css3" className="skills-card-img" />
            <p className="skills-card-name">CSS</p>
          </div>
        </Flip>
        <Flip top duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg" alt="javascript" className="skills-card-img" />
            <p className="skills-card-name">JavaScript</p>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg" alt="reactjs" className="skills-card-img" />
            <p className="skills-card-name">ReactJS</p>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/redux.svg" alt="redux" className="skills-card-img" />
            <p className="skills-card-name">Redux</p>
          </div>
        </Flip>
        <Flip top duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg" alt="nodejs" className="skills-card-img" />
            <p className="skills-card-name">NodeJS</p>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div className="skills-card">
            <img src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.png" alt="express" className="skills-card-img" />
            <p className="skills-card-name">Express</p>
          </div>
        </Flip>
        <Flip top duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/git.svg" alt="git" className="skills-card-img" />
            <p className="skills-card-name">Git</p>
          </div>
        </Flip>
        <Flip top duration={2000}>
          <div className="skills-card">
            <img src="https://chiranjeev-thapliyal.vercel.app/svg/mysql-logo.svg" alt="mysql" className="skills-card-img" />
            <p className="skills-card-name">MySQL</p>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div className="skills-card">
            <img src="https://cdn.worldvectorlogo.com/logos/postman.svg" alt="postman" className="skills-card-img" />
            <p className="skills-card-name">Postman</p>
          </div>
        </Flip>
        <Flip top duration={2000}>
          <div className="skills-card">
            <img src="https://avatars.githubusercontent.com/u/54212428?s=280&v=4" alt="chakra-ui" className="skills-card-img" style={{ borderRadius: "50%" }} />
            <p className="skills-card-name">Chakra UI</p>
          </div>
        </Flip>
        <Flip bottom duration={2000}>
          <div className="skills-card">
            <img src="https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/181_Java-512.png" alt="java" className="skills-card-img" />
            <p className="skills-card-name">Core Java</p>
          </div>
        </Flip>
      </div>
      <div className="skills-part2">
        <Fade top duration={2000}>
          <p>Here's what I do</p>
        </Fade>
        <Fade cascade duration={4000}>
        <ul>
          <li>Develop interactive frontend for web application using ReactJS and Chakra UI</li>
          <li>Creating backend applications using NodeJS and Express framework</li>
          <li>Build responsive websites using HMTL and CSS</li>
        </ul>
        </Fade>
      </div>
    </div>
  )
}

export default Skills