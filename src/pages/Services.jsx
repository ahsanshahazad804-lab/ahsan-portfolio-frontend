import { motion } from 'motion/react'

import {
  ArrowUpRight,
  Code2,
  Globe,
  Palette,
  Check
} from 'lucide-react'

import '../styles/Services.css'

const services = [
  {
    number: '01',
    icon: <Code2 size={27} />,
    title: 'MERN Stack Development',
    description:
      'Building modern, dynamic, and scalable web applications using MongoDB, Express.js, React, and Node.js.',
    features: [
      'Frontend Development',
      'Backend & API Integration',
      'Responsive Web Applications',
    ],
    tag: 'FULL STACK DEVELOPMENT',
  },
  {
    number: '02',
    icon: <Globe size={27} />,
    title: 'WordPress Development',
    description:
      'Creating professional WordPress websites that are easy to manage, visually appealing, and built for performance.',
    features: [
      'Custom WordPress Websites',
      'Elementor Page Building',
      'Website Customization',
    ],
    tag: 'CMS DEVELOPMENT',
  },
  {
    number: '03',
    icon: <Palette size={27} />,
    title: 'Web Design',
    description:
      'Designing clean, modern, and user-friendly interfaces that provide a smooth experience across all devices.',
    features: [
      'Modern UI Design',
      'Mobile Responsive Layouts',
      'User-Focused Interfaces',
    ],
    tag: 'UI & WEB DESIGN',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* Heading */}
        <motion.div
          className="services-heading"
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
          <motion.div className="section-label" variants={fadeUp}>
            <span className="label-line"></span>
            WHAT I DO
          </motion.div>

          <div className="services-title-row">
            <motion.h2 variants={fadeUp}>
              Services I
              <span> provide.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Helping businesses and individuals build a strong digital
              presence through modern development and thoughtful design.
            </motion.p>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {services.map((service) => (
            <motion.article
              className="service-card"
              key={service.number}
              variants={{
                hidden: { opacity: 0, y: 55, scale: 0.96 },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.65,
                    ease: 'easeOut',
                  },
                },
              }}
              whileHover={{
                y: -9,
                transition: { duration: 0.25 },
              }}
            >

              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <motion.div
                  className="service-icon"
                  whileHover={{ rotate: 8, scale: 1.12 }}
                  transition={{ duration: 0.25 }}
                >
                  {service.icon}
                </motion.div>
              </div>

              <span className="service-tag">
                {service.tag}
              </span>

              <h3>{service.title}</h3>

              <p className="service-description">
                {service.description}
              </p>

              <div className="service-divider"></div>

              <ul className="service-features">
                {service.features.map((feature) => (
                  <li key={feature}>
                    <Check size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className="service-link">
                Discuss your project
                <ArrowUpRight size={19} />
              </a>

            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="services-bottom"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <p>Have a project in mind?</p>

          <motion.a
            href="#contact"
            whileHover={{ x: 7 }}
            transition={{ duration: 0.2 }}
          >
            Let's talk about it
            <ArrowUpRight size={18} />
          </motion.a>
        </motion.div>

      </div>
    </section>
  )
}

export default Services