import React, { useEffect, useState } from 'react';
import './eventModal.scss';
import { NavLink } from 'react-router-dom';

export const MODAL_INTERVAL_MS = 1 * 60 * 1000;

const EventModal = ({ onClose }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const lastClosed = parseInt(localStorage.getItem('lastModalClosedAt'), 10);
    const now = Date.now();

    if (isNaN(lastClosed) || now - lastClosed > MODAL_INTERVAL_MS) {
      setShowModal(true);
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
              <h1>Paris Chansons</h1>
              <p className="subtitle">
                A Beautiful Journey Through <span>French Music</span>
              </p>
              <p className="artists">
                Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — <br />
                plus beloved Italian and Russian gypsy classics.
              </p>
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
