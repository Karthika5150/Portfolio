import React, { Component } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaSuitcase, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdContact, IoMdMail, IoLogoWhatsapp } from "react-icons/io";
import { GrPersonalComputer } from "react-icons/gr";
import { Container } from "react-bootstrap";
import Logo from './images/logo.png'

export default class Nav extends Component {
    state = {
        isOpen: false,   
        isScrolled: false 
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);
    }

    handleScroll = () => {
        if (window.scrollY > 400) {
            this.setState({ isScrolled: true });
        } else {
            this.setState({ isScrolled: false });
        }
    };

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <section className={`main ${this.state.isScrolled ? "scrolled-bg" : ""}`}>
                <Container>
                    <div className={`nav ${this.state.isScrolled ? "scrolled" : ""}`}>
                        <div className="logo-div">
                            <img src={Logo} className="img-fluid" alt="img"/>
                        </div>
                        {/* <h2 className={`name ${this.state.isScrolled ? "scrolled-text" : ""}`}>Karthika</h2> */}

                        <div className={`sub ${this.state.isOpen ? "open" : ""}`}>
                            <div>
                                <Link to="/" className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}>
                                    <IoMdContact />
                                    <span>Home</span>
                                </Link>
                                <Link to="/projects" className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}>
                                    <FaSuitcase />
                                    <span>Projects</span>
                                </Link>
                                <Link to="/about" className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}>
                                    <GrPersonalComputer />
                                    <span>About</span>
                                </Link>
                                <Link to="/contact" className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}>
                                    <IoMdMail />
                                    <span>Contact</span>
                                </Link>
                            </div>

                            <div className="social-icons">
                                {/* WhatsApp with pre-filled message */}
                                <a
                                    href="https://api.whatsapp.com/send?phone=918903226495&text=Hello%20Karthika!%20I'm%20interested%20in%20your%20profile.%20I%20have%20some%20job%20vacancies%20and%20would%20like%20to%20speak%20with%20you.%20Could%20you%20attend%20the%20interview%20please?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}
                                >
                                    <IoLogoWhatsapp className="icon-nav" />
                                </a>

                                {/* GitHub Profile */}
                                <a
                                    href="https://github.com/Karthika5150"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                      className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}
                                >
                                    <FaGithub className="icon-nav" />
                                </a>

                                {/* LinkedIn Profile */}
                                <a
                                    href="https://www.linkedin.com/in/karthika-c-8b5b6b288"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                      className={`link ${this.state.isScrolled ? "scrolled-text" : ""}`}
                                >
                                    <FaLinkedin className="icon-nav" />
                                </a>
                            </div>


                            <Link to="/contact">
                                <button>Hire Me</button>
                            </Link>
                        </div>

                        <div className={`menu-icon ${this.state.isScrolled ? "scrolled-icon" : ""}`} onClick={this.toggleMenu}>
                            {this.state.isOpen ? <FaTimes /> : <FaBars />}
                        </div>
                    </div>
                </Container>
            </section>
        );
    }
}
