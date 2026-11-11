import { motion } from 'motion/react'

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

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: 'easeOut',
        },
    },
}

function Skills() {
    return (
        <section className="skills section-padding" id="skills">

            <div className="skills-container">

                {/* SECTION HEADER */}
                <motion.div
                    className="skills-header"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={{
                        hidden: {},
                        visible: {
                            transition: { staggerChildren: 0.18 },
                        },
                    }}
                >

                    <motion.div className="section-label" variants={fadeUp}>
                        <span></span>
                        WHAT I WORK WITH
                    </motion.div>

                    <motion.h2 variants={fadeUp}>
                        My Technical <span>Skills.</span>
                    </motion.h2>

                    <motion.p variants={fadeUp}>
                        The technologies and tools I use to turn ideas
                        into functional and engaging digital experiences.
                    </motion.p>

                </motion.div>

                {/* SKILL CARDS */}
                <motion.div
                    className="skills-grid"
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

                    {skillGroups.map((group) => {
                        const Icon = group.icon

                        return (
                            <motion.div
                                className="skill-card"
                                key={group.number}
                                variants={{
                                    hidden: {
                                        opacity: 0,
                                        y: 50,
                                        scale: 0.96,
                                    },
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

                                <div className="skill-card-top">

                                    <span className="skill-number">
                                        {group.number}
                                    </span>

                                    <motion.div
                                        className="skill-icon"
                                        whileHover={{
                                            rotate: 10,
                                            scale: 1.12,
                                        }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        <Icon size={25} />
                                    </motion.div>

                                </div>

                                <h3>{group.title}</h3>

                                <p className="skill-description">
                                    {group.description}
                                </p>

                                <div className="skill-tags">

                                    {group.skills.map((skill, index) => (
                                        <motion.span
                                            key={skill}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.35,
                                                delay: index * 0.06,
                                            }}
                                        >
                                            {skill}
                                        </motion.span>
                                    ))}

                                </div>

                                <div className="skill-card-bottom">
                                    <span>TECHNICAL EXPERTISE</span>
                                    <ArrowUpRight size={18} />
                                </div>

                            </motion.div>
                        )
                    })}

                </motion.div>

                {/* BOTTOM NOTE */}
                <motion.div
                    className="skills-bottom"
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.7 }}
                >

                    <span className="skills-bottom-line"></span>

                    <p>
                        Always learning. Always building. Always improving.
                    </p>

                    <span className="skills-bottom-line"></span>

                </motion.div>

            </div>

        </section>
    )
}

export default Skills