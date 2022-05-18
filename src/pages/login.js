import React from "react";
import ellipse from "../assets/ellipse.png";
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
} from "react-bootstrap";

const start = () => {
  return (
    <div className="sign-in">
      <Col className="form-section" xs={12} md={6}>
        <nav>
          <img src={ellipse} alt="Fiesta" />
          <h4>Fiesta</h4>
        </nav>
        <header>
          <h1>Welcome back</h1>
          <p>Please fill in your details to sign in</p>
        </header>
        <Form>
          <FormGroup className="mb-3" controlId="formBasicEmail">
            <FormControl type="email" placeholder="Enter your email address" />
          </FormGroup>

          <FormGroup className="mb-3" controlId="formBasicPassword">
            <FormControl type="password" placeholder="Enter your password" />
          </FormGroup>
          <FormGroup className="mb-3" controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Remember me" />
          </FormGroup>
          <div className="d-grid">
          <Button  size="lg">
            Sign in
          </Button>
         </div>
        </Form>
      </Col>
      <Col className="ellipse-section" xs={0} md={6}>
        <img src={ellipse} alt="ellipse" />
        <div className="blur"></div>
      </Col>
    </div>
  );
};

export default start;
