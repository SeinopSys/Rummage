import { Category, Gender, Word } from 'src/types/word';

export const lesson01Block01Words: Word[] = [
  { native: 'семья', stressIndex: 4, key: "syem'ja", gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'бабушка', stressIndex: 1, key: 'babushka', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'дедушка', stressIndex: 1, key: 'dyedushka', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'мама', stressIndex: 1, key: 'mama', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'мать', key: "mat'", gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'папа', stressIndex: 1, key: 'papa', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'отец', stressIndex: 3, key: 'otyec', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'жена', stressIndex: 3, key: 'zhyena', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'сестра', stressIndex: 5, key: 'syestra', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'дочь', key: "dots'", gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'внук', key: 'vnuk', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'внучка', stressIndex: 2, key: 'vnutska', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'тётя', key: 'tyotya', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'дядя', stressIndex: 1, key: 'dyadya', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'ребёнок', key: 'ryebyonok', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'дети', stressIndex: 1, key: 'dyeti', gender: Gender.MASCULINE, categories: [Category.FAMILY, Category.PLURAL] },
  { native: 'родитель', stressIndex: 3, key: "rodityel'", gender: Gender.MASCULINE, categories: [Category.FAMILY] },
  { native: 'родители', stressIndex: 3, key: 'rodityeli', gender: Gender.MASCULINE, categories: [Category.FAMILY, Category.PLURAL] },
  { native: 'дочка', stressIndex: 1, key: 'dotska', gender: Gender.FEMININE, categories: [Category.FAMILY] },
  { native: 'сынок', stressIndex: 3, key: 'synok', gender: Gender.MASCULINE, categories: [Category.FAMILY] },
];
