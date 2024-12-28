//UNused

import { v4 as uuid } from "uuid";

const specialtyCocktails = [
  {
    id: uuid(),
    name: "RH-",
    isRecipe: true,
    description: [
      {
        name: "Tanqueray londnon dry, Orange juice,",
      },
      {
        name: "Lime juice, Angostura Orange bitters",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Crazy Woman",
    isRecipe: true,
    description: [
      {
        name: "gin FORD`S infused carcade, jasmine, ",
      },
      {
        name: "ST-GERMAIN, limon lime mix, egg white",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Tai Flowers",
    isRecipe: true,
    description: [
      {
        name: "Cointreau, Lemon juice, ",
      },
      {
        name: "Simple syrup, Egg white",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Pink Floyd",
    isRecipe: true,
    description: [
      {
        name: "Angostura 5yo, Violet",
      },
      {
        name: "Falernum syrup, Lime juice",
      },
    ],
    price: "",
  },
];

const fizz = [
  {
    id: uuid(),
    name: "White Peach Fizz",
    isRecipe: true,
    description: [
      {
        name: "Hendricks gin, Peach blace,",
      },
      {
        name: "Fever-Tree Premium Classic tonic water",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Bergamote Gin Fizz",
    isRecipe: true,
    description: [
      {
        name: "The Botanist gin - Italicus,",
      },
      {
        name: "Fever-Tree Mediterranean Tonic Water",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Tropic Fizz",
    isRecipe: true,
    description: [
      {
        name: "Bacardi 4, homemade tropical mix",
      },
      {
        name: "Fever-Tree Elderflower Tonic Water",
      },
    ],
    price: "",
  },
];

const oldFashioned = [
  {
    id: uuid(),
    name: "Rum Old Fasioned",
    isRecipe: true,
    description: [
      {
        name: "FLOR DE CANA 12",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Hennessy Old Fasioned",
    isRecipe: true,
    description: [
      {
        name: "HENNESSY V.S.O.P.",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "BANANA OLD FASIONED",
    isRecipe: true,
    description: [
      {
        name: "WOODINVILLE, ",
      },
      {
        name: "GIFFARD - Banane Du Bresil",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "ANOTHER OLD FASIONED",
    isRecipe: true,
    description: [
      {
        name: "BULLIET, DISARONNO, ",
      },
      {
        name: "RED WINE",
      },
    ],
    price: "",
  },
];

const sour = [
  {
    id: uuid(),
    name: "Apple Calvados Sour",
    isRecipe: true,
    description: [
      {
        name: "Calvados, Peachtree,",
      },
      {
        name: "Homemade Honey syrup, Lime ",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "New York Sour",
    isRecipe: true,
    description: [
      {
        name: "FOUR ROSES, Simple syrup,",
      },
      {
        name: "Fresh lemon juice, Red wine (Shiraz or Malbech)",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Whiskey Sour",
    isRecipe: true,
    description: [
      {
        name: "FOUR ROSES, Fresh Lemon Juice,",
      },
      {
        name: "Sugar Syrup, Egg White (Optional)",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Amaretto Sour",
    isRecipe: true,
    description: [
      {
        name: "Disaronno",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "CALIFORNIAN MARGARITA",
    isRecipe: true,
    description: [
      {
        name: "DON JULIO BLANCO, COINTREAU, LEMON LIME",
      },
      {
        name: "GIFFARD - Creme De Violette Liqueur",
      },
      {
        name: "SEA SALT",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Negroni Bulvardier",
    isRecipe: true,
    description: [
      {
        name: "Campari, Antica Formula,",
      },
      {
        name: "RUSSELL`S RESERVE 6",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Americano",
    isRecipe: true,
    description: [
      {
        name: "Campari, Antica Formula",
      },
      {
        name: "Fever-Tree Premium Club Soda",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "BLIMEY",
    isRecipe: true,
    description: [
      {
        name: "KETEL ONE, BLACKBERRIES, LEMON-LIME",
      },
      {
        name: "GIFFARD - Cassis Noir De Bourgogne",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Spritz Ikigai",
    isRecipe: true,
    description: [
      {
        name: "Akashi Tai, ",
      },
      {
        name: "Fever-Tree Sparkling Lime & Yuzu",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Aperol",
    isRecipe: true,
    description: [
      {
        name: "Aperol, Mionetto",
      },
      {
        name: "Fever-Tree Premium Club Soda",
      },
    ],
    price: "",
  },
];

const other = [
  {
    id: uuid(),
    name: "Amaro",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "AMARO MONTENEGRO",
      },
      {
        name: "AVERNA AMARO",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Vermouth",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "CARPANO ANTICA FORMULA",
      },
      {
        name: "NOILLY PRAT",
      },
      {
        name: "MARTINI  ROSSO-BIANCO-FIERO",
      },
      {
        name: "MARTINI RISERVA SPECIALE AMBRATO-RUBINO",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Bitter",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "CAMPARI",
      },
      {
        name: "APEROL",
      },
      {
        name: "MARTINI",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Gin",
    isMany: true,
    isRecipe: true,
    description: [
      {
        name: "BOMBAY SAPPHIRE",
      },
      {
        name: "THE BOTANIST",
      },
      {
        name: "FORD`S",
      },
      {
        name: "HENDRICK`S(EXP)",
      },
      {
        name: "MONKEY 47",
      },
      {
        name: "TANQUERAY",
      },
    ],
    price: "",
  },
];

const whiskey = [
  {
    id: uuid(),
    name: "BURBON-AMERICAN RYE-AMERICAN WHISKEY",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "BULLIET",
      },
      {
        name: "ELIJAH CRAIG",
      },
      {
        name: "ELIJAH CRAIG 18",
      },
      {
        name: "FOUR ROSES SINGLE BARREL",
      },
      {
        name: "FOUR ROSES YELLOW",
      },
      {
        name: "KNOB CREEK",
      },
      {
        name: "MAKER`S MARK",
      },
      {
        name: "MICHTER`S SMALL BATCH US-1",
      },
      {
        name: "WOODFORD RESERVE",
      },
      {
        name: "HUDSON MAPLE CASK",
      },
      {
        name: "MICHTER`S US-1 SINGLE BARREL",
      },
      {
        name: "MICHTER`S US-1 SOUR MASH",
      },
      {
        name: "RUSSELL`S RESERVE 6",
      },
      {
        name: "RUSSELL`S RESERVE 10",
      },
      {
        name: "Woodinville",
      },
      {
        name: "ROKU",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "JAPANESE WHISKY",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "HATOZAKI JAPANESE FINEST",
      },
      {
        name: "HATOZAKI SMALL BATCH",
      },
      {
        name: "NIKKA FROM THE BARREL",
      },
      {
        name: "NIKKA SINGLE MALT 15",
      },
      {
        name: "NIKKA PURE MALT TAKETSURU",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "TAIWANESE WHISKY",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "KAVALAN",
      },
      {
        name: "KAVALAN SHERRY OAK",
      },
      {
        name: "KAVALAN CONCERTMASTER",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "IRISH",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "RED BREAST 12",
      },
      {
        name: "RED BREAST 21",
      },
      {
        name: "JAMESON",
      },
      {
        name: "TULLAMORE DEW",
      },
      {
        name: "TULLAMORE DEW 14",
      },
      {
        name: "CONNEMARA",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "SCOTCH",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "DALWHINNIE 15",
      },
      {
        name: "DALMORE CIGAR MALT RESERVE",
      },
      {
        name: "OBAN 14",
      },
      {
        name: "ARDBEG 10",
      },
      {
        name: "LAGAVULIN 16",
      },
      {
        name: "LAPHROAIG 10",
      },
      {
        name: "AUCHENTOSHAN 3 WOOD",
      },
      {
        name: "HIGHLAND PARK 12",
      },
      {
        name: "HIGHLAND PARK 18",
      },
      {
        name: "JOHNNIE WALKER BLACK LABEL",
      },
      {
        name: "JOHNNIE WALKER BLUE LABEL",
      },
      {
        name: "MONKEY SHOULDER",
      },
      {
        name: "BALVENIE 12",
      },
      {
        name: "BALVENIE 16",
      },
      {
        name: "BALVENIE 21 PORTWOOD",
      },
      {
        name: "GLENFIDDICH 12",
      },
      {
        name: "GLENFIDDICH 15",
      },
      {
        name: "GLENFIDDICH 18",
      },
      {
        name: "GLENFIDDICH 23",
      },
      {
        name: "GLENLIVET 12",
      },
      {
        name: "GLENLIVET 14",
      },
      {
        name: "GLENLIVET 15",
      },
      {
        name: "GLENLIVET 18",
      },
      {
        name: "MACALLAN 12",
      },
      {
        name: "MACALLAN 15",
      },
      {
        name: "MACALLAN 18",
      },
      {
        name: "MACALLAN 25",
      },
      {
        name: "MACALLAN 30",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Brandy Cognac",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "HENNESSY V.S.O.P.",
      },
      {
        name: "HENNESSY X.O.",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Rum",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "APPLETON 12",
      },
      {
        name: "APPLETON 15",
      },
      {
        name: "DIPLOMATICO",
      },
      {
        name: "FLOR DE CANA 30",
      },
      {
        name: "ZACAPA 23",
      },
      {
        name: "BACARDI 8",
      },
      {
        name: "BACARDI 10",
      },
      {
        name: "BACARDI 4",
      },
      {
        name: "ANGOSTURA 7",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Tequila (blanco-reposado-anejo)",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "CASAMIGOS",
      },
      {
        name: "DON JULIO BLANCO",
      },
      {
        name: "PATRON",
      },
      {
        name: "OCHO",
      },
      {
        name: "CLASE AZUL",
      },
      {
        name: "HERRADURA",
      },
      {
        name: "AVION",
      },
      {
        name: "CASA DRAGONES",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Tequila extra anejo",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "1942",
      },
      {
        name: "JOSE CUERVO",
      },
      {
        name: "OCHO",
      },
      {
        name: "AVION",
      },
      {
        name: "CLASE AZUL",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Mezcal",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "MONTELOBOS",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Vodka",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "KETEL ONE ",
      },
      {
        name: "ABSOLUT ELYX",
      },
      {
        name: "BELVEDER",
      },
      {
        name: "GREY GOOSE",
      },
      {
        name: "HAKU",
      },
      {
        name: "STOLI ELIT",
      },
      {
        name: "TITO`S",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Grappa",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "NONINO CHARDONAY",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Sake",
    isRecipe: true,
    description: [
      {
        name: "Akashi Tai",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Liqueurs",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "COINTREAU",
      },
      {
        name: "CHARTREUS",
      },
      {
        name: "DISARONNO",
      },
      {
        name: "ANCHO REYES",
      },
      {
        name: "MR. BLACK",
      },
      {
        name: "FERNET BRANCA",
      },
      {
        name: "BAILEYS",
      },
      {
        name: "FRANGELICO",
      },
      {
        name: "KAHLUA",
      },
      {
        name: "ST-GERMAIN",
      },
      {
        name: "PASSOA",
      },
      {
        name: "DRAMBUIE",
      },
      {
        name: "ITALICUS",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Homemade lemonades",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Berry ",
      },
      {
        name: "Tropic",
      },
      {
        name: "Citrus",
      },
      {
        name: "Violet",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Fresh Squeezed juices",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "ORANGE",
      },
      {
        name: "APPLE-CARROT",
      },
      {
        name: "STRAWBERRY-BANANA",
      },
      {
        name: "MANGO STRAWBERRY LIME",
      },
      {
        name: "PINEAPPLE GINGER POMEGRANATE",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Coffee",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Espresso",
      },
      {
        name: "Amnericano",
      },
      {
        name: "Cappucino",
      },
      {
        name: "Late",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Tea",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Earl Grey",
      },
      {
        name: "Jasmine",
      },
      {
        name: "Armenian herbs",
      },
      {
        name: "Late",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Soft Drinks",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Mexican coke",
      },
      {
        name: "Sprite",
      },
      {
        name: "Fever-Tree Premium Tonic ",
      },
      {
        name: "FEVER-TREE GINGER BEER",
      },
      {
        name: "Water",
      },
      {
        name: "Mineral water",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Soft Drinks",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Mexican coke",
      },
      {
        name: "Sprite",
      },
      {
        name: "Fever-Tree Premium Tonic ",
      },
      {
        name: "FEVER-TREE GINGER BEER",
      },
      {
        name: "Water",
      },
      {
        name: "Mineral water",
      },
    ],
    price: "",
  },
];

export const byTheGlass = [
  {
    id: uuid(),
    name: "Sparkling Whites",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Gruet Brut",
      },
      {
        name: "Ruffino prosecco",
      },
      {
        name: "MOET CHANDON IMPERIAL",
      },
      {
        name: "MOET CHANDON ROSE IMPERIAL",
      },
      {
        name: "VEUVE CLICQUOT BRUT YELLOW LABEL",
      },
      {
        name: "Cloudy Bay Sauvignon Blanc",
      },
      {
        name: "Mer Soleil Santa Lucia Highlands Chardonnay 21",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Rose",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Gerard Bertrand Cotes De Roses Rose 22",
      },
      {
        name: "WHISPERING ANGEL ROSE",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Red",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "Davis Bynum Russian River Valley Pinot Noir 21",
      },
      {
        name: "Caymus Suisun Walking Fool Red Blend 21",
      },
      {
        name: "Charles Krug Napa Valley Cabernet 20",
      },
      {
        name: "JOSEPH PHELPS CABERNET SAUVIGNON",
      },
    ],
    price: "",
  },
  {
    id: uuid(),
    name: "Sweet/Dessert Wine",
    isRecipe: true,
    isMany: true,
    description: [
      {
        name: "B&G France Sauternes 18",
      },
    ],
    price: "",
  },
];

export const drinkMenu = [
  {
    id: uuid(),
    title: "Specialty cocktails",
    type: specialtyCocktails,
  },
  {
    id: uuid(),
    title: "Fizz",
    type: fizz,
  },
  {
    id: uuid(),
    title: "Old Fasioned",
    type: oldFashioned,
  },
  {
    id: uuid(),
    title: "Sour",
    type: sour,
  },
  {
    id: uuid(),
    title: "Other",
    type: other,
  },
  {
    id: uuid(),
    title: "Whiskey",
    type: whiskey,
  },
  {
    id: uuid(),
    title: "BY THE GLASS",
    type: byTheGlass,
  },
];
