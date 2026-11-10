
import { useEffect, useState } from 'react'

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

function Hero() {
    const [roleIndex, setRoleIndex] = useState(0)
    const [imageError, setImageError] = useState(false)

    // Animated developer title
    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length)
        }, 2500)

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="hero" id="home">

            {/* Background Effects */}
            <div className="hero-glow"></div>
            <div className="hero-grid"></div>

            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-content">

                    <div className="hero-badge">
                        <span className="status-dot"></span>
                        AVAILABLE FOR OPPORTUNITIES
                    </div>

                    <p className="hero-intro">
                        Hello, I'm
                    </p>

                    <h1>
                        Ahsan <span>Shahzad</span>
                    </h1>

                    <div className="hero-role">
                        <Code2 size={21} />

                        <span key={roleIndex} className="role-text">
                            {roles[roleIndex]}
                        </span>
                    </div>

                    <p className="hero-description">
                        I build modern, responsive and user-friendly digital
                        experiences. From powerful web applications to
                        beautiful websites, I turn ideas into reality.
                    </p>

                    {/* ACTION BUTTONS */}
                    <div className="hero-buttons">

                        <a href="#work" className="hero-btn primary-btn">
                            View My Work
                            <ArrowUpRight size={19} />
                        </a>

                        <a href="#contact" className="hero-btn secondary-btn">
                            Contact Me
                        </a>

                    </div>

                    {/* SOCIAL LINKS */}
                    <div className="hero-socials">

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

                    </div>

                </div>

                {/* RIGHT PROFILE IMAGE */}
                <div className="hero-visual">

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
                    <div className="floating-badge">
                        <span className="floating-dot"></span>

                        <div>
                            <strong>Building Digital</strong>
                            <p>Experiences</p>
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="hero-decoration decoration-one"></div>
                    <div className="hero-decoration decoration-two"></div>

                </div>

            </div>

            {/* Bottom Scroll Indicator */}
            <a href="#about" className="scroll-indicator">
                <span></span>
                SCROLL TO EXPLORE
            </a>

        </section>
    )
}

export default Hero
