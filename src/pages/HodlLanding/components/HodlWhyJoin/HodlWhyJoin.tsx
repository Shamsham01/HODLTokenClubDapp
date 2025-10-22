import styles from './hodlWhyJoin.styles';

export const HodlWhyJoin = () => {
  const reasons = [
    {
      icon: '👥',
      title: 'Community-Driven Ownership',
      description: 'Be part of a project where ownership is truly community-driven and every voice matters'
    },
    {
      icon: '🎯',
      title: 'Predictable and Fair Rewards',
      description: 'Enjoy predictable and fair rewards through our ecosystem with transparent distribution'
    },
    {
      icon: '🌍',
      title: 'Real-World Utility',
      description: 'Benefit from utilities extending beyond the ecosystem through MakeX integration'
    },
    {
      icon: '💧',
      title: 'Managed Liquidity',
      description: 'Experience actively managed liquidity for stability and better trading conditions'
    }
  ];

  return (
    <section className={styles.whyJoinContainer}>
      <div className={styles.whyJoinContent}>
        <div className={styles.whyJoinHeader}>
          <h2 className={styles.whyJoinTitle}>Why Join HODL Token Club?</h2>
          <p className={styles.whyJoinDescription}>
            Discover the unique advantages that make HODL Token Club the perfect choice for long-term value seekers
          </p>
        </div>

        <div className={styles.reasonsGrid}>
          {reasons.map((reason, index) => (
            <div key={index} className={styles.reasonCard}>
              <div className={styles.reasonIcon}>{reason.icon}</div>
              <h3 className={styles.reasonTitle}>{reason.title}</h3>
              <p className={styles.reasonDescription}>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
