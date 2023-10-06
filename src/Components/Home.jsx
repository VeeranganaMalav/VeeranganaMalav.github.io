import React from 'react'
import About from './About'
import "../css/Home.css"
import home_image2 from "../images/home_image2.jpg"
import girl_illustration from "../images/3d-girl.png"
import background_image from "../images/background_image.jpg"

const Home = () => {
  return (
    <div id="home">
      <div className="home-intro">
        {/* <img src={background_image} alt="img"/> */}
        <div className="overlay-text">
          <p>Crafting Seamless User Experiences, Inside and Out</p>
        </div>
        {/* <p>Turning innovative ideas into user-friendly digital experiences</p> */}
        {/* <p>Turning innovative ideas </p>
                <p>into user-friendly </p>
                <p>digital experiences </p> */}
        {/* <img src={home_image2} alt="home_image1" /> */}
        {/* <img src={girl_illustration} alt="home_image1" /> */}
        <img src={girl_illustration} alt="home_image1" className="box bounce" />


        {/* -------------------------- SQUARE ANIMATION ------------------------------- */}
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>


      </div>
      <About />

    </div>
  )
}

export default Home

// #3a60a1
// #da2b2b

// https://cdni.iconscout.com/illustration/premium/thumb/woman-programmer-working-on-a-new-project-6353864-5264781.png?f=webp