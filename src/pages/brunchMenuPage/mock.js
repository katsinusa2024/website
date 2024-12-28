import { v4 as uuid } from 'uuid';

export const brunch = [
    {
        id: uuid(),
        name: 'EGG BENEDICT WITH SALMON',
        description: [
            {
                name: 'poached eggs and salmon topped with hollandaise sauce,',
            },
            {
                name: 'SPINACH, BLACK GARLIC, tahini sauce'
            }
        ],
        price: '25',
    },
    {
        id: uuid(),
        name: 'egg BENEDICT with bacon',
        description: [
            {
                name: 'Poached eggs, bacon, spinach,',
            },
            {
                name: 'hollandaise sauce, black garlic tahini sauce',
            },
        ],
        price: '24',
    },
    {
        id: uuid(),
        name: 'AVOCADO TOAST',
        description: [
            {
                name: 'avocado, bread, cream cheese, arugula,',
            },
            {
                name: 'GuaCamole, DRIED TOMATOES, FRENCH DRESSING',
            },
        ],
        price: '18',
    },
    {
        id: uuid(),
        name: 'OATMEAL WITH berries',
        description: [
            {
                name: 'Oats, cream, milk, berries, CONDENSED MILK',
            },
        ],
        price: '17',
    },
    {
        id: uuid(),
        name: 'SHAKSHUKA EGG & TOMATO OMELETTE',
        description: [
            {
                name: 'scrambled eggs, house made tomato sauce, herbs',
            },
        ],
        price: '21',
    },
    {
        id: uuid(),
        name: 'OMELETTE with CAVIAR CREAM',
        description: [
            {
                name: 'eggs, smoked salmon, red caviar,',
            },
            {
                name: 'cream sauce, herbs',
            },
        ],
        price: '25',
    },
    {
        id: uuid(),
        name: 'spinach OMELETTE with burRata',
        description: [
            {
                name: 'eggs, spinach, COLD burRata,',
            },
            {
                name: 'Porcini, herbs'
            }
        ],
        price: '22',
    },

    {
        id: uuid(),
        name: 'SLOW COOKED 24 HRS BEEF CHEEKS',
        description: [
            {
                name: 'armIgiano Gnocchi, herbs, demi-glace',
            },
        ],
        price: '44',
    },
    {
        id: uuid(),
        name: "shrimp'n grits",
        description: [
            {
                name: 'grits creole style, with shrimp & bacon',
            },
        ],
        price: '18',
    },
    {
        id: uuid(),
        name: 'breakfast croissant',
        description: [
            {
                name: 'cream cheese, eggs, smoked salmon,',
            },
            {
                name: 'arugula, guacamole cream, yuzU sauce'
            }
        ],
        price: '19',
    },
    {
        id: uuid(),
        name: 'katsin breakfast',
        description: [
            {
                name: 'potatoes, chicken sausages, cucumber,',
            },
            {
                name: 'GuaCamole, Eggs any style'
            }
        ],
        price: '24',
    },
    {
        id: uuid(),
        name: 'MOZZARELLA AVOCADO SALAD',
        description: [
            {
                name: 'Fresh mozzarella, tomatoes, avocado,',
            },
            {
                name: 'lettuce, pine nuts, pesto sauce',
            },
        ],
        price: '23',
    },
    {
        id: uuid(),
        name: "iceberg caesar salad (add chicken $9 /shrimp $12)",
        description: [
            {
                name: 'lettuce, tarragon dressing , PARMIGIANO',
            },
        ],
        price: '19',
    },
    {
        id: uuid(),
        name: 'alfredo pasta with shrimp',
        description: [
            {
                name: 'pasta, shrimp, PARMIGIANO',
            },
        ],
        price: '25',
    },
    {
        id: uuid(),
        name: 'TRUFFLE and PARMESAN FRIES',
        description: [
            {
                name: 'fresh truffle oil and PARMIGIANO',
            },
        ],
        price: '18',
    },
    {
        id: uuid(),
        name: 'Home Club Sandwich',
        description: [
            {
                name: 'cheddar cheese, bread , aioli sauce,',
            },
            {
                name: 'lettuce, bAcon, TURKEY, HAM',
            },
        ],
        price: '21',
    },
    {
        id: uuid(),
        name: 'Chicken & Waffles',
        description: [
            {
                name: 'deep fried chicken with homemade buttermilk waffle',
            },
        ],
        price: '22',
    },
    {
        id: uuid(),
        name: 'STRAWBERRY FRENCH TOAST (add 2 eggs any style $6)',
        description: [
            {
                name: 'Brioche, milk, eggs, Crème Anglaise,',
            },
            {
                name: 'fresh strawberries, ICE CREAM',
            },
        ],
        price: '20',
    },
    {
        id: uuid(),
        name: 'RASPBERRY TART',
        description: [
            {
                name: 'Pâte Sucrée crust (sweet shortcrust pastry',
            },
            {
                name: 'filled with a homemade raspberry curd',
            },
            {
                name: 'and topped with fresh raspberries)'
            }
        ],
        price: '20',
    },
    {
        id: uuid(),
        name: 'CRÊPES FLAMBÉES',
        description: [
            {
                name: 'Sicilian orange sauce, mint , ice creaM',
            },
        ],
        price: '21',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: '',
            },
            {
                name: '',
            },
        ],
        price: '',
    },

];

export const addons = [
    {
        id: uuid(),
        name: 'GUACAMOLE',
        price: '9',
    },
    {
        id: uuid(),
        name: 'chicken sausage',
        price: '9',
    },
    {
        id: uuid(),
        name: 'BABY Potatoes',
        price: '9',
    },
    {
        id: uuid(),
        name: 'bacon',
        price: '9',
    },
    {
        id: uuid(),
        name: 'EGGS',
        price: '9',
    },
    {
        id: uuid(),
        name: 'SHRIMP',
        price: '12',
    },
    {
        id: uuid(),
        name: 'CHICKEN BREAST',
        price: '9',
    },
]

export const brunchBarMenu = [
    {
        id: uuid(),
        name: 'COFFEE',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'ESPRESSO',
            }
        ],
        price: '6',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'DOUBLE ESPRESSO',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'ESPRESSO MACCHIATO',
            }
        ],
        price: '7',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'AMERICANO / ICED',
            }
        ],
        price: '6',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'CAPPUCCINO / ICED',
            }
        ],
        price: '7',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'LATTE / ICED',
            }
        ],
        price: '8',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'MATCHALATTE',
            }
        ],
        price: '11',
    },{
        id: uuid(),
        name: '',
        description: [
            {
                name: 'COFFEE RAFF',
            }
        ],
        price: '11',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'COFFEE GLACE/ WITH ICE CREAM',
            }
        ],
        price: '11',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'ESPRESSO TONIC ICED',
            }
        ],
        price: '11',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'COLD BREW ICED',
            }
        ],
        price: '11',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'SPECIAL COFFEE',
            }
        ],
        price: '11',
    },
    {
        id: uuid(),
        name: 'TEA',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'BLACK',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'GREEN',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'HERBAL',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: 'iCEd TEA',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'PEACH',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'BERRY',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'GREEN TEA / SOUR APPLE',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'TROPICAL',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: 'LEMONADES',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'POMEGRANATE / RASPBERRY',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'APPLE / JASMINE / ALOE',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: 'FRESHLY SQUEEZED - ORGANIC',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'ORANGE',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'GRAPEFRUIT',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'APPLE',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'CARROT',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'CANTALUPE',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'WATERMELON / BASIL',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'PINEAPPLE',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'KIWI / APPLE / BASIL',
            }
        ],
        price: '13',
    },
    {
        id: uuid(),
        name: 'Enhancers',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'GINGER',
            }
        ],
        price: '3',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'CELERY',
            }
        ],
        price: '3',
    },
    {
        id: uuid(),
        name: 'Brunch Cocktails',
        price: '',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'single MIMOSA',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'bottomless MIMOSA',
            }
        ],
        price: '38',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'peach BELLINI',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'BLOODY MARY',
            }
        ],
        price: '18',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'APEROL SPRITZ',
            }
        ],
        price: '11',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'SANGRIA',
            }
        ],
        price: '9',
    },
    {
        id: uuid(),
        name: '',
        description: [
            {
                name: 'FANCY MOCKTAIL',
            }
        ],
        price: '18',
    },
]


export const foodMenu = [
    {
        id: uuid(),
        title: 'Brunch Menu',
        type: brunch,
    },
    {
        id: uuid(),
        title: 'ADD-ONS',
        type: addons,
    },
    {
        id: uuid(),
        title: 'Brunch Bar Menu',
        type: brunchBarMenu,
    },
];
