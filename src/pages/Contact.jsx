import { useState } from 'react'
import { motion } from 'motion/react'

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

const fadeUp = {
    hidden: { opacity: 0, y: 35 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.7, ease: 'easeOut' },
    },
}

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
                <motion.div
                    className="contact-header"
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

                    <motion.div className="contact-label" variants={fadeUp}>
                        <span></span>
                        GET IN TOUCH
                    </motion.div>

                    <motion.h2 variants={fadeUp}>
                        Let's Build Something <span>Great.</span>
                    </motion.h2>

                    <motion.p variants={fadeUp}>
                        Have a project in mind or looking for a developer?
                        Let's discuss how we can bring your ideas to life.
                    </motion.p>

                </motion.div>

                {/* CONTACT CONTENT */}
                <div className="contact-content">

                    {/* LEFT SIDE */}
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >

                        <motion.div
                            className="contact-info-heading"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <motion.h3 variants={fadeUp}>Let's Talk</motion.h3>

                            <motion.p variants={fadeUp}>
                                I'm open to discussing new projects,
                                creative ideas and opportunities.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="contact-details"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                        >

                            <motion.div className="contact-detail-item" variants={fadeUp}>
                                <div className="contact-detail-icon">
                                    <Mail size={21} />
                                </div>

                                <div>
                                    <span>Email</span>
                                    <p>ahsanshahazad804@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div className="contact-detail-item" variants={fadeUp}>
                                <div className="contact-detail-icon">
                                    <Phone size={21} />
                                </div>

                                <div>
                                    <span>Phone</span>
                                    <p>+92 305 6143353</p>
                                </div>
                            </motion.div>

                            <motion.div className="contact-detail-item" variants={fadeUp}>
                                <div className="contact-detail-icon">
                                    <MapPin size={21} />
                                </div>

                                <div>
                                    <span>Location</span>
                                    <p>Gujrat, Pakistan</p>
                                </div>
                            </motion.div>

                        </motion.div>

                        <motion.div
                            className="contact-social-area"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >

                            <span>FOLLOW ME</span>

                            <div className="contact-socials">

                                <motion.a
                                    href="https://github.com/ahsanshahazad804-lab"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    whileHover={{ y: -5, scale: 1.08 }}
                                >
                                    <FaGithub size={19} />
                                </motion.a>

                                <motion.a
                                    href="https://www.instagram.com/_ahsan_sheikh001"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    whileHover={{ y: -5, scale: 1.08 }}
                                >
                                    <FaInstagram size={19} />
                                </motion.a>

                                <motion.a
                                    href="https://www.linkedin.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    whileHover={{ y: -5, scale: 1.08 }}
                                >
                                    <FaLinkedin size={19} />
                                </motion.a>

                            </div>

                        </motion.div>

                    </motion.div>

                    {/* RIGHT SIDE - FORM */}
                    <motion.form
                        className="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, x: 45 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.15,
                            ease: 'easeOut',
                        }}
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

                        <motion.button
                            type="submit"
                            className="contact-submit"
                            disabled={isSubmitting}
                            whileHover={!isSubmitting ? { y: -3, scale: 1.01 } : {}}
                            whileTap={!isSubmitting ? { scale: 0.97 } : {}}
                        >
                            {isSubmitting ? 'Sending...' : 'Send Message'}

                            <Send size={17} />
                        </motion.button>

                        {status && (
                            <p className="contact-status" role="status">
                                {status}
                            </p>
                        )}

                    </motion.form>

                </div>

                {/* BOTTOM NOTE */}
                <motion.div
                    className="contact-bottom"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >
                    <span>HAVE A PROJECT IN MIND?</span>
                    <p>Let's make it happen.</p>
                    <ArrowUpRight size={22} />
                </motion.div>

            </div>

        </section>
    )
}

export default Contact