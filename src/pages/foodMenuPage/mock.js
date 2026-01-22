import { v4 as uuid } from 'uuid';

// =================== APPETIZERS ===================
export const appetizers = [
  {
    id: uuid(),
    name: 'BEETROOT CARPACCIO (NEW)',
    type: 'V, GF',
    description: [
      { name: 'BEETROOT, truffle mayo, persimmon,' },
      { name: 'goat cheese, pine nuts, ponzu' },
    ],
    price: '22',
  },
  // {
  //   id: uuid(),
  //   name: 'Feta cheese with fresh pita',
  //   type: 'V',
  //   description: [
  //     { name: 'mint, tarragon, radish, olives,' },
  //     { name: 'fresh pita, Greek feta' },
  //   ],
  //   price: '16',
  // },
  {
    id: uuid(),
    name: 'KATSIN appetizer LARGE SET to share',
    type: 'V',
    description: [
      { name: 'Moutabal dip, Lobio dip, Labne dip,' },
      { name: 'hummus, feta cheese, pita, marinated olives' },
    ],
    price: '75',
  },
  {
    id: uuid(),
    name: 'Bluefin tuna carpaccio',
    type: 'GF',
    description: [{ name: 'bluefin tuna, ponzu, tobiko caviar' }],
    price: '27',
  },
  {
    id: uuid(),
    name: 'Beef carpaccio with fresh truffles (NEW)',
    description: [
      { name: 'beef tenderloin, focaccia croutons,' },
      { name: 'arugula, French dressing, ponzu, fresh truffles' },
    ],
    price: '33',
  },
  {
    id: uuid(),
    name: 'Tuna tartare',
    type: 'GF',
    description: [
      { name: 'tuna, capers, shallots, chives,' },
      { name: 'avocado mousse, kataifi pastry, tobiko caviar' },
    ],
    price: '26',
  },
  {
    id: uuid(),
    name: 'Salmon tartare',
    type: 'GF',
    description: [
      { name: 'salmon, cucumber, avocado,' },
      { name: 'shallot, chives, tamarind sauce, ponzu' },
    ],
    price: '21',
  },
  {
    id: uuid(),
    name: 'Baked oysters (NEW)',
    type: 'GF',
    description: [
      { name: 'Half dozen baked oysters with chili garlic sauce' },
    ],
    price: '32',
  },
  {
    id: uuid(),
    name: 'Chilled oysters',
    type: 'GF',
    description: [
      { name: 'Served with Tabasco, red vinegar, spicy aioli' },
    ],
    price: '28/52',
  },
];

// =================== SALADS ===================
export const salads = [
  {
    id: uuid(),
    name: 'Grilled shrimp (NEW)',
    description: [
      { name: 'spring mix, shrimp, cherry tomatoes,' },
      { name: 'sun dried tomatoes, French dressing,' },
      { name: 'spicy aioli, crunch' },
    ],
    price: '27',
  },
  {
    id: uuid(),
    name: 'Burrata',
    type: 'V, GF',
    description: [
      { name: 'burrata cheese, house made pesto,' },
      { name: 'crushed olives, ponzu' },
    ],
    price: '24',
  },
  {
    id: uuid(),
    name: 'Mozzarella avocado',
    type: 'V, GF',
    description: [
      { name: 'fresh mozzarella, cherry tomatoes,' },
      { name: 'avocado, spring mix, pine nuts, house made pesto' },
    ],
    price: '25',
  },
  {
    id: uuid(),
    name: 'Katsin Heirloom tomato',
    type: 'V, GF',
    description: [
      { name: 'heirloom tomatoes, feta,' },
      { name: 'ponzu bouquet of oils, olive, truffle' },
    ],
    price: '26',
  },
  {
    id: uuid(),
    name: 'Iceberg caesar',
    description: [
      { name: 'romaine lettuce, tarragon sauce,' },
      { name: 'parmesan cheese, bacon, crunch' },
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'Greek',
    type: 'V, GF',
    description: [
      { name: 'cucumbers, tomatoes, bell pepper,' },
      { name: 'olives, basil, French dressing, feta' },
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'VITELLO TONNATO (NEW)',
    type: '',
    description: [
      { name: 'SLICED ROAST BEEF, ARUGULA, ROMANO SALAD,' },
      { name: 'TOMATOES, QUINOA POPCORN, VITELLO TONNATO SAUCE' },
    ],
    price: '26',
  },
];

// =================== SPECIALTIES ===================
export const specialties = [
  {
    id: uuid(),
    name: 'Grilled lamb chops Moroccan style (NEW)',
    type: 'GF',
    description: [
      { name: 'lamb chops, baked quince or apple,' },
      { name: 'tzatziki, couscous tabbouleh' },
    ],
    price: '47',
  },
  {
    id: uuid(),
    name: 'Slow cooked beef cheeks',
    description: [
      { name: 'beef cheeks, Parmigiano gnocchi, wafu sauce' },
    ],
    price: '44',
  },
  {
    id: uuid(),
    name: 'SLOW COOKED 48 HRS WHOLE LAMB NECK',
    description: [
      { name: 'POTATO MOUSSE. BLACK GARLIC, TAHINI SAUCE, FLATBREAD, LETTUCE' },
    ],
    price: '69',
  },
  {
    id: uuid(),
    name: 'Grilled branzino filet',
    type: 'GF',
    description: [
      { name: 'branzino, tarragon sauce,' },
      { name: 'lemon and mixed greens' },
    ],
    price: '42',
  },
  {
    id: uuid(),
    name: 'GRILLED TROUT FILET (NEW)',
    description: [
      { name: 'RED TROUT FILET, ASPARAGUS, EDAMAME, LEMON' },
    ],
    price: '38',
  },
  {
    id: uuid(),
    name: 'Greek style mini beef kebabs',
    description: [
      { name: 'ground beef, tzatziki, herbs, zaatar spices, pita' },
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'Grilled chicken thighs',
    type: 'GF',
    description: [{ name: 'pita, herbs, pickles, pepper sauce' }],
    price: '35',
  },
  {
    id: uuid(),
    name: 'Cauliflower steak',
    type: 'GF, V, VG',
    description: [
      { name: 'cauliflower, avocado mousse,' },
      { name: 'black garlic tahini sauce, sriracha sauce, tonkatsu sauce' },
    ],
    price: '24',
  },
  {
    id: uuid(),
    name: 'PORK chop american kurobuta 16 OZ',
    price: '49',
  },
  {
    id: uuid(),
    name: 'Turf board',
    type: 'GF',
    description: [
      { name: 'Australian F1 wagyu steak, pork BBQ, grilled chicken, grilled lamb chops,' },
      { name: 'grilled vegetables' },
    ],
    price: '258',
  },
  {
    id: uuid(),
    name: 'GRILLED SEAFOOD PLATTER (NEW)',
    type: '',
    description: [
      { name: 'TIGER PRAWNS, MOROCCAN OCTOPUS, GARLIC SAUCE, LEMON' },
    ],
    price: '87',
  },
];

// =================== STEAKS ===================
export const steaksFromCharcoalOven = [
  { id: uuid(), name: 'USDA PRIME ANGUS BONE-IN RIBEYE, 18 OZ', type: 'GF', price: '86' },
  { id: uuid(), name: 'GRAIN FED RIBEYE FILET AUSTRALIAN F1 WAGYU 16 OZ', type: 'GF', price: '79' },
  { id: uuid(), name: 'ANGUS FILET MIGNON, 8 OZ', type: 'GF', price: '59' },
];

// =================== SAUCES ===================
export const favor = [
  { id: uuid(), name: 'Peppercorn', price: '4' },
  { id: uuid(), name: 'BBQ Sauce', price: '4' },
  { id: uuid(), name: 'Ranch', price: '4' },
  { id: uuid(), name: 'Truffle Mayo', price: '4' },
  { id: uuid(), name: 'Tzatziki', price: '4' },
];

// =================== SIDES ===================
export const sides = [
  { id: uuid(), name: 'Lobster Mashed Potatoes', type: 'GF', price: '26' },
  { id: uuid(), name: 'POTATOES WITH MUSHROOMS', type: 'GF', price: '28' },
  { id: uuid(), name: 'Asparagus', type: 'GF, V', price: '14' },
  { id: uuid(), name: 'Grilled Vegetables', type: 'GF, V, VG', price: '14' },
  { id: uuid(), name: 'French Fries', type: 'GF, V', price: '14' },
  { id: uuid(), name: 'Sautéed Mushrooms', type: 'GF, V', price: '15' },
  { id: uuid(), name: 'Bread Basket LG/SM', price: '6/4' },
];

// =================== DESSERT ===================
export const dessert = [
  { id: uuid(), name: 'Pahlava Cheesecake', price: '18' },
  { id: uuid(), name: 'Katsin Signature Medovik with Gelato (NEW)', price: '17' },
  { id: uuid(), name: "Chef's Special Carrot Cake", price: '17' },
  { id: uuid(), name: 'Dubai Chocolate Tart (NEW)', price: '19' },
  { id: uuid(), name: 'Seasonal Fruit Platter', price: '62' },
  {
    id: uuid(),
    name: 'Katsin Dessert Tower',
    description: [
      { name: 'Katsin dessert mix, ice cream,' },
      { name: 'fruits & berries served with nitro ice' },
    ],
    price: '150',
  },
  {
    id: uuid(),
    name: 'Pavlova Dessert Show (party of six+, charge per person)',
    description: [
      { name: 'meringue, homemade pastry cream,' },
      { name: 'mango-passion fruit sauce, berry sauce, berries, mint' },
    ],
    price: '35 PP',
  },
];

// // =================== Special weekend menu ===================
// export const specialWeekendMenu = [
//   {
//     id: uuid(),
//     name: 'Surf Board',
//     description: [
//       { name: 'Grilled branzino, grilled salmon, tiger prawns,' },
//       { name: 'octopus, baked oysters, grilled vegetables, sauces' },
//     ],
//     type: 'GF',
//     price: '276',
//   },
//   {
//     id: uuid(),
//     name: 'Chef’s Special Beef Shortribs 4 LB',
//     description: [
//       { name: 'marinated pickles and onion, tzatziki,' },
//       { name: 'grilled vegetables, BBQ sauce, lettuce' },
//     ],
//     price: '162',
//   },
// ];

// =================== MENU WRAPPER ===================
export const foodMenu = [
  { id: uuid(), title: 'APPETIZERS', type: appetizers },
  { id: uuid(), title: 'SALADS', type: salads },
  {
    id: uuid(),
    title: 'SPECIALTIES',
    description: 'Roasted in charcoal oven',
    type: specialties,
  },
  { id: uuid(), title: 'STEAKS FROM CHARCOAL OVEN', type: steaksFromCharcoalOven },
  { id: uuid(), title: 'SAUCES', type: favor },
  { id: uuid(), title: 'SIDES', type: sides },
  { id: uuid(), title: 'DESSERT', type: dessert },
  {
    id: uuid(),
    title: 'Special Weekend Menu',
    description: 'Set for group of 4',
    // type: specialWeekendMenu,
  },
];