import { motion } from 'motion/react'

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

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: 'easeOut',
        },
    },
}

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
        },
    },
}

function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="footer">

            <div className="footer-container">

                {/* TOP FOOTER */}
                <motion.div
                    className="footer-top"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >

                    {/* BRAND */}
                    <motion.div
                        className="footer-brand"
                        variants={fadeUp}
                    >

                        <motion.a
                            href="#home"
                            className="footer-logo"
                            whileHover={{ y: -3 }}
                        >
                            <AhsanLogo />
                        </motion.a>

                        <p>
                            Building modern digital experiences
                            with creativity, code and purpose.
                        </p>

                        <div className="footer-socials">

                            <motion.a
                                href="https://github.com/ahsanshahazad804-lab"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.92 }}
                            >
                                <FaGithub />
                            </motion.a>

                            <motion.a
                                href="https://www.linkedin.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.92 }}
                            >
                                <FaLinkedin />
                            </motion.a>

                            <motion.a
                                href="https://www.instagram.com/_ahsan_sheikh001"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                whileHover={{ y: -5, scale: 1.1 }}
                                whileTap={{ scale: 0.92 }}
                            >
                                <FaInstagram />
                            </motion.a>

                        </div>

                    </motion.div>

                    {/* QUICK LINKS */}
                    <motion.div
                        className="footer-links"
                        variants={fadeUp}
                    >

                        <h3>Quick Links</h3>

                        <ul>
                            {footerLinks.map((link, index) => (
                                <motion.li
                                    key={link.id}
                                    variants={fadeUp}
                                >
                                    <motion.a
                                        href={`#${link.id}`}
                                        whileHover={{ x: 5 }}
                                    >
                                        {link.name}
                                        <ArrowUpRight size={14} />
                                    </motion.a>
                                </motion.li>
                            ))}
                        </ul>

                    </motion.div>

                    {/* CONTACT INFO */}
                    <motion.div
                        className="footer-contact"
                        variants={fadeUp}
                    >

                        <h3>Get In Touch</h3>

                        <motion.a
                            href="mailto:ahsanshahazad804@gmail.com"
                            whileHover={{ x: 5 }}
                        >
                            <Mail size={17} />
                            <span>ahsanshahazad804@gmail.com</span>
                        </motion.a>

                        <motion.a
                            href="tel:+923056144353"
                            whileHover={{ x: 5 }}
                        >
                            <Phone size={17} />
                            <span>+92 305 6144353</span>
                        </motion.a>

                        <motion.div
                            className="footer-location"
                            variants={fadeUp}
                        >
                            <MapPin size={17} />
                            <span>Gujrat, Pakistan</span>
                        </motion.div>

                        <motion.p
                            className="footer-availability"
                            variants={fadeUp}
                        >
                            <span></span>
                            Available for opportunities
                        </motion.p>

                    </motion.div>

                </motion.div>

                {/* COPYRIGHT FOOTER */}
                <motion.div
                    className="footer-bottom"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >

                    <p>
                        © {currentYear} <span>Ahsan Shahzad</span>.
                        All Rights Reserved.
                    </p>

                    <p className="footer-made">
                        Designed & Develop with
                        <span> ♥ </span>
                        by Ahsan.
                    </p>

                </motion.div>

            </div>

        </footer>
    )
}

export default Footer