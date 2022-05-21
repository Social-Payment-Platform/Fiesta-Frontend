import React, { useEffect, useState } from "react";
import ellipse from "../assets/ellipse.png";
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
		window.scrollTo(0, 0)
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
					<div className="d-grid social-button">
						<a href="https://www.facebook.com/v13.0/dialog/oauth?auth_type=rerequest&client_id=736688330797060&display=popup&redirect_uri=https%3A%2F%2Ffiesta-api.onrender.com%2Fuser%2Foauth-redirect&response_type=code&scope=email%2Cuser_friends" className="btn btn-primary btn-lg">
							<span className="d-flex align-items-center justify-content-center">
								<ImFacebook2 className="me-2" />
								Sign up with Facebook
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
						<FormCheck type="checkbox" className="form-text" label="I agree to the terms and conditions" name="agree" onChange={handleChange} />
					</FormGroup>
					<div className="d-grid login">
						<Button size="lg" onClick={handleSubmit}>Sign up</Button>
					</div>
						
					<div className="form-footer mt-3">
						<p>Already have an account? </p>
						<a href="/">Sign In</a>
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

export default SignUp;
