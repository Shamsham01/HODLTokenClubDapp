import { MouseEvent } from 'react';

import { Button } from 'components';

import styles from './hodlCallToAction.styles';

export const HodlCallToAction = () => {
  const handleJoinMovement = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://discord.gg/RBtGMjwTDw', '_blank');
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
          </Button>
          <Button onClick={handleLearnMore} className={styles.secondaryButton}>
            Read Litepaper
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

      </div>
    </section>
  );
};
