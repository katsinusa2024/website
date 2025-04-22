import React from 'react';
import './setMenuPage.scss';
import event1 from '../../assets/images/setMenu/setmenu125$.JPG';
import event2 from '../../assets/images/setMenu/setmenu150$.JPG';

const SetMenuPage = () => {
  return (
    <div className="setMenuPage pageWrapper">
      <div className="container">
        <h1 className="mb-5 text-uppercase event-name">Set Menu</h1>
        <img src={event1} alt="Menu $125" className="img-fluid mb-5" />
        <img src={event2} alt="Menu $150" className="img-fluid" />
      </div>
    </div>
  );
};

export default SetMenuPage;
