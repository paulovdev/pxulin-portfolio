import React, { useState } from "react";
import { motion } from "framer-motion";
/* ICONS */
import { SiStyledcomponents, SiReact } from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaNpm } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";


const Skills = () => {
    const [selectedSkill, setSelectedSkill] = useState(null);
    const openModal = (skill) => {
        setSelectedSkill(skill);
    };

    const closeModal = () => {
        setSelectedSkill(null);
    };

    const skillsData = [
        {
            id: 1,
            title: "HTML",
            iconComponent: AiFillHtml5,
            desc: "asd",
        },
        {
            id: 2,
            title: "CSS",
            iconComponent: FaCss3Alt,
            desc: "asd",
        },
        {
            id: 3,
            title: "JavaScript",
            iconComponent: DiJavascript1,
            desc: "asd",
        },
        {
            id: 4,
            title: "React",
            iconComponent: SiReact,
            desc: "asd",
        },
        {
            id: 6,
            title: "Styled Components",
            iconComponent: SiStyledcomponents,
            desc: "asd",
        },
        {
            id: 5,
            title: "NPM",
            iconComponent: FaNpm,
            desc: "asd",
        },
    ];

    const translateAnimation = {
        initial: { opacity: 0.1, y: -50 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: 50 },
    };
    return (
        <main id='skills'>
            <motion.h1
                {...translateAnimation}
            >
                Minhas Habilidades<span id="mySpan">.</span>
            </motion.h1>
            <motion.p
                transition={{ delay: 0.1 }}
            >
                Clique em algum card e veja as tecnologias que uso.
            </motion.p>

            <div className="skills-container">
                {skillsData.map((skill, index) => (
                    <motion.div
                        initial={{ opacity: 0, y: -250 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ delay: index * 0.1 }}
                        key={skill.id}>
                        <motion.div id="card" onClick={() => openModal(skill)}>
                            {skill.iconComponent && (
                                <skill.iconComponent className="skill-icon" />
                            )}
                        </motion.div>
                    </motion.div>

                ))}
            </div>
            {selectedSkill && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor: "rgba(0, 0, 0, 0.4)",
                        backdropFilter: "blur(1rem)",
                        zIndex: 999,
                    }}
                    onClick={closeModal}
                >
                    <div
                        style={{
                            background: "var(--bg)",
                            border: "1px solid var(--border)",
                            width: "90%",
                            maxWidth: "400px",
                            maxHeight: "50%",
                            margin: "auto",
                            borderRadius: "8px",
                            overflow: "auto",
                            padding: "16px",
                            zIndex: 999,
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h1>{selectedSkill.title}</h1>
                        <p>{selectedSkill.desc}</p>
                    </div>
                </div>
            )}
        </main>

    )
}

export default Skills
