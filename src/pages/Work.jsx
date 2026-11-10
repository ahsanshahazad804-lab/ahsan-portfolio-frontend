import { ArrowUpRight, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import '../styles/Work.css'

const projects = [
  {
    number: '01',
    category: 'AGENCY WEBSITE',
    title: 'VELTRIX Studio',
    description:
      'A modern digital studio website built to showcase services, projects, and a professional online presence.',
    technologies: ['React', 'Vite', 'CSS'],
    type: 'Web Development',
    liveLink: 'https://veltrix-studio-eta.vercel.app/',
    githubLink: 'https://github.com/ahsanshahazad804-lab/veltrix-studio',
    preview: 'veltrix-preview',
    previewLabel: 'VELTRIX',
    previewText: 'Ideas into impact.',
  },
  {
    number: '02',
    category: 'WEB APPLICATION',
    title: 'Product Explorer',
    description:
      'A product browsing application with API data, search, category filters, sorting, favorites, and local storage.',
    technologies: ['JavaScript', 'REST API', 'CSS'],
    type: 'Web Application',
    liveLink: 'https://ahsanshahazad804-lab.github.io/smart-product-explorer/',
    githubLink: 'https://github.com/ahsanshahazad804-lab/smart-product-explorer',
    preview: 'product-preview',
    previewLabel: 'PRODUCT EXPLORER',
    previewText: 'Discover products.',
  },
  {
    number: '03',
    category: 'INTERACTIVE GAME',
    title: 'Rock Paper Scissors',
    description:
      'An interactive browser game built to practice JavaScript logic, user interactions, and dynamic page updates.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    type: 'Web Application',
    liveLink: 'https://ahsanshahazad804-lab.github.io/rock-paper-scissors/',
    githubLink: 'https://github.com/ahsanshahazad804-lab/rock-paper-scissors',
    image: './projects/rock-paper-scissors.png',
    preview: 'game-preview',
  },
  {
    number: '04',
    category: 'E-COMMERCE WEBSITE',
    title: 'DubaiSouqs Store',
    description:
      'An e-commerce storefront built with Shopify, focused on product presentation and a smooth shopping experience.',
    technologies: ['Shopify', 'E-commerce'],
    type: 'Web Design',
    liveLink: 'https://www.dubaisouqs.store',
    preview: 'dubai-preview',
    image: '/projects/dubaisouqs.png',
  },
]

function Work() {
  return (
    <section className="work" id="work">
      <div className="work-container">

        {/* Section Heading */}
        <div className="work-heading">
          <div className="section-label">
            <span className="label-line"></span>
            SELECTED WORK
          </div>

          <div className="work-title-row">
            <h2>
              Projects I've
              <span> built.</span>
            </h2>

            <p>
              A selection of projects where ideas, design, and development
              come together to create useful digital experiences.
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="work-grid">
          {projects.map((project) => (
            <article className="work-card" key={project.number}>

              {/* Project Preview */}
              <div className={`work-preview ${project.preview}`}>

                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} project preview`}
                    className="work-preview-image"
                    loading="lazy"
                  />
                ) : (
                  <div className="work-placeholder">
                    <span className="preview-brand">
                      {project.previewLabel}
                    </span>
                    <h3>{project.previewText}</h3>
                    <span className="preview-decoration"></span>
                  </div>
                )}

                <span className="work-project-number">
                  {project.number}
                </span>

                <span className="work-category">
                  {project.category}
                </span>
              </div>

              {/* Project Details */}
              <div className="work-info">

                <div className="work-info-heading">
                  <h3>{project.title}</h3>
                  <span className="work-type">{project.type}</span>
                </div>

                <p className="work-description">
                  {project.description}
                </p>

                <div className="work-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="work-actions">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="work-live-link"
                  >
                    <ExternalLink size={16} />
                    Live Project
                  </a>

                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="work-github-link"
                      aria-label={`View ${project.title} GitHub repository`}
                    >
                      <FaGithub size={19} />
                    </a>
                  )}
                </div>

              </div>
            </article>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="work-bottom">
          <p>Interested in seeing more of my work?</p>

          <a
            href="https://github.com/ahsanshahazad804-lab"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore my GitHub
            <ArrowUpRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Work