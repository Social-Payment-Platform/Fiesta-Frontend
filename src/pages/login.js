import React, { useContext, useEffect, useState } from "react";
import ellipse from "../assets/ellipse.png";
import { ImFacebook2 } from "react-icons/im";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  InputGroup,
} from "react-bootstrap";
import Navbar from '../components/navbar';
import AuthService from "../services/auth";
import { useHistory } from "react-router-dom";
import { Context } from "../context";

const userObject = {
  email: '',
  password: ''
}

const LogIn = () => {
  const [user, setUser] = useState(userObject);
  const [hidePassword, setHidePassword] = useState(true);
  const history = useHistory();
  const { actions } = useContext(Context)

  useEffect(() =>{
		window.scrollTo(0, 0)
		return () => { formReset() }
	}, [])

  const handleChange = (e) => {
	const { name, value } = e.target;

	setUser({ ...user, [name]: value });
  }

  const formReset = () => {
	setUser(userObject)
  }

  const handleSubmit = async e => {
	e.preventDefault();

	const { email, password } = user;
	
	const isFormValid = !!(
		email && password
	) 

	if (isFormValid) {
	  	try {           
			const response = await AuthService.loginUser({ email, password })

			if (response.status === 200){
				actions.login(response.data)
				history.push('/')
			}
			formReset()
		}
		catch (e) {
			alert('User does not exist')
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
						<h1>Welcome back</h1>
						<p>Please fill in your details to sign in</p>
					</header>
					<Form>
						<div className="d-grid social-button">
							<a href="https://www.facebook.com/v13.0/dialog/oauth?auth_type=rerequest&client_id=736688330797060&display=popup&redirect_uri=https%3A%2F%2Ffiesta-api.onrender.com%2Fuser%2Foauth-redirect&response_type=code&scope=email%2Cuser_friends" className="btn btn-primary btn-lg">
								<span className="d-flex align-items-center justify-content-center fs-5">
									<ImFacebook2 className="me-2" />
								Sign in with Facebook
								</span>
							</a>
						</div>

						<div className="d-flex alternative mb-3">
							<span style={{ width: "50%" }}>
								<hr />
							</span>
							<p> OR </p>
							<span style={{ width: "50%" }}>
								<hr />
							</span>
						</div>

						<FormGroup className="mb-3" controlId="formBasicEmail">
							<FormControl type="email" placeholder="Enter your email address" name="email" onChange={handleChange} />
						</FormGroup>

						<InputGroup className="mb-3 password" controlId="formBasicPassword">
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
							<FormCheck type="checkbox" className="form-text" label="Remember me" />
						</FormGroup>
						<div className="d-grid login">
							<Button size="lg" onClick={handleSubmit}>Sign in</Button>
						</div>

						<div className="form-footer mt-3">
							<p>Don't have an account? </p>
							<a href="/sign-up">Sign Up</a>
						</div>
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

export default LogIn;
