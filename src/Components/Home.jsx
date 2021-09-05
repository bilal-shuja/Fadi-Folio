import React from "react";
import img from '../Images/Img1.svg'
import CommonPage from "./CommonPage";

const Home = () => {
  return (
    <div>
      <CommonPage
      name="Grow your business with"
      brandName = "Fahad Arif"
      paraline = "Your Imagination will become a reality"
      imgsrc={img}
      visit="/Service"
      btname="Get Started"

      />
    </div>
  );
};

export default Home;
