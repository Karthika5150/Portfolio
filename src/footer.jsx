import React from 'react'
import { Container } from 'react-bootstrap';
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import './footer.css';

export default function Footer() {
    return (
        <>
            <section className='footer-contain'>
                <Container>
                    <div>
                        <div className="icon-b">

                            <div className='d-flex justify-content-between'>
                                <p>© 2025 Karthika. All rights reserved.</p>

                                <div className="social-icons">
                                    {/* WhatsApp with pre-filled message */}
                                    <a
                                        href="https://api.whatsapp.com/send?phone=918903226495&text=Hello%20Karthika!%20I'm%20interested%20in%20your%20profile.%20I%20have%20some%20job%20vacancies%20and%20would%20like%20to%20speak%20with%20you.%20Could%20you%20attend%20the%20interview%20please?"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <IoLogoWhatsapp className="icon-nav" />
                                    </a>

                                    {/* GitHub Profile */}
                                    <a
                                        href="https://github.com/Karthika5150"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FaGithub className="icon-nav" />
                                    </a>

                                    {/* LinkedIn Profile */}
                                    <a
                                        href="https://www.linkedin.com/in/karthika-c-8b5b6b288"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="links"
                                    >
                                        <FaLinkedin className="icon-nav" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    )
}
