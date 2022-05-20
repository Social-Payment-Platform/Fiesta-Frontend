import React from "react";
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Container, Row, Col, Form, Card, Nav } from "react-bootstrap";
import searchIcon from "../assets/search-icon.png"
import profileImage from "../assets/profile-image.jpg"
import bookmarkIcon from "../assets/bookmark.png"
import { Link } from "react-router-dom";

const findProfessional = () => {
    const skills = ['Photographer', 'Event Planner', 'Caterer', 'DJ', 'Chef', 'Decorator', 'Bouncer', 'Ushers', 'Baker']
     const businesses = [
        {
            id: 1,
            name: 'John Doe',
            skill: 'Photography',
            state: 'Lagos',
            country: 'Nigeria',
            profileImage: profileImage,
            description: 'My name is John, i come across as a down to earth yet highly skilled photoghapher..'
        },
        {
            id: 2,
            name: 'John Doe',
            skill: 'Photography',
            state: 'Lagos',
            country: 'Nigeria',
            profileImage: profileImage,
            description: 'My name is John, i come across as a down to earth yet highly skilled photoghapher..'
        },
        {
            id: 3,
            name: 'John Doe',
            skill: 'Photography',
            state: 'Lagos',
            country: 'Nigeria',
            profileImage: profileImage,
            description: 'My name is John, i come across as a down to earth yet highly skilled photoghapher..'
        },
        {
            id: 4,
            name: 'John Doe',
            skill: 'Photography',
            state: 'Lagos',
            country: 'Nigeria',
            profileImage: profileImage,
            description: 'My name is John, i come across as a down to earth yet highly skilled photoghapher..'
        }
     ]
    return (
        <>
            <Navbar />
            <div className="filter-section">
                <Container className="px-1">
                    <Row className="gx-5 mx-0">
                        <Col lg="6" className="order-lg-last mb-5 mb-lg-0">
                            <h2>Search by Name</h2>
                            <div className="position-relative mb-3">
                                <Form.Control type="text" className="search-box" placeholder="Enter name or profession" />
                                <img className="position-absolute search-icon" src={searchIcon} alt="search-icon" />
                            </div>
                            <div>
                                <p className="mb-2 popular">Popular professions:</p>
                                <p className="text-orange orange">Caterer, Event Planner, Photographer..</p>
                            </div>
                        </Col>
                        <Col lg="6">
                            <h2>Whom are you looking for?</h2>
                            <Form>
                                <Row>
                                    {skills.map((skill) => (
                                        <div key={skill} className="radio d-flex col-sm-6 col-xl-4">
                                            <Form.Check
                                                type="radio"
                                                id={skill}
                                                label={skill}
                                            />
                                        </div>
                                    ))}
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="skill-section">
                <Container className="px-2">
                    <div className="mx-auto skill-tab">
                        <Nav variant="pills" defaultActiveKey="link-1">
                            <Nav.Item>
                                <Nav.Link eventKey="link-1">Near you</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-2">Most Searched</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="link-3">Top Rated</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>
                    <Row xs={1} md={2} className="card-custom-gap">
                        {businesses.map((business) => (
                            <Col key={business.id}>
                                <Card>
                                    <Card.Body>
                                        <div className="mb-3 d-flex align-items-start justify-content-between">
                                            <img src={business.profileImage} alt='profile' className="d-lg-none" />
                                            <img src={bookmarkIcon} alt='bookmark icon' className="bookmark-icon d-lg-none" />
                                        </div>
                                        <div className="d-flex align-items-start">
                                            <img src={business.profileImage} alt='profile' className="me-lg-4 d-none d-lg-block" />
                                            <div className="me-lg-2 me-xl-5">
                                                <Card.Title>{business.name}</Card.Title>
                                                <Card.Text className="me-xxl-4 pe-xxl-1">
                                                    {business.description}
                                                </Card.Text>
                                            </div>
                                            <img src={bookmarkIcon} alt='bookmark icon' className="bookmark-icon d-none d-lg-block" />
                                        </div>
                                        <div className="d-lg-flex justify-content-between badges">
                                            <div className="mb-3 mb-lg-0">
                                                <span className="grey-badge me-3 me-lg-4">{business.skill}</span>
                                                <span className="grey-badge">{business.state}, {business.country}</span>
                                            </div>
                                            <Link to='#' className="text-orange text-decoration-none">View Profile</Link>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default findProfessional;
