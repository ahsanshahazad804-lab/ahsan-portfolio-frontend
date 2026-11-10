import { ArrowUpRight, Code2, Globe, Palette } from 'lucide-react'
import '../styles/About.css'

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <div className="about-heading">
          <span className="section-label">
            <span className="label-line"></span>
            ABOUT ME
          </span>

          <h2>
            Turning ideas into
            <span> digital experiences.</span>
          </h2>
        </div>

        {/* About Content */}
        <div className="about-content">

          <div className="about-text">
            <p className="about-intro">
              I'm <strong>Ahsan Shahzad</strong>, a developer and web designer
              passionate about building modern, functional, and user-friendly
              digital experiences.
            </p>

            <p>
              I work with modern web technologies to create responsive websites
              and web applications. From designing clean interfaces to building
              interactive functionality, I enjoy turning ideas into real-world
              digital products.
            </p>

            <p>
              My focus is on writing clean code, continuously improving my
              skills, and creating websites that look great and work smoothly
              across all devices.
            </p>

            <a href="#contact" className="about-link">
              Let's work together
              <ArrowUpRight size={18} />
            </a>
          </div>

          {/* Profile Visual */}
          <div className="about-visual">
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>

              <img
                src="../public/images/portfolioPic.png"
                alt="Ahsan Shahzad"
                className="about-image"
              />

              <div className="about-image-overlay"></div>

              <div className="about-image-caption">
                <span>AH</span>
                <div>
                  <h3>Ahsan Shahzad</h3>
                  <p>Developer & Web Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Expertise Cards */}
        <div className="about-highlights">

          <div className="about-highlight">
            <div className="highlight-icon">
              <Code2 size={22} />
            </div>
            <div>
              <h3>MERN Stack</h3>
              <p>Modern full-stack web development</p>
            </div>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">
              <Globe size={22} />
            </div>
            <div>
              <h3>WordPress</h3>
              <p>Functional and responsive websites</p>
            </div>
          </div>

          <div className="about-highlight">
            <div className="highlight-icon">
              <Palette size={22} />
            </div>
            <div>
              <h3>Web Design</h3>
              <p>Clean and user-focused interfaces</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default About