import React, { useEffect } from "react";
import "./homePage.scss";
import video from "../../assets/video/katsinvd.mp4";
import Slider from "../../components/slider";
import { cuisineSlider, venueSlider } from "../../components/slider/mock";
import { scrollToSection } from "../../utils/scrollToSection";

import { useNavigate } from "react-router";

const HomePage = ({ sideRef }) => {
  const navigate = useNavigate();

  useEffect(() => {
    scrollToSection(sideRef);
  }, [sideRef]);

  const bookNow = () => {
    window.open(
      "https://restaurant.opentable.com/v2/",
      "_blank", // <- This is what makes it open in a new window.
    );
  };

  return (
    <div className="homePageWrapper">
      <div className="homePage">
        <video
          className="video-background"
          autoPlay
          muted
          loop
          playsInline
          preload={"metadata"}
        >
          <source src={video} type="video/mp4" />
        </video>
        <section className="section1">
          {/*<h3 className="animate-charcter">Katsin</h3>*/}
          {/*<div className="button" onClick={() => bookNow()}>*/}
          {/*  Book NoW*/}
          {/*</div>*/}
        </section>
      </div>
      <section className="section2">
        <div className="container">
          <Slider
            title={"Cuisine"}
            data={cuisineSlider}
            buttonValue="menu"
            onClick={() => navigate("/menu")}
          />
        </div>
      </section>
      {/*<div className="img-section">*/}
      {/*  <div className="container">*/}
      {/*    <div className="gradient-image">*/}
      {/*      <div className="bg"></div>*/}
      {/*      <img src={cocktail} alt="img" className="img-fluid img-gradient" />*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
      <section id="venue" className="sectionVanue">
        <div className="container">
          <Slider
            // title={"Gallery"}
            data={venueSlider}
            // buttonValue="Book a Table"
            onClick={() => bookNow()}
            className={"gallerySlider"}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
