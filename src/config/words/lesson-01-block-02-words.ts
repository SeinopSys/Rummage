import { Category, Gender, Word } from 'src/types/word';

export const lesson01Block02Words: Word[] = [
  { native: 'школа', stressIndex: 2, key: 'shkola', gender: Gender.FEMININE, categories: [Category.STUDYING] },
  { native: 'машина', stressIndex: 3, key: 'mashina', gender: Gender.FEMININE, categories: [Category.TRANSPORTATION] },
  { native: 'тетрадь', stressIndex: 4, key: "tyetrad'", gender: Gender.FEMININE, categories: [Category.STUDYING] },
  { native: 'площадь', stressIndex: 2, key: "ploshchad'", gender: Gender.FEMININE, categories: [Category.LOCATIONS] },
  { native: 'лекарство', stressIndex: 3, key: 'lyekarstvo', gender: Gender.NEUTER, categories: [Category.HEALTH] },
  { native: 'молоко', stressIndex: 5, key: 'moloko', gender: Gender.NEUTER, categories: [Category.BEVERAGES] },
  { native: 'слово', stressIndex: 2, key: 'slovo', gender: Gender.NEUTER, categories: [Category.WRITING] },
  { native: 'письмо', stressIndex: 5, key: "pis'mo", gender: Gender.NEUTER, categories: [Category.COMMUNICATION] },
  { native: 'море', stressIndex: 1, key: 'more', gender: Gender.MASCULINE, categories: [Category.NATURE] },
  { native: 'ресторан', stressIndex: 6, key: 'restoran', gender: Gender.MASCULINE, categories: [Category.LOCATIONS, Category.FOOD] },
  {
    native: 'университет',
    stressIndex: 9,
    key: 'univyersityet',
    gender: Gender.MASCULINE,
    categories: [Category.STUDYING, Category.LOCATIONS],
  },
  { native: 'магазин', stressIndex: 5, key: 'magazin', gender: Gender.MASCULINE, categories: [Category.LOCATIONS] },
  { native: 'словарь', stressIndex: 4, key: "slovar'", gender: Gender.MASCULINE, categories: [Category.WRITING] },
  { native: 'аэропорт', stressIndex: 5, key: 'aeroport', gender: Gender.MASCULINE, categories: [Category.LOCATIONS, Category.AIR_TRAVEL] },
  // TODO Continue
];
