import React from 'react';
import './eventsPage.scss';
import event1 from '../../assets/images/events/setmenu125$.jpg'
import event2 from '../../assets/images/events/setmenu150$.jpg'

const EventsPage = () => {
  return (
    <div className="eventsPage pageWrapper">
      <div className="container">
        <h1 className="mb-5 text-uppercase event-name">Event menu</h1>
        <img src={event1} alt="img" className='img-fluid mb-5'/>
        <img src={event2} alt="img" className='img-fluid'/>
      </div>
    </div>
  );
};

export default EventsPage;
