import React from "react";
import "./parkingPage.scss";
import loc from "../../assets/images/katsin-location.jpeg";

const ParkingPage = () => {
  return (
    <div className="parkingPage pageWrapper">
      <div className="container">
        <img
          src={loc}
          alt="img"
          className="img-fluid d-flex justify-content-center mx-auto"
        />
      </div>
    </div>
  );
};

export default ParkingPage;
