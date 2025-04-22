import { v4 as uuid } from 'uuid';

import events1 from '../../assets/images/events/events1.jpg';
import events2 from '../../assets/images/events/events2.jpeg';
import events3 from '../../assets/images/events/events3.png';
import events4 from '../../assets/images/events/events4.JPG';
import eventt from '../../assets/images/events/eventt.JPG';
import eventAll from '../../assets/images/events/eventAll.JPG';
import events5 from '../../assets/images/events/events5.JPG';

const now = new Date();

// 🔹 Original Events Array
const eventsMock = [
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
      'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '15', month: 'May', year: '2025' },
    imgUrl: events1,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Henris Way Presents',
    description: 'The Gumbo Brothers featuring Apollo Jai. Good Vibes With a Beat you Can Feel',
    date: { day: '01', month: 'May', year: '2025' },
    imgUrl: events2,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Titiano',
    description: 'The Voice of Aznavour',
    date: { day: '04', month: 'May', year: '2025' },
    imgUrl: events3,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche',
    description: 'Legendary Vatche with Mediterranean Favorite Songs',
    date: { day: '08', month: 'May', year: '2025' },
    imgUrl: events4,
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
    title: 'Moelle',
    description: "Mother's Day with Moelle",
    date: { day: '11', month: 'May', year: '2025' },
    imgUrl: events5,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'MARJANA',
    description: 'WITH HER BEST LIVE ENTERTAINING PROGRAM',
    date: {}, // not needed for template
    imgUrl: eventAll,
    isRecurring: true,
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
