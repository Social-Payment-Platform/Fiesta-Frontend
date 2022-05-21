import React, { useEffect } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Card from "../components/card";
import { AiOutlineStar, AiOutlineMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Button, Col, Container, Row } from "react-bootstrap";
import profileImage from "../assets/profile-image.jpg"
import Carousel from '../components/carousel';
import social1 from '../assets/social1.png';
import social2 from '../assets/social2.png'
import social3 from '../assets/social3.png'
import random1 from '../assets/random1.png'
import random2 from '../assets/random2.png'
import random3 from '../assets/random3.png'
import Payment from '../services/payment';

const categories = [
  {
    price: 100000,
    description: "This package involves an unlimited access to pictures to a number of 3 people and change of wears based on users choice",
    category: "Premium"
  },
  {
    price: 75000,
    description: "This package involves an unlimited access to pictures to a number of 3 people and change of wears based on users choice",
    category: "Standard"
  },
  {
    price: 50000,
    description: "This package involves an unlimited access to pictures to a number of 3 people and change of wears based on users choice",
    category: "Medium"
  },
  {
    price: "custom",
    description:
      "This package involves an unlimited access to pictures to a number of 3 people and change of wears based on users choice",
    category: "Custom",
  },
];

const ProfilePage = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handlePayment = async amount => {
    console.log('i am working')
    try {
      const response = await Payment.makePayment({ 
        phone: '+2341989289253',
        amount: amount,
        services: ['photography']
      })
      if (response.status === 200) {
        let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
        width=600,height=300,left=100,top=100`;

        window.open(response.data.paymentLink, 'Pay Fiesta', params);
      }
    } catch (e) {
      alert('An error occurred')
    }
  }
  
  return (
    <>
      <Navbar />
      <Container className="profile">
        <section className="banner mb-5">
          <div>
            <img src={profileImage} alt="photographer" />
          </div>
          <div>
            <h1>Mary-Jane</h1>
            <p>Photographer</p>
            <p>
              <GoLocation />
              Lagos, Nigeria
            </p>
            <div>
              <AiOutlineStar /> <AiOutlineStar /> <AiOutlineStar />{" "}
              <AiOutlineStar /> <AiOutlineStar />
            </div>
          </div>
          <div>
            <h5>
              <AiOutlineMail /> Contact Details
            </h5>
            <p>Gmail- johnphotos34@gmail.com</p>
            <p>Mobile- +234 90-892- 785-81</p>
            <div className="d-grid message">
              <Button size="lg" component="link">
                Send message
              </Button>
            </div>
          </div>
        </section>
        <section className="bio-section mb-5 w-50">
          <h3 className="mb-3">Biography</h3>
          <p>
            My name is John, i come across as a down-to-earth yet highly
            professional photographer. My writing is clever and imaginative, so
            also do i love to take creative intriuging and controversial images
            whether of animals, people or objects.
          </p>
        </section>
        <section className='services mb-5'>
          <h3 className='mb-3'>Services</h3>
          <Row xs={1} md={2} className='cards card-custom-gap'>
            {
              categories.map((category, index) => {
                return (
                  <Col key={index}>
                    <Card
                      price={category.price}
                      details={category.description}
                      track={category.category}
                      handleClick={() => handlePayment(category.price)}
                    />
                  </Col>
                )
              })
            }

          </Row>
        </section>
        <section className="projects mb-5">
          <h3 className="mb-3"> Top Projects</h3>
          <Row xs={1} md={2} className="cards card-custom-gap">
                <Col >
                <Carousel
                className="carousel"
                img1={social1}
                img2={social2}
                img3={social3}
              />
              <p>A pre-wedding shoot i worked on </p>
            </Col>
            <Col>
            <Carousel
                className="carousel"
                img1={random1}
                img2={random2}
                img3={random3}
              />
              <p>Random shoot </p>
            </Col>
          </Row>
        </section>
      </Container>
      <Footer />
    </>
  );
};

export default ProfilePage
