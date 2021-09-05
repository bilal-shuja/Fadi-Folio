import React from "react";
import Card from "./Card";
import CardData from "./CardData";

const Service = () => {
  return (
    <div>
      <section className="services">
        <div className="my-5">
          <h1 className="text-center">Our Services</h1>
        </div>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {CardData.map((val, ind) => {
                  return (
                    <Card key={ind} cardimg={val.imgsrc} title={val.title} discription={val.discription}/>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
