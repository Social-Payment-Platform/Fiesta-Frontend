import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Card from '../components/card'
import { AiOutlineStar, AiOutlineMail } from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import profileImage from "../assets/profile-image.jpg"
import Carousel from '../components/carousel';
import social1 from '../assets/social1.png';
import social2 from '../assets/social2.jpg'
import social3 from '../assets/social3.jpg'
import random1 from '../assets/random1.jpg'
import random2 from '../assets/random2.png'
import random3 from '../assets/random3.jpg'
import { Button, Container } from 'react-bootstrap';

const profilePage = () => {
  
  return (
    <>
    <Navbar/>
      <Container className='profile'>
        <section className='banner mb-5'>
          <div>
           <img src={profileImage} alt="photographer" />
          </div>
          <div>
            <h1>John-Doe</h1>
            <p>Photographer</p>
            <p><GoLocation/>Lagos, Nigeria</p>
            <div>
              <AiOutlineStar />  <AiOutlineStar /> <AiOutlineStar/>  <AiOutlineStar/>  <AiOutlineStar/> 
            </div>
          </div>
          <div>
              <h5><AiOutlineMail/>  Contact Details</h5>
            <p>Gmail- johnphotos34@gmail.com</p>
            <p>Mobile- +234  90-892- 785-81</p>
            <div className="d-grid message">
              <Button size="lg" component="link" >
                Send message
              </Button>
          </div>
          </div>
        </section>
        <section className='bio-section mb-5 w-50'>
        <h3 className='mb-3'>Biography</h3>
            <p>My name is John, i come across as a down-to-earth yet highly professional photographer. My writing is clever and imaginative, so also do i love to take creative intriuging and controversial images whether of animals, people or objects.</p>
        </section>
        <section className='services mb-5'>
        <h3 className='mb-3'>Services</h3>
          <div className='cards'>
            <Card
              price="$350"
              details="This package involves an unlimited access to pictures to a number of 3
              people and change of wears based on users choice"
            track="Premium"
            />
            <Card
              price="$250"
              details="This package involves an unlimited access to pictures to a number of 3
              people and change of wears based on users choice"
            track="Standard"
            />
          </div>
          <div className='cards'>
          <Card
              price="$150"
              details="This package involves an unlimited access to pictures to a number of 3
              people and change of wears based on users choice"
            track="Medium"
            />
             <Card
              price="custom"
              details="This package involves an unlimited access to pictures to a number of 3
              people and change of wears based on users choice"
            track="Custom"
            />
            </div>
        </section>
        <section className='projects mb-5'>
        <h3 className='mb-3'> Top Projects</h3>
          <div className='m-5 slider'>
            < Carousel
              className= "carousel"
              img1={social1}
              img2={social2}
              img3={social3}
            />
            <Carousel
              className= "carousel"
             img1={random1}
             img2={random2}
             img3={random3}
            />
            </div>
        </section>
      </Container>
      <Footer/>
    </>
  )
}

export default profilePage