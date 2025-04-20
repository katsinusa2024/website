import React, { useEffect, useState } from 'react';
import './eventModal.scss';
import { NavLink } from 'react-router-dom';
import { eventsMock } from '../../pages/eventsPage/eventsMock';

export const MODAL_INTERVAL_MS = 0.01 * 60 * 1000;

const EventModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const lastClosed = parseInt(localStorage.getItem('lastModalClosedAt'), 10);
    const now = Date.now();

    if (isNaN(lastClosed) || now - lastClosed > MODAL_INTERVAL_MS) {
      const nextEvent = getNextUpcomingEvent();
      if (nextEvent) {
        setEvent(nextEvent);
        setShowModal(true);
      }
    }
  }, []);

  //Will work Without refreshing
  // useEffect(() => {
  //   const checkModal = () => {
  //     const lastClosed = parseInt(localStorage.getItem('lastModalClosedAt'), 10);
  //     const now = Date.now();
  //
  //     if (isNaN(lastClosed) || now - lastClosed > MODAL_INTERVAL_MS) {
  //       setShowModal(true);
  //     }
  //   };
  //
  //   checkModal(); // Initial check on mount
  //
  //   const interval = setInterval(checkModal, 60 * 1000); // Check every 1 minute
  //
  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, []);

  const handleClose = () => {
    setShowModal(false);
    localStorage.setItem('lastModalClosedAt', Date.now().toString());
    if (onClose) onClose(); // tell App.js to show the icon
  };

  const getNextUpcomingEvent = () => {
    const now = new Date();

    const sortedEvents = eventsMock
      .map(event => {
        const eventDate = new Date(`${event.date.month} ${event.date.day}, ${event.date.year}`);
        return { ...event, eventDate };
      })
      .filter(event => event.eventDate >= now)
      .sort((a, b) => a.eventDate - b.eventDate);

    return sortedEvents[0]; // Returns the next upcoming event
  };

  if (!event) return null;

  return (
    <>
      {showModal && (
        <div className="event-modal-overlay">
          <div className="event-modal">
            <button className="close-button" onClick={handleClose}>
              ×
            </button>
            <div className="event-content">
              <h1>An Evening You Won’t Want to Miss!</h1>
              <h1>{event.title}</h1>
              <p className="artists">{event.description}</p>
              <div className="katsin-logo">
                at <strong>Katsin</strong> Restaurant & Dining Bar
              </div>
              <NavLink className="book-now" to="/events" onClick={handleClose}>
                View Events
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventModal;
