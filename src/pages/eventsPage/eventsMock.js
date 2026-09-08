import { v4 as uuid } from 'uuid';

import eventt from '../../assets/images/events/eventt.jpg';
import eventAll from '../../assets/images/events/eventAll.jpg';
import sep24 from '../../assets/images/events/greek-sep24.JPEG';
import sep10 from '../../assets/images/events/paris-sep-10.jpg';
import sep29 from '../../assets/images/events/jack-sep-12.jpeg';
import sep17 from '../../assets/images/events/vatche-sep17.JPEG';

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
    title: 'Vatche & His Band',
    description: 'The Legendary Maestro of Mediterranean Music',
    date: { day: '17', month: 'Sep', year: '2026' },
    imgUrl: sep17,
    isRecurring: false,
    eventUrl: "https://www.opentable.com/booking/experiences-availability?rid=1323949&restref=1323949&experienceId=793227&utm_source=external&utm_medium=referral&utm_campaign=shared"
  },
  {
    id: uuid(),
    title: 'GREEK NIGHT',
    description: 'Live Greek Music, Fine Dining, AUTHENTIC EXPERIENCE',
    date: { day: '24', month: 'Sep', year: '2026' },
    imgUrl: sep24,
    isRecurring: false,
    eventUrl: "https://www.opentable.com/booking/experiences-availability?rid=1323949&restref=1323949&experienceId=778335&utm_source=external&utm_medium=referral&utm_campaign=shared"
  },
  {
    id: uuid(),
    title: 'Paris Chansons',
    description:
        'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
    date: { day: '10', month: 'Sep', year: '2026' },
    imgUrl: sep10,
    isRecurring: false,
    eventUrl: "https://www.opentable.com/booking/experiences-availability?rid=1323949&restref=1323949&experienceId=785193&utm_source=external&utm_medium=referral&utm_campaign=shared"
  },
  {
    id: uuid(),
    title: 'Jack Jr',
    description: 'Jack Assadourian is a comedian of Armenian and Mexican descent who has gained popularity for his unique perspective and hilarious observations on life.',
    date: { day: '29', month: 'Sep', year: '2026' },
    imgUrl: sep29,
    isRecurring: false,
    eventUrl: "https://www.tixr.com/groups/jackjrcomic/events/jack-jr-at-katsin-in-glendale-september-29th-202884"
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
