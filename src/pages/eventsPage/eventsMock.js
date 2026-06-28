import { v4 as uuid } from 'uuid';

import eventt from '../../assets/images/events/eventt.jpg';
import eventAll from '../../assets/images/events/eventAll.jpg';
import fionamay28 from '../../assets/images/events/fionamay28.png';
import parisjune11 from '../../assets/images/events/parisJune11.JPEG';
import june26 from '../../assets/images/events/june26.PNG';
import jun30 from '../../assets/images/events/jun30.jpeg';
import jul16 from '../../assets/images/events/jul16.JPEG';
import jul23 from '../../assets/images/events/jul23.JPEG';

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
    title: 'Fiona Ma',
    description: 'Please join us for a special reception to support. FOR LT. GOVERNOR 2026',
    date: { day: '28', month: 'May', year: '2026' },
    imgUrl: fionamay28,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
        'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '11', month: 'Jun', year: '2026' },
    imgUrl: parisjune11,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche',
    description: 'The Legendary Maestro of Mediterranean Music',
    date: { day: '30', month: 'Jun', year: '2026' },
    imgUrl: jun30,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'WORLD CUP 2026',
    description: 'WATCH PARTY\n' +
        'LIVE ON THE BIG SCREENS AT KATSIN',
    date: { day: '26', month: 'Jun', year: '2026' },
    imgUrl: june26,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'LA VERDAD',
    description: 'Free Event',
    date: { day: '16', month: 'Jul', year: '2026' },
    imgUrl: jul16,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'FRENCH MUSIC',
    description: 'Aznavour, Macias, Dassin,\n' +
        'Piaf, Zaz, Dalida, Adamo and more plus beloved Italian and Russian gypsy classics',
    date: { day: '23', month: 'Jul', year: '2026' },
    imgUrl: jul23,
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
