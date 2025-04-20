import React from 'react';
import './eventsPage.scss';
import event1 from '../../assets/images/events/setmenu125$.JPG';
import event2 from '../../assets/images/events/setmenu150$.JPG';
import Button from '../../components/button';
import { eventsMock } from './eventsMock';

const EventsPage = () => {
  const handleClick = () => {
    window.open(
      'https://www.opentable.com/restref/client/?restref=1323949&lang=en-US&ot_source=Restaurant%20website&corrid=e66c4cc3-0cde-4670-8a9b-dadfa75f931b',
      '_blank', // <- This is what makes it open in a new window.
    );
  };

  return (
    <div className="eventsPage pageWrapper">
      <div className="container">
        <h1 className="mb-5 text-uppercase event-name">Events</h1>

        {eventsMock.map((item, index) => {
          return (
            <div className="event-container row" key={item.id}>
              <div className="col-2 col-md-1">
                <div className="event-date">
                  <div className="name-of-month">{item.date.month}</div>
                  <div className="date-of-month">{item.date.day}</div>
                </div>
              </div>
              <div className="col-10 col-md-4">
                <div className="event-img">
                  <img src={item.imgUrl} alt="img" className="img-fluid" />
                </div>
              </div>

              <div className="col-12 col-md-5 mt-3 mt-md-0">
                <div className="event-description">
                  <h2 className="text-center text-md-start mb-4">{item.title}</h2>
                  <p>{item.description}</p>
                </div>
              </div>

              <div className="col-12 col-md-2 mt-3 mt-md-0">
                <Button onClick={handleClick} className="ms-md-auto d-flex">
                  Book now
                </Button>
              </div>
            </div>
          );
        })}
        <h1 className="mb-5 text-uppercase event-name">Event menu</h1>
        <img src={event1} alt="img" className="img-fluid mb-5" />
        <img src={event2} alt="img" className="img-fluid" />
      </div>
    </div>
  );
};

export default EventsPage;
