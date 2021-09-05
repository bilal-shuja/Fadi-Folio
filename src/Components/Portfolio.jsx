import React from "react";
import Card from "react-bootstrap/Card";
import CRM from './Carousels/CRM';
import Ebook from './Carousels/Ebook';
import Ecommrce from './Carousels/Ecommorce';
import Food from './Carousels/Food';
import Social from './Carousels/Social';

const Portfolio = () => {
  return (
    <div>
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="title-box text-center">
                <h1 className="title-a">Portfolio</h1>
                <p className="subtitle-a">ACCOMPLISHMENTS</p>
                <div className="line-mf"></div>
              </div>
            </div>
          </div>

          <div className="row gy-4">
            <div className="col-md-4">
              <div className="card-1">
                <Card>
                  <CRM />
                  <Card.Body>
                    <Card.Title style={{ color: "blue" }}>
                      CRM Application
                    </Card.Title>
                    <Card.Text>
                      Customer relationship management (CRM)that allows
                      businesses both large and small to organise, automate, and
                      synchronise every facet of customer interaction.
                    </Card.Text>
                  </Card.Body>
                </Card>

                {/* <div className="work-box">
              <a href="assets/img/CRM/AllLogs.png" data-gall="portfolioGallery" className="venobox">
                <div className="work-img" id="CRM-img">
                    <img src="assets/img/CRM/AllLogs.png" alt="" className="img-fluid"  />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">CRM Application</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Mobile Application</span> 
                    </div>
                  </div>
                </div>
              </div>
              
            </div> */}
              </div>
            </div>

            <div className="col-md-4">
              <div className="card-1">
                <Card>
                  <Ebook />
                  <Card.Body>
                    <Card.Title style={{ color: "blue" }}>
                      Ebook Application
                    </Card.Title>
                    <Card.Text>
                      eBook reader or eBook apps are mobile software that helps
                      you read books wherever you are, with just your phone
                      screen. ePub reader Android & IOS users can access.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              {/* <div className="work-box">
              <a href="assets/img/work-2.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/work-2.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Loreda Cuno Nere</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>

            <div className="col-md-4">
              <div className="card-1">
                <div id="boxes">
                  <Card>
                    <Ecommrce />
                    <Card.Body>
                      <Card.Title style={{ color: "blue" }}>
                        Ecommerce Application
                      </Card.Title>
                      <Card.Text>
                        E-commerce (electronic commerce) is the buying and
                        selling of goods and services, over an electronic
                        network.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
              {/* <div className="work-box">
              <a href="assets/img/work-3.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/work-3.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Mavrito Lana Dere</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>

            <div className="col-md-4">
              <div className="card-1">
                <Card>
                  <Food />
                  <Card.Body>
                    <Card.Title style={{ color: "blue" }}>
                      Food Application
                    </Card.Title>
                    <Card.Text>
                      A food ordering application can be defined as software
                      that allows restaurant businesses to accept and manage
                      orders placed over the internet to there right
                      destinations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>

              {/* <div className="work-box">
              <a href="assets/img/work-4.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/work-4.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Bindo Laro Cado</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>

            <div className="col-md-4">
              <div className="card-1">
                <Card>
                  <Social />
                  <Card.Body>
                    <Card.Title style={{ color: "blue" }}>
                      Social Media Application
                    </Card.Title>
                    <Card.Text>
                      This Social Media application supports information
                      publishing and sharing (text, video, audio, photo), the
                      building of personal profiles.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
              {/* <div className="work-box">
              <a href="assets/img/work-5.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/work-5.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Studio Lena Mado</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2018</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            </div>

            {/* <div className="col-md-4">
            
             <div className="work-box">
              <a href="assets/img/work-6.jpg" data-gall="portfolioGallery" className="venobox">
                <div className="work-img">
                  <img src="assets/img/work-6.jpg" alt="" className="img-fluid" />
                </div>
              </a>
              <div className="work-content">
                <div className="row">
                  <div className="col-sm-8">
                    <h2 className="w-title">Studio Big Bang</h2>
                    <div className="w-more">
                      <span className="w-ctegory">Web Design</span> / <span className="w-date">18 Sep. 2017</span>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="w-like">
                      <a href="portfolio-details.html"> <span className="ion-ios-plus-outline"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div> 
          </div>
            */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
