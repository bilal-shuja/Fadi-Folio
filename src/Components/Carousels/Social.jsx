import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const Social = () => {
    return ( 
    <div>
        <Carousel>


            <Carousel.Item>
            <div className="CRM-Img" >
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/Soc1.png"
            alt=""
          />
          </div>
            </Carousel.Item>
            
            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/Soc2.png"
            alt=""
          />
          </div>
            </Carousel.Item>
            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/Soc3.png"
            alt=""
          />
          </div>
            </Carousel.Item>

            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/Soc4.png"
            alt=""
          />
          </div>
            </Carousel.Item>

            <Carousel.Item>
            <div className="CRM-Img">
          <img
            className="d-block w-100"
            src="assets/img/Ecomm/Soc5.png"
            alt=""
          />
          </div>
            </Carousel.Item>
        </Carousel>
    </div> 
    );
}
 
export default Social;