import React from 'react';
import './setMenuPage.scss';
import setMenu1 from '../../assets/images/setMenu/setMenu110.jpg';
import setMenu2 from '../../assets/images/setMenu/setMenu125.jpg';
import setMenu3 from '../../assets/images/setMenu/setMenu150.jpg';

const SetMenuPage = () => {
  return (
    <div className="setMenuPage pageWrapper">
      <div className="container">
        <h1 className="mb-5 text-uppercase event-name">Set Menu</h1>
        <img src={setMenu1} alt="Menu $125" className="img-fluid mb-5" />
        <img src={setMenu2} alt="Menu $150" className="img-fluid mb-5" />
        <img src={setMenu3} alt="Menu $150" className="img-fluid" />
      </div>
    </div>
  );
};

export default SetMenuPage;
