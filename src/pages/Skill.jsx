import {
    Code2,
    Server,
    Wrench,
    ArrowUpRight,
} from 'lucide-react'

import '../styles/Skill.css'

const skillGroups = [
    {
        number: '01',
        title: 'Frontend Development',
        description:
            'Building responsive, interactive and user-friendly interfaces for the modern web.',
        icon: Code2,
        skills: [
            'HTML5',
            'CSS3',
            'JavaScript',
            'React.js',
            'Responsive Design',
            'React Router',
        ],
    },
    {
        number: '02',
        title: 'Backend & CMS',
        description:
            'Working with modern backend technologies, APIs and content management systems.',
        icon: Server,
        skills: [
            'Node.js',
            'Express.js',
            'MongoDB',
            'WordPress',
            'REST APIs',
            'CRUD Operations',
        ],
    },
    {
        number: '03',
        title: 'Tools & Technologies',
        description:
            'Using development tools and workflows to build, manage and improve projects.',
        icon: Wrench,
        skills: [
            'Git',
            'GitHub',
            'VS Code',
            'Vite',
            'npm',
            'Chrome DevTools',
        ],
    },
]

function Skills() {
    return (
        <section className="skills section-padding" id="skills">

            <div className="skills-container">

                {/* SECTION HEADER */}
                <div className="skills-header">

                    <div className="section-label">
                        <span></span>
                        WHAT I WORK WITH
                    </div>

                    <h2>
                        My Technical <span>Skills.</span>
                    </h2>

                    <p>
                        The technologies and tools I use to turn ideas
                        into functional and engaging digital experiences.
                    </p>

                </div>

                {/* SKILL CARDS */}
                <div className="skills-grid">

                    {skillGroups.map((group) => {
                        const Icon = group.icon

                        return (
                            <div className="skill-card" key={group.number}>

                                <div className="skill-card-top">

                                    <span className="skill-number">
                                        {group.number}
                                    </span>

                                    <div className="skill-icon">
                                        <Icon size={25} />
                                    </div>

                                </div>

                                <h3>{group.title}</h3>

                                <p className="skill-description">
                                    {group.description}
                                </p>

                                <div className="skill-tags">

                                    {group.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}

                                </div>

                                <div className="skill-card-bottom">
                                    <span>TECHNICAL EXPERTISE</span>
                                    <ArrowUpRight size={18} />
                                </div>

                            </div>
                        )
                    })}

                </div>

                {/* BOTTOM NOTE */}
                <div className="skills-bottom">

                    <span className="skills-bottom-line"></span>

                    <p>
                        Always learning. Always building. Always improving.
                    </p>

                    <span className="skills-bottom-line"></span>

                </div>

            </div>

        </section>
    )
}

export default Skills