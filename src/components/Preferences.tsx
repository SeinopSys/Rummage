import { Trans, useTranslation } from 'next-i18next';
import { ChangeEventHandler, useCallback, VFC } from 'react';
import { CustomInput } from 'reactstrap';

export interface PreferencesProps {
  stress: boolean;
  cursive: boolean;
  gender: boolean;
  setStress: (value: boolean) => void;
  setCursive: (value: boolean) => void;
  setGender: (value: boolean) => void;
}

export const Preferences: VFC<PreferencesProps> = ({ stress, setStress, cursive, setCursive, gender, setGender }) => {
  const { t } = useTranslation();
  const handleCursiveChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setCursive(e.target.checked);
    },
    [setCursive],
  );
  const handleStressChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setStress(e.target.checked);
    },
    [setStress],
  );
  const handleGenderChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setGender(e.target.checked);
    },
    [setGender],
  );
  return (
    <>
      <CustomInput id="cursive" label={t('game:nativeCursive')} type="checkbox" checked={cursive} onChange={handleCursiveChange} />
      <CustomInput
        id="stress"
        label={
          <Trans t={t} i18nKey="game:showStress">
            0<code>1</code>
          </Trans>
        }
        type="checkbox"
        checked={stress}
        onChange={handleStressChange}
      />
      <CustomInput id="gender" label={t('game:showGender')} type="checkbox" checked={gender} onChange={handleGenderChange} />
    </>
  );
};
