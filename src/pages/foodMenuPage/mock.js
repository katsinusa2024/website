import { v4 as uuid } from 'uuid';

export const appetizers = [
  {
    id: uuid(),
    name: 'Beetroot carpaccio',
    type: 'V, GF',
    description: [
      {
        name: 'BEETROOT, truffle mayo, persimmon,',
      },
      {
        name: 'goat cheese, pine nuts, ponzu',
      },
    ],
    price: '22',
  },
  {
    id: uuid(),
    name: 'feta cheese with fresh pita',
    type: 'V',
    description: [
      {
        name: 'mint, tarragon, radish, olives,',
      },
      {
        name: 'fresh pita, greek feta',
      },
    ],
    price: '16',
  },
  {
    id: uuid(),
    name: 'KATSIN appetizer LARGE SET to share',
    type: 'V',
    description: [
      {
        name: 'Moutabal DIP, Lobio dip, Labne dip,',
      },
      {
        name: 'hummus, FETA CHEESE, pita, marinated olives',
      },
    ],
    price: '75',
  },
  {
    id: uuid(),
    name: 'Bluefin tuna carpaccio',
    type: 'GF',
    description: [
      {
        name: 'bluefin tuna, ponzu, tobiko caviar',
      },
    ],
    price: '27',
  },
  {
    id: uuid(),
    name: 'Beef carpaccio with fresh truffles',
    description: [
      {
        name: 'beef tenderloin, focaccia croutons,',
      },
      {
        name: 'arugula, french dressing, ponzu, fresh truffles',
      },
    ],
    price: '33',
  },
  {
    id: uuid(),
    name: 'Spicy tuna and salmon crispy bites',
    type: 'GF',
    description: [
      {
        name: 'Fried japanese rice, salmon, tuna,',
      },
      {
        name: 'tom yUm SAUCE, tobiko caviar, jalapeno',
      },
    ],
    price: '19',
  },
  {
    id: uuid(),
    name: 'Tuna tartare',
    type: 'GF',
    description: [
      {
        name: 'tuna, capers, shallots, chives,',
      },
      {
        name: 'avocado mousse, kataifi pastry, tobiko caviar',
      },
    ],
    price: '26',
  },
  {
    id: uuid(),
    name: 'Salmon tartare',
    description: [
      {
        name: 'salmon, cucumber, avocado,',
      },
      {
        name: 'shallot, chives, tamarind sauce, ponzu',
      },
    ],
    price: '21',
  },
  {
    id: uuid(),
    name: 'Baked oysters',
    type: 'GF',
    description: [
      {
        name: 'Half dozen baked oysters with chilly garlic sauce',
      },
    ],
    price: '32',
  },
  {
    id: uuid(),
    name: 'Chilled oysters',
    type: 'GF',
    description: [
      {
        name: 'served with tobasco, red vinigar, spicy aiolI',
      },
    ],
    price: '28/52',
  },
];

export const salads = [
  {
    id: uuid(),
    name: 'Grilled shrimp',
    description: [
      {
        name: 'spring mix, shrimp, cherry tomatoes,',
      },
      {
        name: 'sun dried tomatoes, bell pepper, french dressing,',
      },
      {
        name: 'spicy aioli, crunch',
      },
    ],
    price: '27',
  },
  {
    id: uuid(),
    name: 'Burrata',
    type: 'V, GF',
    description: [
      {
        name: 'burrata cheese, house made pesto,',
      },
      {
        name: 'crushed olives, ponzu',
      },
    ],
    price: '24',
  },
  {
    id: uuid(),
    name: 'Mozzarella avocado',
    type: 'V, GF',
    description: [
      {
        name: 'fresh mozzarella, cherry tomatoes,',
      },
      {
        name: 'avocado, spring mix, pine nuts, house made pesto',
      },
    ],
    price: '25',
  },
  {
    id: uuid(),
    name: 'Katsin Heirloom tomato',
    type: 'V, GF',
    description: [
      {
        name: 'heirloom tomatoes, feta,',
      },
      {
        name: 'ponzu bouquet of oils, olive, smoked and truffle',
      },
    ],
    price: '26',
  },
  {
    id: uuid(),
    name: 'Iceberg caesar',
    description: [
      {
        name: 'romaine lettuce, tarragon sauce,',
      },
      {
        name: 'mint, parmesan cheese, bacon, crunch',
      },
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'Grilled beef',
    type: 'GF',
    description: [
      {
        name: 'Mixed greens, grilled beef, pickled cucumbers,',
      },
      {
        name: 'mushrooms, crispy potatoes, walnuts',
      },
    ],
    price: '29',
  },
  {
    id: uuid(),
    name: 'Greek',
    type: 'V, GF',
    description: [
      {
        name: 'Cucumbers, tomatoes, bell pepper,',
      },
      {
        name: 'olives, basil, french dressing, feta',
      },
    ],
    price: '23',
  },
];

export const specialties = [
  {
    id: uuid(),
    name: 'Grilled lamb chops Moroccan style',
    type: 'GF',
    description: [
      {
        name: 'lamb chops, baked quince or Apple,',
      },
      {
        name: 'tzatziki, couscous tabbouleh',
      },
    ],
    price: '47',
  },
  {
    id: uuid(),
    name: 'Slow cooked beef cheeks',
    description: [
      {
        name: 'beef cheeks, parmegiano gnocchi, wafu sauce',
      },
    ],
    price: '44',
  },
  {
    id: uuid(),
    name: 'Grilled branzino filet',
    type: 'GF',
    description: [
      {
        name: 'branzino, tarragon sauce,',
      },
      {
        name: 'lemon and mixed greens',
      },
    ],
    price: '42',
  },
  {
    id: uuid(),
    name: 'Grilled JUMBO tiger prawns',
    type: 'GF',
    description: [
      {
        name: 'tiger prawns, tarragon sauce, spinach, lemon',
      },
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'chilean seabass filet',
    type: 'GF',
    description: [
      {
        name: 'PATAGONIAN TOOTHFISH, Asian style sauce,',
      },
      {
        name: 'spinach, broccoli, edamame',
      },
    ],
    price: '56',
  },
  {
    id: uuid(),
    name: 'Atlantic salmon filet',
    type: 'gf',
    description: [
      {
        name: 'salmon, asparagus, edamame, lemon',
      },
    ],
    price: '38',
  },
  {
    id: uuid(),
    name: 'Moroccan octopus',
    type: 'gf',
    description: [
      {
        name: 'Grilled octopus, roMesco sauce,',
      },
      {
        name: 'confit potato, grilled spinach , truffle mayo',
      },
    ],
    price: '33',
  },
  {
    id: uuid(),
    name: 'Greek style mini beef kebabs',
    description: [
      {
        name: 'ground beef, tzatziki,',
      },
      {
        name: 'herbs, zaatar spices, pita',
      },
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'GRILLED CHICKEN BREAST',
    type: 'gf',
    description: [
      {
        name: 'POtatoes, chicken breast,',
      },
      {
        name: 'wafy sauce, mushroom sauce',
      },
    ],
    price: '35',
  },

  {
    id: uuid(),
    name: 'Cauliflower steak',
    type: 'GF, V, VG',
    description: [
      {
        name: 'cauliflower, avocado mousse,',
      },
      {
        name: 'black garlic tahini sauce, siracha sauce, tonkatsu sauce',
      },
    ],
    price: '24',
  },
  {
    id: uuid(),
    name: 'Chef’s Special BEEF SHORT RIBS 4 lb',
    description: [
      {
        name: 'marinated pickles and onion, tzatziki,',
      },
      {
        name: 'Grilled Vegetables, BBQ sauce, lettuce',
      },
    ],
    price: '162',
  },
];

export const surfTurf = [
  {
    id: uuid(),
    name: 'Turf board',
    type: 'GF',
    description: [
      {
        name: 'Australian Wagyu steak, Pork BBQ, grilled Lamb chops,',
      },
      {
        name: 'grilled vegetables, sauces',
      },
    ],
    price: '258',
  },
  {
    id: uuid(),
    name: 'surf board',
    type: 'GF',
    description: [
      {
        name: 'Grilled branzino, grilled salmon, Tiger prawns,',
      },
      {
        name: 'Octopus, baked oysters, grilled vegetables, sauces',
      },
    ],
    price: '276',
  },
];

export const steaksFromCharcoalOven = [
  {
    id: uuid(),
    name: 'USDA PRIME ANGUS RIBEYE FILET, 16 OZ',
    type: 'GF',
    // description: 'chickpea tahini dup, edamame, mushrooms, fresh herbs',
    price: '76',
  },
  {
    id: uuid(),
    name: 'grain fed RIBEYE FILET Australian f1 Wagyu 16OZ',
    type: 'GF',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '76',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS NEW YORK STRIP, 14 oz',
    type: 'GF',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '69',
  },
  {
    id: uuid(),
    name: 'ANGUS FILET MIGNON, 8 OZ',
    type: 'GF',
    // description:
    //   'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '59',
  },
  {
    id: uuid(),
    name: 'PORK chop american kurobuta 16 OZ',
    type: 'GF',
    // description:
    //   'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '49',
  },
];
export const favor = [
  {
    id: uuid(),
    name: 'PEPPERCORN',
    price: '4',
  },
  {
    id: uuid(),
    name: 'BLUE CHEESE',
    price: '4',
  },
  {
    id: uuid(),
    name: 'BBQ SAUCE',
    price: '4',
  },
  {
    id: uuid(),
    name: 'RUNCH',
    price: '4',
  },
  {
    id: uuid(),
    name: 'TRUFFLE MAYO',
    price: '4',
  },
  {
    id: uuid(),
    name: 'tzatziki',
    price: '4',
  },
];

export const sides = [
  {
    id: uuid(),
    name: 'LOBSTER MASHED POTATOES',
    type: 'GF',
    // description: '',
    price: '26',
  },
  {
    id: uuid(),
    name: 'ASPARAGUS with Hollandaise sauce',
    type: 'GF, V',
    // description: '',
    price: '19',
  },
  {
    id: uuid(),
    name: 'GRILLED VEGETABLES',
    type: 'GF, v, vg',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'TRUFFLE ORZO',
    type: 'v',
    // description: '',
    price: '22',
  },
  {
    id: uuid(),
    name: 'MAC & CHEESE',
    type: 'v',
    // description: '',
    price: '18',
  },
  {
    id: uuid(),
    name: 'FRENCH FRIES',
    type: 'GF, V',
    // description: '',
    price: '14',
  },
  {
    id: uuid(),
    name: 'BREAD BASKET LG/SM',
    // description: '',
    price: '6/4',
  },
];

export const dessert = [
  {
    id: uuid(),
    name: 'pahlava CHEESECAKE',
    // description: '',
    price: '18',
  },
  {
    id: uuid(),
    name: 'Katsin signature Medovik with gelato',
    // description: '',
    price: '17',
  },
  {
    id: uuid(),
    name: "chef's special carrot CAKE",
    // description: '',
    price: '17',
  },
  {
    id: uuid(),
    name: 'seasonal mousse cake',
    // description: '',
    price: '18',
  },
  {
    id: uuid(),
    name: 'dubai chocolate tart',
    // description: '',
    price: '19',
  },
  {
    id: uuid(),
    name: 'Seasonal Fruit platter',
    // description: '',
    price: '62',
  },
  {
    id: uuid(),
    name: 'Katsin Dessert and Fruit Platter',
    description: [
      {
        name: 'bite size desserts, ice cream,',
      },
      {
        name: "fruits & berry's served with nitro ice,",
      },
    ],
    price: '138',
  },
  {
    id: uuid(),
    name: 'Katsin Dessert tower',
    description: [
      {
        name: 'katsin Dessert mix, ice cream ,',
      },
      {
        name: "fruits & berry's served with nitro ice",
      },
    ],
    price: '150',
  },
  {
    id: uuid(),
    name: 'pavlova dessert show party of six and more , charge per person',
    description: [
      {
        name: 'meringue, homemade pastry cream,',
      },
      {
        name: 'mango-passion fruit sauce, berry sauce, berries, mint',
      },
    ],
    price: '35PP',
  },
];

export const foodMenu = [
  {
    id: uuid(),
    title: 'APPETIZERS',
    type: appetizers,
  },
  {
    id: uuid(),
    title: 'SALADS',
    type: salads,
  },
  {
    id: uuid(),
    title: 'SPECIALTIES',
    description: 'Roasted in charcoal oven',
    type: specialties,
  },
  {
    id: uuid(),
    title: 'Special Surf & Turf Combos',
    description: 'set for group of 4',
    type: surfTurf,
  },
  {
    id: uuid(),
    title: 'STEAKS FROM CHARCOAL OVEN',
    type: steaksFromCharcoalOven,
  },
  {
    id: uuid(),
    title: 'SAUCES',
    type: favor,
  },
  {
    id: uuid(),
    title: 'SIDES',
    type: sides,
  },
  {
    id: uuid(),
    title: 'DESSERT',
    type: dessert,
  },
];
