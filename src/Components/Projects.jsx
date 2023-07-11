import React from 'react'
import Zoom from 'react-reveal/Zoom'
import Slide from 'react-reveal/Slide';
import "../css/Projects.css"
import fashion_flare from "../images/fashion_flare.png"
import w_mart from "../images/w_mart.png"
import notes_app from "../images/notes_app.png"
import brainsania from "../images/brainsania.png"

// {------------------------------- SECOND IMPLEMENTATION --------------------------------------------}
const Projects = () => {
  return (
    <div id="projects">
      <h1>Projects</h1>
      <div className="project-grid">
        {/* ---------------------------- FIRST PROJECT -------------------------------- */}
        <Slide left duration={1500}>
          <div className="project-card">
            <div className="project-info">
              <div className="project-img">
                <img src={brainsania} alt="geekbrains-clone" style={{ height: "340px" }} />
              </div>
              <div className="project-features">
                <h2 className="project-title">Brainsania</h2>
                <p className="project-description">An Ed-Tech Website that allows users to choose from various courses in different fields of career.</p>
                <div className="project-live-links">
                  <a href="https://github.com/VeeranganaMalav/teal-flag-2494" target="_blank" rel="noreferrer" className="project-github-link">
                    <button className="github-repo-btn">
                      Github Repo
                    </button>
                  </a>
                  <a href="https://teal-flag-2494.netlify.app" target="_blank" rel="noreferrer" className="project-deployed-link">
                    <button className="deployed-site-btn">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-techs">
              <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack: &nbsp;&nbsp;&nbsp;</span>HTML | CSS | ReactJS | ChakraUI</p>
            </div>
          </div>
        </Slide>



        {/* ---------------------------- SECOND PROJECT -------------------------------- */}
        <Slide right duration={1500}>
          <div className="project-card">
            <div className="project-info">
              <div className="project-img">
                <img src={w_mart} alt="aeropostale-clone" style={{ height: "340px" }} />
              </div>
              <div className="project-features">
                <h2 className="project-title">W Mart</h2>
                <p className="project-description">An e-commerce website that sells various electronic appliances</p>
                <div className="project-live-links">
                  <a href="https://github.com/VeeranganaMalav/striped-substance-4459" target="_blank" rel="noreferrer" className="project-github-link">
                    <button className="github-repo-btn">
                      Github Repo
                    </button>
                  </a>
                  <a href="https://striped-substance-4459.netlify.app/pages/home.html" target="_blank" rel="noreferrer" className="project-deployed-link">
                    <button className="deployed-site-btn">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-techs">
              <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack: &nbsp;&nbsp;&nbsp;</span>HTML | CSS | JS</p>
            </div>
          </div>
        </Slide>



        {/* ---------------------------- THIRD PROJECT -------------------------------- */}
        <Slide left duration={1500}>
          <div className="project-card">
            <div className="project-info">
              <div className="project-img">
                <img src={fashion_flare} alt="reliance-clone" style={{ height: "340px" }} />
              </div>
              <div className="project-features">
                <h2 className="project-title">Fashion Flare</h2>
                <p className="project-description">An e-commerce website that sells fashion products for men and women.</p>
                <div className="project-live-links">
                  <a href="https://github.com/Sujalogy/humble-offer-6148" target="_blank" rel="noreferrer" className="project-github-link">
                    <button className="github-repo-btn">
                      Github Repo
                    </button>
                  </a>
                  <a href="https://fashion-flare.netlify.app/" target="_blank" rel="noreferrer" className="project-deployed-link">
                    <button className="deployed-site-btn">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-techs">
              <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack: &nbsp;&nbsp;&nbsp;</span>HTML | CSS | JS</p>
            </div>
          </div>
        </Slide>



        {/* ---------------------------- FOURTH PROJECT -------------------------------- */}
        <Slide right duration={1500}>
          <div className="project-card">
            <div className="project-info">
              <div className="project-img">
                <img src={notes_app} alt="notes-clone" style={{ height: "340px" }} />
              </div>
              <div className="project-features">
                <h2 className="project-title">Notes App</h2>
                <p className="project-description">Note taking application using JavaScript</p>
                <div className="project-live-links">
                  <a href="https://github.com/VeeranganaMalav/Notes-Application" target="_blank" rel="noreferrer" className="project-github-link">
                    <button className="github-repo-btn">
                      Github Repo
                    </button>
                  </a>
                  <a href="https://app-notes-1.netlify.app" target="_blank" rel="noreferrer" className="project-deployed-link">
                    <button className="deployed-site-btn">
                      Live Site
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-techs">
              <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack: &nbsp;&nbsp;&nbsp;</span>HTML | CSS | JS</p>
            </div>
          </div>
        </Slide>

      </div>
    </div>
  )
}



// {------------------------------- FIRST IMPLEMENTATION --------------------------------------------}
// const Projects = () => {
//   return (
//     <div id="projects">
//       <h1>Projects</h1>
//       <div className="project-grid">
//         {/* ---------------------------- FIRST PROJECT -------------------------------- */}
//         <Zoom duration={2500}>
//           <div className="project-card">
//             <img src={brainsania} alt="geekbrains-clone" style={{ height: "340px" }} />
//             <h2 className="project-title">Brainsania</h2>
//             <p className="project-description">An Ed-Tech Website that allows users to choose from various courses in different fields of career.</p>
//             <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack:  </span>HTML | CSS | ReactJS | ChakraUI</p>
//             <a href="https://github.com/VeeranganaMalav/teal-flag-2494" target="_blank" rel="noreferrer" className="project-github-link">
//               <button className="github-repo-btn">
//                 Github Repo
//               </button>
//             </a>
//             <a href="https://teal-flag-2494.netlify.app" target="_blank" rel="noreferrer" className="project-deployed-link">
//               <button className="deployed-site-btn">
//                 Live Site
//               </button>
//             </a>
//           </div>
//         </Zoom>

//         {/* ---------------------------- SECOND PROJECT -------------------------------- */}
//         <Zoom duration={2500}>
//           <div className="project-card">
//             <img src={w_mart} alt="reliance-clone" />
//             <h2 className="project-title">W Mart</h2>
//             <p className="project-description">An e-commerce website that sells various electronic appliances</p>
//             <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack:  </span>HTML | CSS | JS</p>
//             <a href="https://github.com/VeeranganaMalav/striped-substance-4459" target="_blank" rel="noreferrer" className="project-github-link">
//               <button className="github-repo-btn">
//                 Github Repo
//               </button>
//             </a>
//             <a href="https://striped-substance-4459.netlify.app/pages/home.html" target="_blank" rel="noreferrer" className="project-deployed-link">
//               <button className="deployed-site-btn">
//                 Live Site
//               </button>
//             </a>
//           </div>
//         </Zoom>


//         {/* ---------------------------- THIRD PROJECT -------------------------------- */}
//         <Zoom duration={2500}>
//           <div className="project-card">
//             <img src={fashion_flare} alt="aeropostale-clone" />
//             <h2 className="project-title">Fashion Flare</h2>
//             <p className="project-description">An e-commerce website that sells fashion products for men and women.</p>
//             <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack:  </span>HTML | CSS | JS</p>
//             <a href="https://github.com/Sujalogy/humble-offer-6148" target="_blank" rel="noreferrer" className="project-github-link">
//               <button className="github-repo-btn">
//                 Github Repo
//               </button>
//             </a>
//             <a href="https://fashion-flare.netlify.app/" target="_blank" rel="noreferrer" className="project-deployed-link">
//               <button className="deployed-site-btn">
//                 Live Site
//               </button>
//             </a>
//           </div>
//         </Zoom>


//         {/* ---------------------------- FOURTH PROJECT -------------------------------- */}
//         <Zoom duration={2500}>
//           <div className="project-card">
//             <img src={notes_app} alt="notes-app" />
//             <h2 className="project-title">Notes App</h2>
//             <p className="project-description">Note taking application using JavaScript</p>
//             <p className="project-tech-stack"><span className="tech-stack-text">Tech Stack:  </span>HTML | CSS | JS</p>
//             <a href="https://github.com/VeeranganaMalav/Notes-Application" target="_blank" rel="noreferrer" className="project-github-link">
//               <button className="github-repo-btn">
//                 Github Repo
//               </button>
//             </a>
//             <a href="https://app-notes-1.netlify.app" target="_blank" rel="noreferrer" className="project-deployed-link">
//               <button className="deployed-site-btn">
//                 Live Site
//               </button>
//             </a>
//           </div>
//         </Zoom>

//       </div>
//     </div>
//   )
// }

export default Projects