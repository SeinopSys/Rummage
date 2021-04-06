import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import toPairs from 'lodash/toPairs';
import styles from 'modules/LanguageSelector.module.scss';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useMemo, VFC } from 'react';
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from 'reactstrap';
import { AvailableLanguage, LANGUAGES } from 'src/config';

export const LanguageSelect: VFC<{ className?: string }> = ({ className }) => {
  const router = useRouter();
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const getCurrentItemProps = useCallback(
    (langCode: string) => {
      const itemClassName = styles.item;
      return language === langCode
        ? {
            'className': `${itemClassName} ${styles.current}`,
            'data-current': t('common:current'),
          }
        : { className: itemClassName };
    },
    [language, t],
  );

  const nativeLangName = useMemo(
    () => (language in LANGUAGES ? LANGUAGES[language as AvailableLanguage].nativeName : t('common:changeLanguage')),
    [language, t],
  );

  return (
    <UncontrolledDropdown tag="span" className={classNames(className, styles.languageSelector)}>
      <DropdownToggle color="link" caret>
        <FontAwesomeIcon icon="globe" />
        <span className="ml-2">{nativeLangName}</span>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem header className={styles.item}>
          {t('common:changeLanguage')}
        </DropdownItem>
        {toPairs(LANGUAGES).map(([key, value]) => (
          <Link key={key} href={router.asPath} locale={key} passHref>
            <DropdownItem tag="a" {...getCurrentItemProps(key)}>
              <img className={styles.languageFlag} src={`/flags/${key}.svg`} alt="" />
              <span>{value.nativeName}</span>
            </DropdownItem>
          </Link>
        ))}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};
