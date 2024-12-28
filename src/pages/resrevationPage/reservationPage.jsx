import React from 'react';
import './reservationPage.scss';
import Button from '../../components/button';

const ReservationPage = () => {
  const handleClick = () => {
    window.open(
      'https://www.opentable.com/restref/client/?restref=1323949&lang=en-US&ot_source=Restaurant%20website&corrid=e66c4cc3-0cde-4670-8a9b-dadfa75f931b',
      '_blank', // <- This is what makes it open in a new window.
    );
  };

  return (
    <div className="reservationPage pageWrapper">
      <div className="reservation-container">
        <div className="reservation-content">
          <h1 className="reservation-title">Reservation</h1>
          <p className="reservation-text">
            Reserve your table now for an unforgettable dining experience!
          </p>
          <Button onClick={handleClick}>Book Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ReservationPage;
