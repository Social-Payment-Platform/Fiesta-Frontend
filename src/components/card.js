import { Button } from "react-bootstrap";
import React from "react";
import { AiFillStar } from "react-icons/ai";

const Card = ({ track, price, details }) => {

  return (
    <>
    <section className="d-flex card-section">
      <div>
        <AiFillStar />
      </div>
      <div className="card-details">
        <h5>{track}</h5>
        <p>
          {details}
        </p>
        <div className="d-block">
          <div className="d-grid w-75">
            
              <Button size="lg" component="link" >
                Buy Now
              </Button>
          </div>
        </div>
      </div>
      <p className="text-orange fw-bold fs-4">{price}</p>
      </section>
    </>
  );
};

export default Card;
