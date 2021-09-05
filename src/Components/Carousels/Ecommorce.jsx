import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Ecommrce() {
    return (
        <div>
        <Carousel>
            <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/ecomm1.png"
            alt=""
          />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/ecomm2.png"
            alt=""
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/ecomm3.png"
            alt=""
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/ecomm4.png"
            alt=""
          />
          </div>
        </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Ecommrce