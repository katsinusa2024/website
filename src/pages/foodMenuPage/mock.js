import { v4 as uuid } from 'uuid';

export const appetizers = [
  {
    id: uuid(),
    name: 'Beetroot carpaccio',
    type: 'V, GF',
    description: [
      {
        name: 'BEETROOT, truffle mayo, persimmon',
      },
      {
        name: 'goat cheese , pine nuts , ponzu'
      }
    ],
    price: '18',
  },
  {
    id: uuid(),
    name: 'feta cheese with fresh pita',
    type: 'V',
    description: [
      {
        name: 'mint,tarragon, raddish,olives,',
      },
      {
        name: 'fresh pita , greek feta',
      },
    ],
    price: '16',
  },
  {
    id: uuid(),
    name: 'Beef tartare in bone marrow',
    type: 'GF',
    description: [
      {
        name: 'beef tenderloin, capers, shallots,',
      },
      {
        name: 'chives, bone marrow, crispy onion',
      },
    ],
    price: '27',
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
    name: 'Salmon caviar with parmegiano waffles',
    description: [
      {
        name: 'salmon caviar, puffy cream cheese,',
      },
      {
        name: 'mixed greens, gouda and parmigiano waffles'
      }
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'Bluefin tuna carpaccio',
    type: 'GF',
    description: [
      {
        name: 'bluefin tuna , ponzu, tobiko caviar',
      },
    ],
    price: '25',
  },
  {
    id: uuid(),
    name: 'Beef carpaccio with fresh truffles',
    description: [
      {
        name: 'beef tenderloin, focaccia croutons,',
      },
      {
        name: 'arugula, french dressing, ponzu, fresh truffles'
      }
    ],
    price: '29',
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
        name: 'tom yUm SAUCE, tobiko caviar, jalapeno'
      }
    ],
    price: '18',
  },
  {
    id: uuid(),
    name: 'Otoro sashimi',
    type: 'GF',
    description: [
      {
        name: 'wild catch JAPANESE BLUEFIN TUNA BELLY,',
      },
      {
        name: 'white soy saucE, wasabi'
      }
    ],
    price: '37',
  },
  {
    id: uuid(),
    name: 'Tuna tartare',
    description: [
      {
        name: 'tuna, capers, shallots, chives,',
      },
      {
        name: 'avocado mouse, kadafi pasty, tobiko caviar'
      }
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'Salmon tartare',
    type: 'GF',
    description: [
      {
        name: 'salmon, cucumber, avocado,',
      },
      {
        name: 'shallotS chives, tamarind sauce, ponzu'
      }
    ],
    price: '17',
  },
  {
    id: uuid(),
    name: 'Baked oysters',
    type: 'GF',
    description: [
      {
        name: 'Half dozen baked oysters with chilly- garlic sauce',
      },
    ],
    price: '28',
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
    price: '26/39',
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
        name: 'sun dried tomatoes, bell pepper, french dressing,'
      },
      {
        name: 'spicy aioli , crunch'
      }
    ],
    price: '26',
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
        name: 'crushed olives, ponzu'
      },
    ],
    price: '25',
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
        name: 'avocado, spring mix, pine n uts, house made pesto'
      },
    ],
    price: '23',
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
        name: 'ponzu bouquet of oils,olive, smoked and truffle'
      },
    ],
    price: '23',
  },
  {
    id: uuid(),
    name: 'Iceberg caesar',
    description: [
      {
        name: 'romaine lettuce, tarragon sauce,',
      },
      {
        name: 'mint, parmesan cheese, bacon, crunch'
      },
    ],
    price: '20',
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
        name: 'mushrooms, crispy potatoes , walnuts'
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
        name: 'olives, basil, french dressing, feta'
      },
    ],
    price: '20',
  },
]

// export const rawBar = [
//   {
//     id: uuid(),
//     name: 'SPICY TUNA & SALMON CRISPY BITES',
//     description: [
//       {
//         name: 'Fried japanese rice, tuna,',
//       },
//       {
//         name: 'SALMON, tom yam paste'
//       }
//     ],
//     price: '18',
//   },
//   {
//     id: uuid(),
//     name: 'BEEF TARTARE',
//     type: 'GF',
//     description: [
//       {
//         name: 'Truffle mayo, capers, onions',
//       },
//     ],
//     price: '18',
//   },
//   {
//     id: uuid(),
//     name: 'BEEF carpaccio',
//     type: 'GF',
//     description: [
//       {
//         name: 'arugula, french dressing, ponzu sauce',
//       },
//       {
//         name: 'Truffle mayo, Croutons',
//       },
//     ],
//     price: '23',
//   },
//   {
//     id: uuid(),
//     name: 'TUNA MILANESE',
//     description: [
//       {
//         name: 'Breaded tuna slices, DILL SAUCE, tomatoes,',
//       },
//       {
//         name: 'SHALOT ONION, C0RIANDER, SESAME',
//       },
//     ],
//     price: '20',
//   },
//   {
//     id: uuid(),
//     name: 'TUNA TARTARE',
//     description: [
//       {
//         name: 'Avocado, masahosu sauce, yolk cream,',
//       },
//       {
//         name: 'capers, masago sauce',
//       },
//     ],
//     price: '19',
//   },
//   {
//     id: uuid(),
//     name: 'SALMON TARTARE',
//     type: 'GF',
//     description: [
//       {
//         name: 'Spinach, tamarind sauce, avocado cream,',
//       },
//       {
//         name: 'capers, yolk cream',
//       },
//     ],
//     price: '19',
//   },
//   {
//     id: uuid(),
//     name: 'YEllowtail sashimi ',
//     type: 'GF',
//     description: [
//       {
//         name: 'COCONUT TIGER MILK, SRIRACA',
//       },
//     ],
//     price: '19',
//   },
//   {
//     id: uuid(),
//     name: 'TRIO TARTARE',
//     description: [
//       {
//         name: 'Tuna, Salmon & Hamachi',
//       },
//     ],
//     price: '53',
//   },
//   {
//     id: uuid(),
//     name: 'CHILLED OYSTERS',
//     type: 'GF',
//     description: [
//       {
//         name: 'CHERRY SHALLOT, VINEGAR SAUCE, AIOLI SPICY SAUCE',
//       },
//     ],
//     price: '32/54',
//   },
// ];

export const specialties = [
  {
    id: uuid(),
    name: 'Grilled lamb chops Moroccan style',
    type: 'GF',
    description: [
      {
        name: 'lamb chops, baked quince,',
      },
      {
        name: 'tzatziki, couscous tabbouleh'
      }
    ],
    price: '41',
  },
  {
    id: uuid(),
    name: 'Slow cooked beef cheeks',
    description: [
      {
        name: 'beef cheeks, parmegiano gnocchi, wafu sauce',
      },
    ],
    price: '40',
  },
  {
    id: uuid(),
    name: 'Grilled Butterflied Branzino',
    type: 'GF',
    description: [
      {
        name: 'branzino, tarragon sauce,',
      },
      {
        name: 'lemon and mixed greens'
      }
    ],
    price: '42',
  },
  {
    id: uuid(),
    name: 'Grilled JUMBO tiger prawns',
    type:'GF',
    description: [
      {
        name: 'tiger prawns , tarragon sauce , spinach, lemon',
      },
    ],
    price: '39',
  },
  {
    id: uuid(),
    name: 'chilean seabass filet',
    type:'GF',
    description: [
      {
        name: 'PATAGONIAN TOOTHFISH, Asian style sauce,',
      },
      {
        name: 'spinach, broccoli, edamame'
      }
    ],
    price: '56',
  },
  {
    id: uuid(),
    name: 'Atlantic salmon filet',
    type: "gf",
    description: [
      {
        name: 'salmon , asparagus , edamame , lemon',
      },
    ],
    price: '36',
  },
  {
    id: uuid(),
    name: 'Moroccan octopus',
    type:  'gf',
    description: [
      {
        name: 'Grilled octopus, roMesco sauce,',
      },
      {
        name: 'confit potato, grilled spinach , truffle mayo',
      },
    ],
    price: '32',
  },
  {
    id: uuid(),
    name: 'Greek style mini lamb kebabs',
    description: [
      {
        name: 'ground lamb, tzatziki,',
      },
      {
        name: 'herbs, zaatar spices, pita'
      }
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
        name: 'wady sauce, mushroom sauce'
      }
    ],
    price: '31',
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
];

export const surfTurf = [
  {
    id: uuid(),
    name: 'Turf board',
    type: 'GF',
    description: [
      {
        name: 'Wagyu sirloin steak, Pork BBQ,',
      },
      {
        name: 'grilled Lamb chops, grilled vegetables, sauces',
      },
    ],
    price: '230',
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
    price: '240',
  },
]

export const steaksFromCharcoalOven = [
  {
    id: uuid(),
    name: 'PRIME ANGUS TOMAHAWK, 36 OZ',
    type: 'GF',
    // description: 'chickpea tahini dup, edamame, mushrooms, fresh herbs',
    price: '158',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS RIBEYE FILLET, 16 OZ',
    type: 'GF',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '69',
  },
  {
    id: uuid(),
    name: 'ANGUS FILET MIGNON, 8 OZ',
    type: 'GF',
    // description: 'Grilled red peppers, garlic, wallnuts, fresh herbs',
    price: '59',
  },
  {
    id: uuid(),
    name: 'PRIME ANGUS NEW YORK STRIP, 14 oz',
    type: 'GF',
    // description:
    //   'Roasted eggplant dip, toasted breadcrumbs, zucchini, pomegranate, tahini dressing, basil',
    price: '62',
  },
];
export const favor = [
  {
    id: uuid(),
    name: 'PEPPERCORN',
    price:'4'
  },
  {
    id: uuid(),
    name: 'BLUE CHEESE',
    price:'4'
  },
  {
    id: uuid(),
    name: 'BBQ SAUCE',
    price:'4'
  },
  {
    id: uuid(),
    name: 'RUNCH',
    price:'4'
  },
  {
    id: uuid(),
    name: 'TRUFFLE MAYO',
    price:'4'
  },
  {
    id: uuid(),
    name: 'tzatziki',
    price:'4'
  },
]

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
    price: '16',
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
    type: 'v  ',
    // description: '',
    price: '21',
  },
  {
    id: uuid(),
    name: 'MAC & CHEESE',
    // description: '',
    price: '17',
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

// export const sauces = [
//   {
//     id: uuid(),
//     name: 'PEPPERCORN',
//     // description: '',
//     price: '6',
//   },
//   {
//     id: uuid(),
//     name: 'MUSHROOM',
//     // description: '',
//     price: '6',
//   },
//   {
//     id: uuid(),
//     name: 'BLUE CHEESE',
//     // description: '',
//     price: '6',
//   },
//   {
//     id: uuid(),
//     name: 'BBQ',
//     // description: '',
//     price: '6',
//   },
// ];

export const dessert = [
  {
    id: uuid(),
    name: 'pahlava CHEESECAKE',
    // description: '',
    price: '18',
  },
  {
    id: uuid(),
    name: 'MEDOVIK WITH GELATO',
    // description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'Mascarpone Coffee cake',
    // description: '',
    price: '16',
  },
  {
    id: uuid(),
    name: 'BLACK Forest',
    // description: '',
    price: '17',
  },
  {
    id: uuid(),
    name: 'Katsin signature NAPOLEON CAKE',
    description: [
      {
        name: 'CRISPY almond BISQUIT LAYERS WITH CARAMEL CREAM,'
      },
      {
        name: 'RASPBERRY SAUCE, caramel GELATO & caramel sauce'
      }
    ],
    price: '30',
  },
  {
    id: uuid(),
    name: 'special occasion cake',
    // description: '',
    price: '58',
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
        name: 'bite size desserts, ice cream,'
      },
      {
        name: 'fruites & berrys served with nitro ice,'
      }
    ],
    price: '138',
  },
];
// export const specials = [
//   {
//     id: uuid(),
//     name: 'SEAFOOD PLATER',
//     description: [
//       {
//         name: 'EAST & WEST COAST OYSTERS, jumbo tiger shrimp,'
//       },
//       {
//         name: 'crab clamps, salmon tartar, EAST COAST LOBSTER'
//       },
//       {
//         name: 'TAIL, SHRIMP COCKTAIL,'
//       },
//       {
//         name: 'CHERRY SHALLOT VINEGAR SAUCE AIOLI SPICY SAUCE,'
//       },
//       {
//         name: 'COCKTAIL SAUCE, TABASCO'
//       }
//     ],
//     price: '248',
//   },
//   {
//     id: uuid(),
//     name: 'CHILLED OYSTERS',
//     description: [
//       {
//         name: 'CHERRY SHALLOT VINEGAR SAUCE AIOLI SPICY SAUCE'
//       },
//     ],
//     price: '32/54 (HALF DOZEN/DOZEN)',
//   },
//   {
//     id: uuid(),
//     name: 'BLACK CAVIAR',
//     description: [
//       {
//         name: 'sour cream, egg whites, crepes'
//       },
//     ],
//     price: 'MP',
//   },
// ]

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
  // {
  //   id: uuid(),
  //   title: 'RAW BAR',
  //   type: rawBar,
  // },
  // {
  //   id: uuid(),
  //   title: 'SALADS & SOUP',
  //   type: saladsSoup,
  // },

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
    title: 'SIDES',
    type: sides,
  },
  {
    id: uuid(),
    title: 'Enhance the favor of your dish with',
    type: favor,
  },
  // {
  //   id: uuid(),
  //   title: 'SAUCES',
  //   type: sauces,
  // },
  {
    id: uuid(),
    title: 'DESSERT',
    type: dessert,
  },
  // {
  //   id: uuid(),
  //   title: 'specialS',
  //   type: specials,
  // },
];
