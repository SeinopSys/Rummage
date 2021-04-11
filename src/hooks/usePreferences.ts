import { PreferencesProps } from 'components/Preferences';
import createPersistedState from 'use-persisted-state';

const useCursiveState = createPersistedState('cursive');
const useStressState = createPersistedState('stress');
const useGenderState = createPersistedState('gender');

export const usePreferences = (cursiveDefault: boolean, stressDefault: boolean, genderDefault: boolean): PreferencesProps => {
  const [cursive, setCursive] = useCursiveState(cursiveDefault);
  const [stress, setStress] = useStressState(stressDefault);
  const [gender, setGender] = useGenderState(genderDefault);

  return { cursive, setCursive, stress, setStress, gender, setGender };
};
