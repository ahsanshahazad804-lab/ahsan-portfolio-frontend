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

function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">

        {/* Heading */}
        <div className="services-heading">
          <div className="section-label">
            <span className="label-line"></span>
            WHAT I DO
          </div>

          <div className="services-title-row">
            <h2>
              Services I
              <span> provide.</span>
            </h2>

            <p>
              Helping businesses and individuals build a strong digital
              presence through modern development and thoughtful design.
            </p>
          </div>
        </div>

        {/* Service Cards */}
        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.number}>

              <div className="service-card-top">
                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>
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

            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="services-bottom">
          <p>Have a project in mind?</p>

          <a href="#contact">
            Let's talk about it
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services