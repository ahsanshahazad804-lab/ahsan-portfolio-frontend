
import { useState } from 'react'

import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
} from 'react-icons/fa'

import {
    Mail,
    Phone,
    MapPin,
    ArrowUpRight,
    Send
} from 'lucide-react'

import '../styles/Contact.css'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const [status, setStatus] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))

        setStatus('')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        setIsSubmitting(true)
        setStatus('')

        try {
            const response = await fetch(
                'http://localhost:5000/api/contact',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                }
            )

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong.')
            }

            setStatus(data.message)

            setFormData({
                name: '',
                email: '',
                subject: '',
                message: '',
            })

        } catch (error) {
            setStatus(
                error.message || 'Unable to send your message. Please try again.'
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="contact" id="contact">

            <div className="contact-container">

                {/* SECTION HEADER */}
                <div className="contact-header">

                    <div className="contact-label">
                        <span></span>
                        GET IN TOUCH
                    </div>

                    <h2>
                        Let's Build Something <span>Great.</span>
                    </h2>

                    <p>
                        Have a project in mind or looking for a developer?
                        Let's discuss how we can bring your ideas to life.
                    </p>

                </div>

                {/* CONTACT CONTENT */}
                <div className="contact-content">

                    {/* LEFT SIDE */}
                    <div className="contact-info">

                        <div className="contact-info-heading">
                            <h3>Let's Talk</h3>

                            <p>
                                I'm open to discussing new projects,
                                creative ideas and opportunities.
                            </p>
                        </div>

                        <div className="contact-details">

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Mail size={21} />
                                </div>

                                <div>
                                    <span>Email</span>
                                    <p>ahsanshahazad804@gmail.com</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <Phone size={21} />
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <p>+92 305 6143353</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="contact-detail-icon">
                                    <MapPin size={21} />
                                </div>

                                <div>
                                    <span>Location</span>
                                    <p>Gujrat, Pakistan</p>
                                </div>
                            </div>

                        </div>

                        <div className="contact-social-area">

                            <span>FOLLOW ME</span>

                            <div className="contact-socials">

                                <a
                                    href="https://github.com/ahsanshahazad804-lab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                >
                                    <FaGithub size={19} />
                                </a>

                                <a
                                    href="https://www.instagram.com/_ahsan_sheikh001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram size={19} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin size={19} />
                                </a>

                            </div>

                        </div>

                    </div>

                    {/* RIGHT SIDE - FORM */}
                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >

                        <div className="contact-form-heading">
                            <h3>Send Me a Message</h3>
                            <p>Fill out the form below to get started.</p>
                        </div>

                        <div className="contact-input-row">

                            <div className="contact-field">
                                <label htmlFor="contact-name">
                                    Your Name
                                </label>

                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact-email">
                                    Email Address
                                </label>

                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isSubmitting}
                                />
                            </div>

                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-subject">
                                Subject
                            </label>

                            <input
                                type="text"
                                id="contact-subject"
                                name="subject"
                                placeholder="What is this about?"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="contact-message">
                                Your Message
                            </label>

                            <textarea
                                id="contact-message"
                                name="message"
                                rows="5"
                                placeholder="Tell me about your project..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={isSubmitting}
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}

                            <Send size={17} />
                        </button>

                        {status && (
                            <p className="contact-status" role="status">
                                {status}
                            </p>
                        )}

                    </form>

                </div>

                {/* BOTTOM NOTE */}
                <div className="contact-bottom">
                    <span>HAVE A PROJECT IN MIND?</span>
                    <p>Let's make it happen.</p>
                    <ArrowUpRight size={22} />
                </div>

            </div>

        </section>
    )
}

export default Contact