import React from 'react'
import About from './About'
import "../css/Home.css"
import home_image2 from "../images/home_image2.jpg"
import background_image from "../images/background_image.jpg"

const Home = () => {
  return (
    <div id="home">
        <div className="home-intro">
            {/* <img src={background_image} alt="img"/> */}
            <div className="overlay-text">
                {/* <p>Turning innovative ideas into user-friendly digital experiences</p> */}
                <p>Crafting Seamless User Experiences, Inside and Out</p>
                {/* <p>Turning innovative ideas </p>
                <p>into user-friendly </p>
                <p>digital experiences </p> */}
            </div>
            <img src={home_image2} alt="home_image1" />
        </div>
        <About />
    </div>
  )
}

export default Home

// #3a60a1
// #da2b2b

// https://cdni.iconscout.com/illustration/premium/thumb/woman-programmer-working-on-a-new-project-6353864-5264781.png?f=webp