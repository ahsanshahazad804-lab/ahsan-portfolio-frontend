import { motion } from 'motion/react'
import { ArrowUpRight, Code2, Globe, Palette } from 'lucide-react'
import '../styles/About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="about-container">

        {/* Section Heading */}
        <motion.div
          className="about-heading"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span className="section-label" variants={fadeUp}>
            <span className="label-line"></span>
            ABOUT ME
          </motion.span>

          <motion.h2 variants={fadeUp}>
            Turning ideas into
            <span> digital experiences.</span>
          </motion.h2>
        </motion.div>

        {/* About Content */}
        <div className="about-content">

          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            <motion.p className="about-intro" variants={fadeUp}>
              I'm <strong>Ahsan Shahzad</strong>, a developer and web designer
              passionate about building modern, functional, and user-friendly
              digital experiences.
            </motion.p>

            <motion.p variants={fadeUp}>
              I work with modern web technologies to create responsive websites
              and web applications. From designing clean interfaces to building
              interactive functionality, I enjoy turning ideas into real-world
              digital products.
            </motion.p>

            <motion.p variants={fadeUp}>
              My focus is on writing clean code, continuously improving my
              skills, and creating websites that look great and work smoothly
              across all devices.
            </motion.p>

            <motion.a
              href="#contact"
              className="about-link"
              variants={fadeUp}
              whileHover={{ x: 7 }}
              transition={{ duration: 0.25 }}
            >
              Let's work together
              <ArrowUpRight size={18} />
            </motion.a>
          </motion.div>

          {/* Profile Visual */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: 55, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="about-image-wrapper">
              <div className="about-image-glow"></div>

              <img
                src="/images/portfolioPic.png"
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
          </motion.div>
        </div>

        {/* Expertise Cards */}
        <motion.div
          className="about-highlights"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.18 },
            },
          }}
        >

          <motion.div
            className="about-highlight"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="highlight-icon">
              <Code2 size={22} />
            </div>
            <div>
              <h3>MERN Stack</h3>
              <p>Modern full-stack web development</p>
            </div>
          </motion.div>

          <motion.div
            className="about-highlight"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="highlight-icon">
              <Globe size={22} />
            </div>
            <div>
              <h3>WordPress</h3>
              <p>Functional and responsive websites</p>
            </div>
          </motion.div>

          <motion.div
            className="about-highlight"
            variants={fadeUp}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <div className="highlight-icon">
              <Palette size={22} />
            </div>
            <div>
              <h3>Web Design</h3>
              <p>Clean and user-focused interfaces</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}

export default About