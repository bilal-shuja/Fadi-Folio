import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Food = () => {
    return ( 
    <div>
        <Carousel>


            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/foo1.png"
            alt=""
          />
          </div>
            </Carousel.Item>
            
            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/foo2.png"
            alt=""
          />
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/foo3.png"
            alt=""
          />
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/foo4.png"
            alt=""
          />
          </div>
            </Carousel.Item>
        </Carousel>
    </div> 
    );
}
 
export default Food;