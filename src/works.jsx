
import React from "react";
import "./works.css";
import { Container } from "react-bootstrap";
import Profile from "./images/display.gif";

const downloadResume = () => {
    window.location.href = "https://drive.google.com/file/d/19xWmNiJ5-YsZlkgIG2iBPSJOg_MI63vx/view?usp=drivesdk";
};




export default class Works extends React.Component {
    render() {

        return (
            <>
                <section>
                    <Container>
                        <div>
                            <div class="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 content">
                                    <h1>About Me</h1>
                                    <p>I am a passionate web developer with experience in building modern and interactive web applications.
                                        My expertise includes React, HTML, CSS, and API integration.</p>
                                   <button className="download-btn"  onClick={downloadResume}>Download CV</button>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div className="profile-div">
                                        <img src={Profile} alt="img" className="img-fluid" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </section>
            </>
        )
    };
};

