import React from "react";
import "./projects.css";
import { FaSuitcase } from "react-icons/fa";
import Pic1 from "./images/project-1.png";
import Pic2 from "./images/project-2.png";
import Pic3 from "./images/project-3.png";
import Pic4 from "./images/WG.jpg";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const projects = [
    {
        title: "Upcoming Project",
        description: "",
        link: "",
        image: Pic4
    },
    {
        title: "Chef's Cooking Recipe's ",
        description: "A dynamic recipe-sharing platform integrated with APIs, allowing users to explore and discover delicious cooking recipes. The site offers search functionality, detailed ingredient lists, and step-by-step cooking instructions for food lovers.",
        link: "https://chef-swart.vercel.app/",
        image: Pic3
    },
    {
        title: "Pimpom Patti Hair Oil",
        description: "A fully responsive e-commerce platform developed with React, featuring a seamless shopping experience for Pimpom Patti hair oil. It includes product listings, cart functionality, and smooth UI interactions for hassle-free purchases.",
        link: "https://pimpom-karthika5150s-projects.vercel.app/",
        image: Pic2
    },
    {
        title: "Wonderla Theme Park",
        description: "A visually appealing static website for Wonderla Theme Park, built using only HTML & CSS. It showcases thrilling rides, ticket pricing, park facilities, and contact details, ensuring an engaging user experience.",
        link: "https://karthika-1234.github.io/wonderla/index.html",
        image: Pic1
    },
];



export default class Projects extends React.Component {

    render() {

        return (
            <>
                <section>
                    <Container>
                        <div className="p-main">
                            <div className="projects">

                                <div>
                                    <FaSuitcase className="suitcase" />
                                    <h1>PROJECTS</h1>
                                    <p>I have built responsive web applications using React.js, TypeScript, and UI frameworks like Ant Design and Material-UI, focusing on dynamic UI components, API integration, and smooth user experiences with optimized performance.</p>

                                    <Link to="/contact">
                                        <button className="btn-1">Conversation with Me</button>
                                    </Link>

                                </div>

                                <div className="row">
                                    {projects.map((project, index) => (
                                        <div key={index} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                                            <div className="project-card">
                                                <img src={project.image} className="img-fluid project-img" alt={project.title} />
                                                <div className="project-content">
                                                    <h3>{project.title}</h3>
                                                    <p>{project.description}</p>
                                                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="link"><button className="btn-1">View</button></a>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>


                            </div>
                        </div>
                    </Container>
                </section>
            </>
        )
    };
};

