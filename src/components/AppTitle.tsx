import { useTranslation } from 'next-i18next';
import { VFC } from 'react';
import styles from 'modules/AppTitle.module.scss';

export const AppTitle: VFC = () => {
  const { t } = useTranslation();

  return (
    <>
      <h1 className={styles.title}>
        <b>Ru</b>mmage
      </h1>
      <p>{t('common:description')}</p>
    </>
  );
};
