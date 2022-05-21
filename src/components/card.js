import { Button } from "react-bootstrap";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import { naira } from "../helpers/variables";

const Card = ({ track, price, details }) => {

  return (
    <>
    <section className="card-section">
      <div className="d-flex justify-content-between">
        <div className="me-3">
          <AiFillStar />
        </div>
        <div className="card-details">
          <h5>{track}</h5>
          <p>
            {details}
          </p>
          <div className="d-none d-lg-block">
            <div className="d-grid w-75">
                <Button size="lg" component="link" >
                  Buy Now
                </Button>
            </div>
          </div>
        </div>
        <p className="text-orange fw-bold fs-4 d-none d-lg-block">
          {price !== 'custom' && <span dangerouslySetInnerHTML={{__html: naira}} />}
          {price}
        </p>
      </div>
      <div className="d-flex d-lg-none justify-content-between align-items-center">
        <p className="text-orange fw-bold fs-4 mb-0">
          {price !== 'custom' && <span dangerouslySetInnerHTML={{__html: naira}} />}
          {price}
        </p>
        <Button size="lg" component="link" className="px-3 py-2">
          Buy Now
        </Button>
      </div>
      </section>
    </>
  );
};

export default Card;
