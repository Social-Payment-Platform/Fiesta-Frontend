import React from "react";
import ellipse from "../assets/ellipse.png";
import { FcGoogle } from "react-icons/fc";
import { FiInstagram, FiEye } from "react-icons/fi";
import Navbar from '../components/navbar';
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";

const start = () => {
  return (
    <>
      <Navbar/>
      <div className="sign-in">
      <Col className="form-section" xs={12} md={6}>
        <header>
          <h1>Hello there!</h1>
          <p>Please fill in your details to get started</p>
        </header>
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormControl type="text" placeholder="Enter your full name" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormControl type="email" placeholder="Enter your email address" />
          </FormGroup>

          <InputGroup className="mb-3 password" controlId="formBasicPassword">
            <FormControl type="password" placeholder="Enter your password" />
            <div className="show-icon">
              <FiEye />
            </div>
          </InputGroup>
          <FormGroup className="mb-3" controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Remember me" />
          </FormGroup>
          <div className="d-grid login">
            <Button size="lg">Sign in</Button>
          </div>

          <div className="d-flex alternative">
            <span style={{ width: "50%" }}>
              <hr />
            </span>
            <p> OR </p>
            <span style={{ width: "50%" }}>
              <hr />
            </span>
          </div>
          <section>
            <div className="d-grid social-button">
              <Button size="lg">
                <FcGoogle /> Sign up with Google
              </Button>
            </div>
            <div className="d-grid social-button">
              <Button size="lg">
                <FiInstagram />
                Sign up with Instagram
              </Button>
            </div>
            <div className="form-footer">
              <p>Already have an account? </p>
              <a href="/">Sign In</a>
            </div>
          </section>
        </Form>
      </Col>
      <Col className="ellipse-section" xs={0} md={6}>
        <img src={ellipse} alt="ellipse" />
        <div className="blur"></div>
      </Col>
    </div>
    </>
  );
};

export default start;
