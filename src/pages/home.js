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
            <section className="home row">
                <div className="FiestaBio col-12 col-lg-6">
                    <h1>Get your events set on a smooth sail</h1>
                    <p>Browse and hire various professionals for your events, all in one place </p>
                    <div className="getStarted">
                        <Link  to="/sign-in">
                            <Button component="link" className="mb-4 mb-md-0">Get Started</Button>
                        </Link>
                    </div>
                </div>
                <div className="heroImageSection col-12 col-lg-6">
                    <img src={heroImage} alt="herosection" />
                </div>
            </section>
            <Footer/>
        </>
    );
};

export default home;
