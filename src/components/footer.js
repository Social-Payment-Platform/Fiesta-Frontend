import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import circle from '../assets/circle.png'

const footer = () => {
    return (
        <footer>
            <Row className='g-4 g-sm-5'>
                <Col sm={6} lg={4}>
                    <p className='logo'>
                        <img src={circle} alt="logo" className='me-3' />
                        Fiesta
                    </p>
                    <p>Fiesta aims to let you find event specialist easily, saving users time and cost.</p>
                </Col>
                <Col sm={6} lg={3}>
                    <span className='footer-col-title'>About</span>
                    <ul>
                        <li>
                            <Link to="#">Our Story</Link>
                        </li>
                        <li>
                            <Link to="#">FAQ</Link>
                        </li>
                        <li>
                            <Link to="#">Terms of service</Link>
                        </li>
                    </ul>
                </Col>
                <Col sm={6} lg={3}>
                    <span className='footer-col-title'>Support</span>
                        <ul>
                            <li>
                                <Link to="#">support@fiesta.com</Link>
                            </li>
                        </ul>
                </Col>
                <Col>
                    <span className='footer-col-title'>Connect</span>
                    <ul>
                        <li>
                            <Link to="#">Facebook</Link>
                        </li>
                        <li>
                            <Link to="#">Twitter</Link>
                        </li>
                        <li>
                            <Link to="#">Instagram</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
            <p className='text-center footer-copyright'>2022 Fiesta | All Rights Reserved</p>
        </footer>
    )
}

export default footer