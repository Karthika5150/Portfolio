import React, { useState, useEffect } from "react";
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiBootstrap
} from "react-icons/si";
import "./skills.css";

const skills = [
    { name: "HTML", icon: SiHtml5, color: "#f16529", percentage: 95 },
    { name: "CSS", icon: SiCss3, color: "#2965f1", percentage: 90 },
    { name: "Bootstrap", icon: SiBootstrap, color: "#563d7c", percentage: 80 },
    { name: "JavaScript", icon: SiJavascript, color: "#f7df1e", percentage: 80 },
    { name: "React", icon: SiReact, color: "#61dafb", percentage: 80 },
];

// Gauge Component with Animated Progress
const Gauge = ({ percentage }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setProgress(percentage); // Trigger animation
        }, 500);
    }, [percentage]);

    return (
        <svg width="180" height="90" viewBox="0 0 100 50">
            {/* Background Gauge */}
            <path
                d="M 10,50 A 40,40 0 0,1 90,50"
                stroke="white"
                strokeWidth="10"
                fill="none"
                opacity="0.2"
            />
            {/* Progress Gauge */}
            <path
                d="M 10,50 A 40,40 0 0,1 90,50"
                stroke="rgb(30, 59, 95)"
                strokeWidth="10"
                fill="none"
                strokeDasharray="180"
                strokeDashoffset={180 - (progress / 100) * 180}
                style={{
                    transition: "stroke-dashoffset 1.5s ease-in-out",
                }}
            />
        </svg>
    );
};

const Skills = () => {
    return (
        <div className="skills-container">
           <h2>SKILLS</h2>
            <div className="skill-div">
                {skills.map((skill, index) => {
                    const Icon = skill.icon; // Extract icon component

                    return (
                        <div key={index} className="skill">
                            <div className="gauge-wrapper">
                                <Gauge percentage={skill.percentage} />
                                <div className="icon" style={{ color: skill.color }}>
                                    <Icon />
                                </div>
                            </div>
                            {/* Percentage Text Below Icon */}
                            <p className="percentage-text">{skill.percentage}%</p>
                        </div>
                    );
                })}

            </div>
        </div>
    );
};

export default Skills;
