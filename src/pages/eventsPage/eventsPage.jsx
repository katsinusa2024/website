import React from 'react';
import './eventsPage.scss';
import Button from '../../components/button';
import { pastEventsMock, upcomingEventsMock } from './eventsMock';

const EventsPage = () => {
  const handleClick = () => {
    window.open(
      'https://www.opentable.com/restref/client/?restref=1323949&lang=en-US&ot_source=Restaurant%20website&corrid=e66c4cc3-0cde-4670-8a9b-dadfa75f931b',
      '_blank',
    );
  };

  const renderEvent = item => (
    <div className="event-container row" key={item.id}>
      <div className="col-4 col-sm-3 col-md-1">
        <div className="event-date">
          <div className={`name-of-month ${item.isRecurring ? 'isRecurring' : ''}`}>
            {item.isRecurring ? 'Every' : item.date.month}
          </div>
          <div className={`date-of-month ${item.isRecurring ? 'isRecurring' : ''}`}>
            {item.isRecurring
              ? item.title === 'MARJANA'
                ? 'Thu-Sun'
                : 'Fri - Sun'
              : item.date.day}
          </div>
        </div>
      </div>

      <div className="col-8 col-sm-9 col-md-4">
        <div className="event-img">
          <img src={item.imgUrl} alt={item.title} className="img-fluid" />
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

  return (
    <div className="eventsPage pageWrapper">
      <div className="container">
        {upcomingEventsMock.length > 0 && (
          <>
            <h1 className="mb-5 text-uppercase event-name">Upcoming Events</h1>
            {upcomingEventsMock.map(renderEvent)}
          </>
        )}

        {pastEventsMock.length > 0 && <>{pastEventsMock.map(renderEvent)}</>}
      </div>
    </div>
  );
};

export default EventsPage;
