import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ArrowUpRightIcon } from 'assets/icons/arrow-up-right-icon.svg';

import { Button } from 'components';
import { RouteNamesEnum } from 'localConstants';

import styles from './hodlCallToAction.styles';

export const HodlCallToAction = () => {
  const navigate = useNavigate();

  const handleJoinMovement = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigate(RouteNamesEnum.unlock);
  };

  const handleLearnMore = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://hodltokenclub.gitbook.io/hodl-token-club-litepaper-v2/', '_blank');
  };

  return (
    <section className={styles.ctaContainer}>
      <div className={styles.ctaContent}>
        <div className={styles.ctaText}>
          <h2 className={styles.ctaTitle}>Ready to Join the Movement?</h2>
          <p className={styles.ctaDescription}>
            Connect your wallet and become part of the HODL Token Club ecosystem. 
            Start earning rewards, participating in governance, and enjoying real-world utility.
          </p>
        </div>

        <div className={styles.ctaButtons}>
          <Button onClick={handleJoinMovement} className={styles.primaryButton}>
            Join the Movement
            <ArrowUpRightIcon className={styles.buttonIcon} />
          </Button>
          <Button onClick={handleLearnMore} className={styles.secondaryButton}>
            Read Litepaper
            <ArrowUpRightIcon className={styles.buttonIcon} />
          </Button>
        </div>

        <div className={styles.ctaStats}>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>10M+</div>
            <div className={styles.statLabel}>$REWARD Distributed Annually</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>1,000</div>
            <div className={styles.statLabel}>EGLD in LP Reserves</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statNumber}>2,000+</div>
            <div className={styles.statLabel}>Web2 Apps Connected</div>
          </div>
        </div>

        <div className={styles.templateLink}>
          <a href="/template" className={styles.templateLinkText}>
            Built with MultiversX dApp Template
          </a>
        </div>
      </div>
    </section>
  );
};
