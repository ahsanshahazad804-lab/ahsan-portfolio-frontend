import {
    ArrowUpRight,
    Mail,
    MapPin,
    Phone,
} from 'lucide-react'

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa'

import AhsanLogo from './AhsanLogo'
import '../styles/Footer.css'

const footerLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
]

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* TOP FOOTER */}
                <div className="footer-top">

                    <div className="footer-brand">

                        <a href="#home" className="footer-logo">
                            <AhsanLogo />
                        </a>

                        <p>
                            Building modern digital experiences
                            with creativity, code and purpose.
                        </p>

                        <div className="footer-socials">

                            <a
                                href="https://github.com/ahsanshahazad804-lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://www.instagram.com/_ahsan_sheikh001"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                            >
                                <FaInstagram />
                            </a>

                        </div>

                    </div>

                    {/* QUICK LINKS */}
                    <div className="footer-links">

                        <h3>Quick Links</h3>

                        <ul>
                            {footerLinks.map((link) => (
                                <li key={link.id}>
                                    <a href={`#${link.id}`}>
                                        {link.name}
                                        <ArrowUpRight size={14} />
                                    </a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    {/* CONTACT INFO */}
                    <div className="footer-contact">

                        <h3>Get In Touch</h3>

                        <a href="mailto:ahsanshahazad804@gmail.com">
                            <Mail size={17} />
                            <span>ahsanshahazad804@gmail.com</span>
                        </a>

                        <a href="tel:+923056144353">
                            <Phone size={17} />
                            <span>+92 305 6144353</span>
                        </a>

                        <div className="footer-location">
                            <MapPin size={17} />
                            <span>Gujrat, Pakistan</span>
                        </div>

                        <p className="footer-availability">
                            <span></span>
                            Available for opportunities
                        </p>

                    </div>

                </div>

                {/* COPYRIGHT FOOTER */}
                <div className="footer-bottom">

                    <p>
                        © {currentYear} <span>Ahsan Shahzad</span>.
                        All Rights Reserved.
                    </p>

                    <p className="footer-made">
                        Designed & Develop with
                        <span> ♥ </span>
                        by Ahsan.
                    </p>

                </div>

            </div>

        </footer>
    )
}

export default Footer