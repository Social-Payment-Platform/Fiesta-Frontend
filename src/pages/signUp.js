import React, { useEffect, useState } from "react";
import ellipse from "../assets/ellipse.png";
import { FcGoogle } from "react-icons/fc";
import { ImFacebook2 } from "react-icons/im";
import { FiEye, FiEyeOff} from "react-icons/fi";
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
import AuthService from "../services/auth";
import { useHistory } from "react-router-dom";

const user = {
  username: '',
  email: '',
  password: '',
  agree: false
}

const SignUp = () => {
  const [newUser, setNewUser] = useState(user)
  const [hidePassword, setHidePassword] = useState(true)
  const history = useHistory()

  useEffect(() =>{
    return () => { formReset() }
  }, [])  

  const handleChange = (e) => {
    const { name, value } = e.target;

      if (name === 'agree') {        
        setNewUser({
            ...newUser,
            [name]: !newUser.agree
        })
    } else {
        setNewUser({
            ...newUser,
            [name]: value
        })
    }
  }

  const formReset = () => {
    setNewUser(user)
  }

  const handleSubmit = async e => {
    e.preventDefault();

    const { username, email, password, agree } = newUser;
    
    const isFormValid = !!(
        username && email && password && agree
    ) 

    if (isFormValid) {
      try {           
          const response = await AuthService.createUser({ username, email, password })

          if (response.status === 201){
              history.push('/sign-in')
          }
          formReset()
      }
      catch (e) {
        alert('User already exists')
      }
    } else {
        alert('Ensure all fields are filled')
    }
  }

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
          <FormGroup className="mb-3" controlId="username">
            <FormControl type="text" placeholder="Enter your username" name="username" onChange={handleChange} />
          </FormGroup>
          <FormGroup className="mb-3" controlId="email">
            <FormControl type="email" placeholder="Enter your email address" name="email" onChange={handleChange} />
          </FormGroup>

          <InputGroup className="mb-3 password" controlId="password">
            <FormControl type={ hidePassword ? "password" : "text" } placeholder="Enter your password" name="password" onChange={handleChange} />
            <div className="show-icon" onClick={() => setHidePassword(!hidePassword)}>
              {
                  hidePassword 
                ?
                  <FiEye />
                :
                  <FiEyeOff />
              }
            </div>
          </InputGroup>
          <FormGroup className="mb-3" controlId="formBasicCheckbox">
            <FormCheck type="checkbox" label="Remember me" name="agree" onChange={handleChange} />
          </FormGroup>
          <div className="d-grid login">
            <Button size="lg" onClick={handleSubmit}>Sign up</Button>
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
                <ImFacebook2  />
                Sign up with Facebook
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

export default SignUp;
