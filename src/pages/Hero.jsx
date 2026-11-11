import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import {
    ArrowUpRight,
    Code2,
} from 'lucide-react'

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa'

import '../styles/Hero.css'

const roles = [
    'MERN Stack Developer',
    'WordPress Developer',
    'Web Designer',
]

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
}

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [imageError, setImageError] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero" id="home">

            <div className="hero-glow"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">

                {/* LEFT CONTENT */}
                <motion.div
                    className="hero-content"
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: {
                            transition: {
                                staggerChildren: 0.15,
                            },
                        },
                    }}
                >

                    <motion.div className="hero-badge" variants={fadeUp}>
                        <span className="status-dot"></span>
                        AVAILABLE FOR OPPORTUNITIES
                    </motion.div>

                    <motion.p className="hero-intro" variants={fadeUp}>
                        Hello, I'm
                    </motion.p>

                    <motion.h1 variants={fadeUp}>
                        Ahsan <span>Shahzad</span>
                    </motion.h1>

                    <motion.div className="hero-role" variants={fadeUp}>
                        <Code2 size={21} />

                        <AnimatePresence mode="wait">
                            <motion.span
                                key={roleIndex}
                                className="role-text"
                                initial={{ opacity: 0, y: 12 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -12 }}
                                transition={{ duration: 0.3 }}
                            >
                                {roles[roleIndex]}
                            </motion.span>
                        </AnimatePresence>
                    </motion.div>

                    <motion.p className="hero-description" variants={fadeUp}>
                        I build modern, responsive and user-friendly digital
                        experiences. From powerful web applications to
                        beautiful websites, I turn ideas into reality.
                    </motion.p>

                    {/* ACTION BUTTONS */}
                    <motion.div className="hero-buttons" variants={fadeUp}>

                        <a
                            href="/ahsan-cv.pdf"
                            download="Ahsan-CV.pdf"
                            className="hero-btn primary-btn"
                        >
                            Download CV
                            <ArrowUpRight size={19} />
                        </a>

                        <a href="#contact" className="hero-btn secondary-btn">
                            Contact Me
                        </a>

                    </motion.div>

                    {/* SOCIAL LINKS */}
                    <motion.div className="hero-socials" variants={fadeUp}>

                        <span>Follow Me</span>

                        <a
                            href="https://github.com/ahsanshahazad804-lab"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                        >
                            <FaGithub size={19} />
                        </a>

                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={19} />
                        </a>

                        <a
                            href="https://www.instagram.com/_ahsan_sheikh001"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={19} />
                        </a>

                    </motion.div>

                </motion.div>

                {/* RIGHT PROFILE IMAGE */}
                <motion.div
                    className="hero-visual"
                    initial={{ opacity: 0, scale: 0.88, x: 35 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{
                        duration: 0.9,
                        delay: 0.3,
                        ease: 'easeOut',
                    }}
                >

                    <div className="hero-image-glow"></div>

                    <div className="hero-image-frame">

                        {!imageError ? (
                            <img
                                src="/images/portfolioPic.png"
                                alt="Ahsan Shahzad - Web Developer"
                                className="hero-profile"
                                onError={() => setImageError(true)}
                            />
                        ) : (
                            <div className="hero-placeholder">
                                <Code2 size={85} />
                                <span>AHSAN</span>
                                <p>YOUR PHOTO HERE</p>
                            </div>
                        )}

                    </div>

                    {/* Floating Tech Badge */}
                    <motion.div
                        className="floating-badge"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <span className="floating-dot"></span>

                        <div>
                            <strong>Building Digital</strong>
                            <p>Experiences</p>
                        </div>
                    </motion.div>

                    <div className="hero-decoration decoration-one"></div>
                    <div className="hero-decoration decoration-two"></div>

                </motion.div>

            </div>

            {/* Bottom Scroll Indicator */}
            <motion.a
                href="#about"
                className="scroll-indicator"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <span></span>
                SCROLL TO EXPLORE
            </motion.a>

        </section>
    )
}

export default Hero