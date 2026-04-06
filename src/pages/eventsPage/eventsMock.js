import { v4 as uuid } from 'uuid';

import events1 from '../../assets/images/events/Katsin 1-29-26.jpg';
import eventt from '../../assets/images/events/eventt.jpg';
import eventAll from '../../assets/images/events/eventAll.jpg';
import mediterranean from '../../assets/images/events/mediterranean.PNG';
import vatchejan22 from '../../assets/images/events/vatche-jan-22.PNG';
import jackJR0120 from '../../assets/images/events/Katsin.Jack.Jr.1.20.26.8pm.JPEG';
import laverdadfeb19 from '../../assets/images/events/laverdad.PNG';
import paris0305 from '../../assets/images/events/paris0305.jpeg'
import laverdadApril from '../../assets/images/events/laverdad-april-8.JPG';
import vatcheMarch from '../../assets/images/events/vatche-march-25.PNG';
import paris0430 from '../../assets/images/events/paris0430.JPEG'

const now = new Date();

// 🔹 Original Events Array
const eventsMock = [
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
      'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '29', month: 'Jan', year: '2026' },
    imgUrl: events1,
    isRecurring: false,
  },
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
    title: 'Mediterranean Night',
    description:
        'Featuring HeartBeat dj',
    date: { day: '15', month: 'Jan', year: '2026' },
    imgUrl: mediterranean,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche',
    description: 'A Night of Mediterranean Favorite Songs',
    date: { day: '22', month: 'Jan', year: '2026' },
    imgUrl: vatchejan22,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Jack Jr.',
    description: 'Comedy & Fun',
    date: { day: '20', month: 'Jan', year: '2026' },
    imgUrl: jackJR0120,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'LA VERDAD',
    description: 'GABRIELITOS BIRTHDAY W/SPECIAL GUEST',
    date: { day: '19', month: 'Feb', year: '2026' },
    imgUrl: laverdadfeb19,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
        'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '05', month: 'March', year: '2026' },
    imgUrl: paris0305,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'LA VERDAD',
    description: '',
    date: { day: '08', month: 'Apr', year: '2026' },
    imgUrl: laverdadApril,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche & Live Bound',
    description: 'A Night of Mediterranean Melodies',
    date: { day: '25', month: 'March', year: '2026' },
    imgUrl: vatcheMarch,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
        'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '30', month: 'Apr', year: '2026' },
    imgUrl: paris0430,
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
