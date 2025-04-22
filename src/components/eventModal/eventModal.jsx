import React, { useEffect, useState } from 'react';
import './eventModal.scss';
import { NavLink } from 'react-router-dom';
import { upcomingEventsMock } from '../../pages/eventsPage/eventsMock';

export const MODAL_INTERVAL_MS = 2 * 60 * 1000;

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

  // const getNextUpcomingEvent = () => {
  //   const now = new Date();
  //
  //   // Normalize eventDate
  //   const events = upcomingEventsMock.map(event => {
  //     const eventDate =
  //       event.eventDate || new Date(`${event.date.month} ${event.date.day}, ${event.date.year}`);
  //     return { ...event, eventDate };
  //   });
  //
  //   // Only include events in the future
  //   const futureEvents = events.filter(e => e.eventDate >= now);
  //
  //   // Sort by date ascending
  //   const sorted = futureEvents.sort((a, b) => a.eventDate - b.eventDate);
  //
  //   // Group events by date string
  //   const groupedByDate = sorted.reduce((acc, event) => {
  //     const key = event.eventDate.toDateString();
  //     if (!acc[key]) acc[key] = [];
  //     acc[key].push(event);
  //     return acc;
  //   }, {});
  //
  //   const sortedDates = Object.keys(groupedByDate)
  //     .map(dateStr => new Date(dateStr))
  //     .sort((a, b) => a - b);
  //
  //   for (const date of sortedDates) {
  //     const eventsOnDate = groupedByDate[date.toDateString()];
  //     const dayOfWeek = date.getDay(); // 0 = Sunday, 6 = Saturday
  //
  //     const nonRecurring = eventsOnDate.filter(e => !e.isRecurring);
  //     const recurring = eventsOnDate.filter(e => e.isRecurring);
  //
  //     // ✅ If it's Fri/Sat/Sun and has non-recurring event — show that one
  //     if ([5, 6, 0].includes(dayOfWeek) && nonRecurring.length > 0) {
  //       return nonRecurring[0];
  //     }
  //
  //     // ✅ If it's Fri/Sat/Sun and no non-recurring — show recurring
  //     if ([5, 6, 0].includes(dayOfWeek) && recurring.length > 0) {
  //       return recurring[0];
  //     }
  //
  //     // ✅ If it's Mon–Thu but there is a non-recurring event — allow it
  //     if (![5, 6, 0].includes(dayOfWeek) && nonRecurring.length > 0) {
  //       return nonRecurring[0];
  //     }
  //
  //     // ❌ Skip other cases
  //   }
  //
  //   return null;
  // };

  const getNextUpcomingEvent = () => {
    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const today = now.getDay(); // 0 = Sun, ..., 6 = Sat

    // STEP 1: Separate events
    const tyom = upcomingEventsMock.find(e => e.title.toLowerCase() === 'tyom');
    const marjana = upcomingEventsMock.find(e => e.title.toLowerCase() === 'marjana');
    const nonRecurring = upcomingEventsMock
      .filter(e => !e.isRecurring && e.date?.day && e.date?.month && e.date?.year)
      .map(e => ({
        ...e,
        eventDate: new Date(`${e.date.month} ${e.date.day}, ${e.date.year}`),
      }))
      .filter(e => e.eventDate >= now)
      .sort((a, b) => a.eventDate - b.eventDate);

    // STEP 2: Check if any non-recurring events exist this month
    const hasEventThisMonth = nonRecurring.some(e => {
      const d = e.eventDate;
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });

    // STEP 3: Priority order
    // → First valid upcoming non-recurring event
    if (nonRecurring.length > 0) {
      return nonRecurring[0];
    }

    // → If no event this month, fallback logic
    if (!hasEventThisMonth) {
      if ([5, 6, 0].includes(today)) {
        // Fri/Sat/Sun
        return tyom || null;
      } else {
        // Mon–Thu
        return marjana || null;
      }
    }

    return null;
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
