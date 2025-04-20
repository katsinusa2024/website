import events1 from '../../assets/images/events/events1.jpg';
import events2 from '../../assets/images/events/events2.jpeg';
import events3 from '../../assets/images/events/events3.png';

export const eventsMock = [
  {
    id: '1',
    title: 'Paris Chansons',
    description:
      'A Beautiful Journey Through French Music Featuring Aznavour, Macias, Dassin,' +
      '                    Piaf, Zaz, Dalida, Adamo, and more — plus beloved Italian and Russian gypsy\n' +
      '                    classics.',
    date: {
      day: '22',
      month: 'Apr',
      year: '2025',
    },
    imgUrl: events1,
  },

  {
    id: '2',
    title: 'Henris Way Presents',
    description: 'The Gumbo Brothers featuring Apollo Jai. Good Vibes With a Beat you Can Feel',
    date: {
      day: '01',
      month: 'May',
      year: '2025',
    },
    imgUrl: events2,
  },
  {
    id: '3',
    title: 'Titiano',
    description: 'The Voice of Aznavour',
    date: {
      day: '04',
      month: 'May',
      year: '2025',
    },
    imgUrl: events3,
  },
];
