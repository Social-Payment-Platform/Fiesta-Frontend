import React, { useContext } from 'react'
import { Nav, Container, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png";
import { Context } from '../context';
import profilePicture from "../assets/profile-picture.jpg"

const NavbarComponent = () => {
    const { user, userDetails } = useContext(Context)
    
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container className='px-1'>
                <Navbar.Brand href="/">
                    <img src={logo} alt="brand-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto align-items-lg-center">
                        <NavLink exact={true} to="/" className="px-lg-4 nav-link">Home</NavLink>
                        <NavLink className="px-lg-4 nav-link" to="/find-professional">
                            Find Professional
                        </NavLink>
                        <NavLink className="px-lg-4 nav-link" to="/list-business">
                            List Business
                        </NavLink>
                        {
                                user
                            ?
                                // if logged in
                                <>
                                    <div className='d-lg-none'>
                                        <img src={profilePicture} alt="profile" className='profile-picture' />
                                        <span className='text-grey text-capitalize'>{userDetails.username}</span>
                                    </div>
                                    <div className='d-none d-lg-block'>
                                        <span className='text-grey text-capitalize'>{userDetails.username}</span>
                                        <img src={profilePicture} alt="profile" className='profile-picture' />
                                    </div>
                                </>
                            :
                                // if not logged in
                                <>
                                    <NavLink className="px-lg-4 nav-link" to="/sign-in">Sign in</NavLink>
                                    <NavLink className="px-lg-4 nav-link sign-up" to="/sign-up">Sign up</NavLink>
                                </>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComponent