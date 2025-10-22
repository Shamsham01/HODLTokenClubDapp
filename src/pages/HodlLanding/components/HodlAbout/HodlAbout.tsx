import styles from './hodlAbout.styles';

export const HodlAbout = () => {
  return (
    <section id="about-section" className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <h2 className={styles.aboutTitle}>
            About HODL Token Club
          </h2>
          <p className={styles.aboutDescription}>
            HODL Token Club is more than a DeFi project on MultiversX – it's a movement built on dedication, 
            creativity, playfulness, resilience, and trust. From a small group of visionaries to a thriving, 
            self-sustaining ecosystem, every member has a stake in our collective future.
          </p>
          <div className={styles.aboutValues}>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🎯</div>
              <h3 className={styles.valueTitle}>Dedication</h3>
              <p className={styles.valueDescription}>Committed to long-term value creation</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🎨</div>
              <h3 className={styles.valueTitle}>Creativity</h3>
              <p className={styles.valueDescription}>Innovative solutions and unique approaches</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🎮</div>
              <h3 className={styles.valueTitle}>Playfulness</h3>
              <p className={styles.valueDescription}>Making DeFi accessible and engaging</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>💪</div>
              <h3 className={styles.valueTitle}>Resilience</h3>
              <p className={styles.valueDescription}>Built to withstand market volatility</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIcon}>🤝</div>
              <h3 className={styles.valueTitle}>Trust</h3>
              <p className={styles.valueDescription}>Transparent and community-driven</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
