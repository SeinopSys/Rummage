import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from 'components/ExternalLink';
import { LanguageSelect } from 'components/LanguageSelect';
import { getYear } from 'date-fns';
import styles from 'modules/AppFooter.module.scss';
import { Trans, useTranslation } from 'next-i18next';
import { useRef, VFC } from 'react';
import { UncontrolledTooltip } from 'reactstrap';
import { allWordsArray } from 'src/config/words';

export const AppFooter: VFC = () => {
  const { t } = useTranslation();

  const viewSourceRef = useRef<HTMLAnchorElement>(null);

  return (
    <footer className={styles.footer}>
      <LanguageSelect className={styles.item} />
      <span className={styles.item}>
        <FontAwesomeIcon icon="database" className="mr-2" />
        {t('common:wordCount', { count: allWordsArray.length })}
      </span>
      <span className={styles.item}>
        <FontAwesomeIcon icon={['fab', 'osi']} className="mr-2" />
        <Trans t={t} i18nKey="common:openSource">
          0
          <ExternalLink ref={viewSourceRef} href="https://github.com/SeinopSys/Rummage">
            1
          </ExternalLink>
          2<ExternalLink href="https://fontawesome.com/license/free">3</ExternalLink>4
        </Trans>
        <UncontrolledTooltip target={viewSourceRef} fade={false}>
          <FontAwesomeIcon icon={['fab', 'github']} className="mx-2" />
          {t('common:viewSource')}
        </UncontrolledTooltip>
      </span>
      <span className={styles.item}>&copy;&nbsp;SeinopSys&nbsp;{Math.max(getYear(new Date()), 2021)}</span>
    </footer>
  );
};
