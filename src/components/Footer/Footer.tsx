import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

// prettier-ignore
const styles = {
  footer: 'footer mx-auto w-full max-w-prose py-4 text-center',
  footerContainer: 'footer-container flex flex-col gap-1 font-medium items-center justify-center text-sm text-[#989898]',
  footerDescription: 'footer-description flex items-center justify-center gap-1 text-sm text-neutral-500 gap-1',
  footerHeartIcon: 'footer-heart-icon text-red-500'
} satisfies Record<string, string>;

export const Footer = () => {
  const currentYear = moment().year();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerDescription}>
          <span>Made with</span>

          <FontAwesomeIcon icon={faHeart} className={styles.footerHeartIcon} />

          <span>by HODL Token Club, {currentYear}</span>
        </div>
      </div>
    </footer>
  );
};
