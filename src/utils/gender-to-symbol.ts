import { Gender } from 'src/types/gender';

export const genderToSymbol = (gender: Gender): string => {
  // eslint-disable-next-line default-case
  switch (gender) {
    case Gender.MASCULINE:
      return '♂';
    case Gender.FEMININE:
      return '♀';
    case Gender.NEUTER:
      return '~';
  }
};
