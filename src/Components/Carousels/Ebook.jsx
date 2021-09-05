import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Ebook() {
    return (
        <div>
            <Carousel>
            <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ebook/ebook1.png"
            alt=""
          />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ebook/ebook2.png"
            alt=""
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ebook/ebook3.png"
            alt=""
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ebook/ebook4.png"
            alt=""
          />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ebook/ebook5.png"
            alt=""
          />
          </div>
        </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Ebook
