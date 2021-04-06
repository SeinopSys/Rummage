import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ExternalLink } from 'components/ExternalLink';
import { LanguageSelect } from 'components/LanguageSelect';
import { getYear } from 'date-fns';
import styles from 'modules/AppFooter.module.scss';
import { useTranslation } from 'next-i18next';
import { useRef, VFC } from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export const AppFooter: VFC = () => {
  const { t } = useTranslation();

  const viewSourceRef = useRef<HTMLAnchorElement>(null);

  return (
    <footer className={styles.footer}>
      <LanguageSelect className={styles.item} />
      <span className={styles.item}>
        <FontAwesomeIcon icon={['fab', 'osi']} className="mr-2" />
        {t('common:openSource')}
        <ExternalLink ref={viewSourceRef} href="https://github.com/SeinopSys/Rummage" className="ml-2">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </ExternalLink>
        <UncontrolledTooltip target={viewSourceRef} fade={false}>
          {t('common:viewSource')}
        </UncontrolledTooltip>
      </span>
      <span className={styles.item}>&copy; SeinopSys {Math.max(getYear(new Date()), 2021)}</span>
    </footer>
  );
};
