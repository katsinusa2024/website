import { v4 as uuid } from 'uuid';

import events1 from '../../assets/images/events/Katsin 1-29-26.jpg';
// import events2 from '../../assets/images/events/events2.jpeg';
// import events3 from '../../assets/images/events/events3.png';
import events4 from '../../assets/images/events/events4.jpg';
import eventt from '../../assets/images/events/eventt.jpg';
import eventAll from '../../assets/images/events/eventAll.jpg';
import events5 from '../../assets/images/events/events5.jpg';
import revertedPoster from '../../assets/images/events/Reverted_Poster-min.png';
import performigLive from '../../assets/images/events/performing-live.jpg';
import jackjr from '../../assets/images/events/jackjr.jpg';
import henris2 from '../../assets/images/events/event6.jpg';
import henrisWay2 from '../../assets/images/events/henris-way2.PNG';
import vatche2 from '../../assets/images/events/VATCHE-1.png';
import jackict from '../../assets/images/events/jackoct.jpeg';
import laverdad from '../../assets/images/events/laverdadoct30.JPG';
import jacknov18 from '../../assets/images/events/jacknov18.jpeg';
import mediterranean from '../../assets/images/events/mediterranean.PNG';

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
  {
    id: uuid(),
    title: 'ALLIGATOR BEACH',
    description: 'A high energy funky NOLA party band at KATSIN',
    date: { day: '29', month: 'May', year: '2025' },
    imgUrl: revertedPoster,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'PERFORMING LIVE',
    description: 'MAIYA SYKES & LEEMO, Featuring An All Star Band',
    date: { day: '22', month: 'May', year: '2025' },
    imgUrl: performigLive,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche',
    description: 'Legendary Vatche with Mediterranean Favorite Songs',
    date: { day: '12', month: 'Jun', year: '2025' },
    imgUrl: events4,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Jack Jr. & MAZ JOBRANI',
    description: 'Comedy & Fun',
    date: { day: '10', month: 'Jun', year: '2025' },
    imgUrl: jackjr,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Henris Way Presents',
    description: 'EMI SECREST NIC JACKSON',
    date: { day: '5', month: 'Jun', year: '2025' },
    imgUrl: henris2,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Vatche',
    description: 'Legendary Vatche with Mediterranean Favorite Songs',
    date: { day: '24', month: 'Jul', year: '2025' },
    imgUrl: events4,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Jack Jr. & MAZ JOBRANI',
    description: 'Comedy & Fun',
    date: { day: '20', month: 'Jul', year: '2025' },
    imgUrl: jackjr,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Henris Way Presents',
    description: 'Nick jackson & Sierra Sellers. Brian Collier feat Live Band',
    date: { day: '26', month: 'Jun', year: '2025' },
    imgUrl: henrisWay2,
    isRecurring: false,
  },
  // {
  //   id: uuid(),
  //   title: 'Paris Chansons',
  //   description:
  //     'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
  //   date: { day: '10', month: 'Jul', year: '2025' },
  //   imgUrl: events1,
  //   isRecurring: false,
  // },
  // {
  //   id: uuid(),
  //   title: 'Paris Chansons',
  //   description:
  //     'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
  //   date: { day: '14', month: 'Aug', year: '2025' },
  //   imgUrl: paris2,
  //   isRecurring: false,
  // },
  {
    id: uuid(),
    title: 'Vatche',
    description: 'Legendary Vatche with Mediterranean Favorite Songs',
    date: { day: '20', month: 'Aug', year: '2025' },
    imgUrl: vatche2,
    isRecurring: false,
  },
  // {
  //   id: uuid(),
  //   title: 'Paris Chansons',
  //   description:
  //     'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
  //   date: { day: '11', month: 'Sep', year: '2025' },
  //   imgUrl: parissep,
  //   isRecurring: false,
  // },
  {
    id: uuid(),
    title: 'Jack Jr. & MAZ JOBRANI',
    description: 'Comedy & Fun',
    date: { day: '07', month: 'Oct', year: '2025' },
    imgUrl: jackict,
    isRecurring: false,
  },
  // {
  //   id: uuid(),
  //   title: 'Paris Chansons',
  //   description:
  //     'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
  //   date: { day: '23', month: 'Oct', year: '2025' },
  //   imgUrl: parisoct23,
  //   isRecurring: false,
  // },
  {
    id: uuid(),
    title: 'LA VERDAD',
    description: 'FREE CONCERT',
    date: { day: '30', month: 'Oct', year: '2025' },
    imgUrl: laverdad,
    isRecurring: false,
  },
  {
    id: uuid(),
    title: 'Jack Jr. & MAZ JOBRANI',
    description: 'Comedy & Fun',
    date: { day: '18', month: 'Nov', year: '2025' },
    imgUrl: jacknov18,
    isRecurring: false,
  },
  // {
  //   id: uuid(),
  //   title: 'Paris Chansons',
  //   description:
  //       'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin, Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy classics.',
  //   date: { day: '20', month: 'Nov', year: '2025' },
  //   imgUrl: chansonNov20,
  //   isRecurring: false,
  // },
  {
    id: uuid(),
    title: 'Mediterranean Night',
    description:
        'Featuring HeartBeat dj',
    date: { day: '15', month: 'Jan', year: '2026' },
    imgUrl: mediterranean,
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
