import classNames from 'classnames';
import styles from 'modules/GenderSymbols.module.scss';
import { useMemo, VFC } from 'react';
import { Gender } from 'src/types/gender';
import { genderToSymbol } from 'src/utils/gender-to-symbol';

export interface GenderSymbolsProps {
  gender?: Gender | Gender[];
}

export const GenderSymbols: VFC<GenderSymbolsProps> = ({ gender }) => {
  const genders = useMemo(() => (Array.isArray(gender) ? gender : [gender]), [gender]);

  if (genders.length === 1 && typeof genders[0] === 'undefined') {
    return null;
  }

  return (
    <span className="ml-3">
      {genders.map((g) => (
        <span
          key={g}
          className={classNames({
            [styles.textFeminine]: g === Gender.FEMININE,
            [styles.textMasculine]: g === Gender.MASCULINE,
            [styles.textNeuter]: g === Gender.NEUTER,
          })}
        >
          {genderToSymbol(g as Gender)}
        </span>
      ))}
    </span>
  );
};
