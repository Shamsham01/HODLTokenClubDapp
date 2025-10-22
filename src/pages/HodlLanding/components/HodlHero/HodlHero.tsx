import { MouseEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button } from 'components';
import { RouteNamesEnum } from 'localConstants';

import styles from './hodlHero.styles';

export const HodlHero = () => {
  const navigate = useNavigate();

  const handleJoinClub = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://discord.gg/RBtGMjwTDw', '_blank');
  };

  const handleMintEmpyreans = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    window.open('https://xoxno.com/collection/EMP-897b49/drops', '_blank');
  };

  return (
    <div 
      className={styles.heroContainer}
      style={{
        backgroundImage: 'url(https://i.ibb.co/5xB2Qz8b/Banner-OOX-1920x800.jpg)'
      }}
    >
      <div className={styles.heroContent}>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            Join the HODL Token Club
          </h1>
          <h2 className={styles.heroSubtitle}>
            A Movement for Long-Term Value
          </h2>
          <p className={styles.heroDescription}>
            Empowering a community-driven ecosystem with governance, rewards, and real-world utility on MultiversX.
          </p>
        </div>

        <div className={styles.heroButtons}>
          <Button onClick={handleJoinClub} className={styles.primaryButton}>
            Join our Club
          </Button>
          <Button onClick={handleMintEmpyreans} className={styles.secondaryButton}>
            Mint Empyreans NFT
          </Button>
        </div>
      </div>
    </div>
  );
};
