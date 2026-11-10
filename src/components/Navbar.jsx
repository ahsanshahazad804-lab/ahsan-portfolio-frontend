import { useEffect, useState } from 'react'
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
        <header className="navbar">

            <div className="navbar-container">

                {/* Logo */}
                <AhsanLogo />

                {/* Desktop Navigation */}
                <nav
                    id="mobile-navigation"
                    className={`nav-menu ${menuOpen ? 'nav-menu-open' : ''}`}
                    aria-label="Main navigation"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={handleNavClick}
                            className={`nav-link ${activeSection === link.id ? 'active' : ''
                                }`}
                            aria-current={
                                activeSection === link.id ? 'location' : undefined
                            }
                        >
                            {link.name}
                        </a>
                    ))}

                    <a
                        href="#contact"
                        className="mobile-cta"
                        onClick={handleNavClick}
                    >
                        Let's Talk <ArrowUpRight size={17} />
                    </a>
                </nav>

                {/* Desktop CTA */}
                <a href="#contact" className="navbar-cta">
                    Let's Talk
                    <ArrowUpRight size={17} />
                </a>

                {/* Mobile Menu Button */}
                <button
                    className="menu-toggle"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                >
                    {menuOpen ? <X size={25} /> : <Menu size={25} />}
                </button>

            </div>

        </header>
    )
}

export default Navbar