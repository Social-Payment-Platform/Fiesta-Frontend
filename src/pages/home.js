import { Button } from "react-bootstrap";
import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import heroImage from "../assets/herosection.png";
import { Link } from "react-router-dom";

const home = () => {

    return (
        <>
            <Navbar />
            <section className="home">
                <div className="FiestaBio">
                    <h1>Get your events set on a smooth sail</h1>
                    <p>Browse and hire various professionals for your events, all in one place </p>
                    <div className="d-grid getStarted">
                        <Link  to="/sign-in"><Button size="lg" component="link">Get Started</Button></Link>
                    </div>
                </div>
                <div className="heroImageSection">
                    <img src={heroImage} alt="herosection" />
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default home;
