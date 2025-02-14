
import React from "react";
import "./about.css";
import Profile from "./images/display.gif";
import Project from "./projects";
import Contact from "./contact";
import Designs from "./works";
import Skills from './skills';
import { Container } from "react-bootstrap";


const downloadResume = () => {
    window.location.href = "https://drive.google.com/file/d/19xWmNiJ5-YsZlkgIG2iBPSJOg_MI63vx/view?usp=drivesdk";
};


class TypewriterText extends React.Component {
    state = {
        displayText: "",
        text: "KARTHIKA", // Define the text directly in state
        speed: 150, // Define speed directly
        index: 0
    };

    componentDidMount() {
        this.startTyping();
    }

    startTyping = () => {
        this.interval = setInterval(() => {
            const { index, text } = this.state;
            if (index < text.length) {
                this.setState((prevState) => ({
                    displayText: prevState.displayText + text[index],
                    index: prevState.index + 1
                }));
            } else {
                clearInterval(this.interval);
            }
        }, this.state.speed);
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return <span>{this.state.displayText}</span>;
    }
}


export default class About extends React.Component {

    render() {

        return (
            <>
                <section className="mt-5">
                    <Container>
                        <div className="about">

                            <div class="row">
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                                    <div className="profile-div">
                                        <img src={Profile} alt="img" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 content">
                                    <h1>Hello I'm <TypewriterText /></h1>
                                    <p>I’m a Front-End Developer with 8 months of experience in React, building dynamic UIs and integrating APIs. Passionate about crafting seamless user experiences with clean, efficient code If you need any with my help in your Project you can contact me. I'll give my best in your Project. </p>
                                    <button className="btn-1"  onClick={downloadResume}>View Resume</button>
                                </div>

                            </div>

                            <Project className="gap" />

                            <Designs />

                            <Skills/>

                            <Contact />

                        </div>
                    </Container>
                </section>
            </>
        )
    };
};

