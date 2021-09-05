import React from "react";
import CommonPage from "./CommonPage";
import AboutImg from "../Images/Img2.svg";

const About = () => {
  return (
    <div>
      <CommonPage
        name="Welcome to About Page"
        paraline = "Your satisfaction is our priority"
        imgsrc={AboutImg}
        visit="/Contact"
        btname="Contact Now"
      />
    </div>
  );
};

export default About;
