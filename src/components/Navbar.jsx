import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import AhsanLogo from './AhsanLogo'
import '../styles/Navbar.css'

const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Work', id: 'work' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
]

const navbarVariants = {
    hidden: {
        opacity: 0,
        y: -25,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: 'easeOut',
            staggerChildren: 0.08,
        },
    },
}

const linkVariants = {
    hidden: {
        opacity: 0,
        y: -10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: 'easeOut',
        },
    },
}

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [activeSection, setActiveSection] = useState('home')

    // Detect the currently visible section
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150

            let currentSection = 'home'

            navLinks.forEach(({ id }) => {
                const section = document.getElementById(id)

                if (section && scrollPosition >= section.offsetTop) {
                    currentSection = id
                }
            })

            setActiveSection(currentSection)
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        })

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    // Close menu with Escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setMenuOpen(false)
            }
        }

        window.addEventListener('keydown', handleEscape)

        return () => {
            window.removeEventListener('keydown', handleEscape)
        }
    }, [])

    // Close menu after clicking a link
    const handleNavClick = () => {
        setMenuOpen(false)
    }

    return (
        <motion.header
            className="navbar"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="navbar-container">

                {/* Logo */}
                <motion.div variants={linkVariants}>
                    <AhsanLogo />
                </motion.div>

                {/* Desktop Navigation */}
                <motion.nav
                    id="mobile-navigation"
                    className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}
                    aria-label="Main navigation"
                    variants={linkVariants}
                >
                    {navLinks.map((link) => (
                        <motion.a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={handleNavClick}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''
                                }`}
                            aria-current={
                                activeSection === link.id ? 'location' : undefined
                            }
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.96 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}

                    <motion.a
                        href="#contact"
                        className="mobile-cta"
                        onClick={handleNavClick}
                        whileHover={{ x: 4 }}
                        whileTap={{ scale: 0.97 }}
                    >
                        Let's Talk <ArrowUpRight size={17} />
                    </motion.a>
                </motion.nav>

                {/* Desktop CTA */}
                <motion.a
                    href="#contact"
                    className="navbar-cta"
                    variants={linkVariants}
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                >
                    Let's Talk
                    <ArrowUpRight size={17} />
                </motion.a>

                {/* Mobile Menu Button */}
                <motion.button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    whileTap={{ scale: 0.9 }}
                >
                    <motion.span
                        key={menuOpen ? 'close' : 'open'}
                        initial={{ opacity: 0, rotate: -45 }}
                        animate={{ opacity: 1, rotate: 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        {menuOpen ? <X size={25} /> : <Menu size={25} />}
                    </motion.span>
                </motion.button>

            </div>
        </motion.header>
    )
}

export default Navbar