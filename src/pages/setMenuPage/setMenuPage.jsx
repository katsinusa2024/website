import React from 'react';
import './setMenuPage.scss';
import setMenu2 from '../../assets/images/setMenu/set-menu130.jpg';
import setMenu3 from '../../assets/images/setMenu/set-menu160.jpg';

const SetMenuPage = () => {
  return (
    <div className="setMenuPage pageWrapper">
      <div className="container">
        <h1 className="mb-5 text-uppercase event-name">Set Menu</h1>
        <img src={setMenu2} alt="Menu $150" className="img-fluid mb-5" />
        <img src={setMenu3} alt="Menu $150" className="img-fluid" />
      </div>
    </div>
  );
};

export default SetMenuPage;
