import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'
import '../styles/ScrollToTop.css'

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300)
        }

        window.addEventListener('scroll', handleScroll, {
            passive: true,
        })

        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Back to top"
        >
            <ArrowUp size={21} />
        </button>
    )
}

export default ScrollToTop