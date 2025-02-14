import React, { useState, useEffect } from "react";
import './App.css';
import Nav from "./nav";
import About from "./about";
import Projects from "./projects";
import Works from "./works";
import Contact from "./contact";
import Footer from "./footer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { IoIosArrowUp } from "react-icons/io";
import Skills from "./skills";

export default function App() {
    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="app">
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/about" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </BrowserRouter>

            {/* Scroll-to-Top Button */}
            {showScroll && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    <IoIosArrowUp />
                </button>
            )}
        </div>
    );
}
