import React, { useState } from "react";
import "./contact.css";
import { IoMdMail } from "react-icons/io";
import { Container } from "react-bootstrap";
import Pic5 from "./images/img-1.png";
import { Modal, Box, Typography } from "@mui/material";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        mobile: "",
        email: "",
        message: "",
    });

    const [openModal, setOpenModal] = useState(false); // Modal state

    // Handle input changes
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setOpenModal(true); // Show success modal
                setTimeout(() => setOpenModal(false), 2000); // Close modal after 2s
                setFormData({ name: "", mobile: "", email: "", message: "" }); // Clear form
            } else {
                alert(result.error); // Show error message
            }
        } catch (error) {
            alert("Something went wrong. Please try again!"); // Handle network errors
        }
    };

    return (
        <section className="contact">
            <Container>
                <div className="contact-container">
                    <div className="row">
                        {/* Left Column - Contact Info */}
                        <div className="col-lg-6 d-flex flex-column align-items-start contact-info">
                            <IoMdMail className="mail-icon" />
                            <h1>CONTACT</h1>
                            <p>
                                Need help with your project? Book a free session to discuss your specific project requirements and how I can assist you.
                            </p>
                            <div>
                                <img src={Pic5} alt="img" className="img-fluid" />
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div className="col-lg-6 contact-form">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-1">
                                    <label>Name</label>
                                    <br />
                                    <input
                                        type="text"
                                        name="name"
                                        className="form-control"
                                        placeholder="Name"
                                        required
                                        onChange={handleChange}
                                        value={formData.name}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label>Phone No</label>
                                    <br />
                                    <input
                                        type="tel"
                                        name="mobile"
                                        className="form-control"
                                        placeholder="Mobile No."
                                        required
                                        onChange={handleChange}
                                        value={formData.mobile}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label>Email</label>
                                    <br />
                                    <input
                                        type="email"
                                        name="email"
                                        className="form-control"
                                        placeholder="Email"
                                        required
                                        onChange={handleChange}
                                        value={formData.email}
                                    />
                                </div>
                                <div className="mb-1">
                                    <label>Message</label>
                                    <br />
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        placeholder="Message"
                                        required
                                        onChange={handleChange}
                                        value={formData.message}
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Modal - Thank You Message */}
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
                aria-labelledby="thank-you-modal"
                aria-describedby="form-submission-success"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 400,
                        bgcolor: 'white',
                        boxShadow: 24,
                        p: 4,
                        borderRadius: 2,
                        textAlign: 'center'
                    }}
                >
                    <div>
                        <img src="/assets/welcome.png.gif" className="img-fluid" alt="gif" />
                    </div>
                    <Typography id="form-submission-success" sx={{ mt: 2 }}>
                        Your form has been submitted successfully!
                    </Typography>
                </Box>
            </Modal>
        </section>
    );
};

export default Contact;
