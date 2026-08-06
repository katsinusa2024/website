import { v4 as uuid } from 'uuid';

import eventt from '../../assets/images/events/eventt.jpg';
import eventAll from '../../assets/images/events/eventAll.jpg';
import aug202 from '../../assets/images/events/salsa-oug20.png';
import aug13 from '../../assets/images/events/paris-oug13.jpeg';
// import june26 from '../../assets/images/events/june26.PNG';
import aug27 from '../../assets/images/events/vatche-oug27.png';
import aug20 from '../../assets/images/events/laverdat-oug20.png';
// import jul23 from '../../assets/images/events/jul23.JPEG';
import sep24 from '../../assets/images/events/greek-sep24.JPEG';

const now = new Date();

// 🔹 Original Events Array
const eventsMock = [
  {
    id: uuid(),
    title: 'Tyom',
    description: 'Live sound with his best live entertaining program',
    date: {}, // not needed for template
    imgUrl: eventt,
    isRecurring: true,
  },
  {
    id: uuid(),
    title: 'MARJANA',
    description: 'WITH HER BEST LIVE ENTERTAINING PROGRAM',
    date: {}, // not needed for template
    imgUrl: eventAll,
    isRecurring: true,
  },
  {
    id: uuid(),
    title: 'SALSA & BACHATA',
    description: 'LA VERDAD, DAISY MCMILLEN, DJ MARCO',
    date: { day: '20', month: 'Aug', year: '2026' },
    imgUrl: aug202,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
        'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '13', month: 'Aug', year: '2026' },
    imgUrl: aug13,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche & His Band',
    description: 'The Legendary Maestro of Mediterranean Music',
    date: { day: '27', month: 'Aug', year: '2026' },
    imgUrl: aug27,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'LA VERDAD',
    description: 'Latin Soul & Salsa',
    date: { day: '20', month: 'Aug', year: '2026' },
    imgUrl: aug20,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'GREEK NIGHT',
    description: 'Live Greek Music, Fine Dining, AUTHENTIC EXPERIENCE',
    date: { day: '24', month: 'Sep', year: '2026' },
    imgUrl: sep24,
    isRecurring: false,
  },
];

const formatDateString = ({ day, month, year }) => {
  const properMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();
  return new Date(`${properMonth} ${day}, ${year}`);
};

// 🔹 Separate Recurring Event Template
const recurringTemplates = eventsMock.filter(e => e.isRecurring);

// 🔹 Process only non-recurring events
const nonRecurringEvents = eventsMock
  .filter(e => !e.isRecurring)
  .map(e => ({
    ...e,
    eventDate: formatDateString(e.date),
  }));

// 🔹 Split into upcoming and past
const upcoming = nonRecurringEvents
  .filter(e => e.eventDate >= now)
  .sort((a, b) => a.eventDate - b.eventDate);

const past = nonRecurringEvents
  .filter(e => {
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
    return e.eventDate < now && e.eventDate >= twoMonthsAgo;
  })
  .sort((a, b) => b.eventDate - a.eventDate);

// 🔹 Final exports
export const upcomingEventsMock = [...recurringTemplates, ...upcoming];

export const pastEventsMock = [...past];
