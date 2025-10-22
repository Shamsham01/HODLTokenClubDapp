import { useState } from 'react';
import classNames from 'classnames';
import styles from './hodlTokens.styles';

export const HodlTokens = () => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<any>(null);

  const handleFeatureClick = (cardId: string, feature: any) => {
    if (flippedCard === cardId && selectedFeature?.id === feature?.id) {
      // If clicking the same feature or clicking back, flip back to front
      setFlippedCard(null);
      setSelectedFeature(null);
    } else if (feature) {
      // If clicking a different feature, flip to back and show that feature
      setFlippedCard(cardId);
      setSelectedFeature(feature);
    } else {
      // If clicking back of card, flip to front
      setFlippedCard(null);
      setSelectedFeature(null);
    }
  };

  const hodlFeatures = [
    {
      id: 'governance',
      icon: '🗳️',
      title: 'Governance Rights',
      description: 'Holders have voting rights in the HODL Token Club ecosystem decisions and treasury management.'
    },
    {
      id: 'scarcity',
      icon: '💎',
      title: 'Scarcity & Value',
      description: 'Only 1,111 $HODL tokens exist. Most are in community hands with fair distribution through NFT mints.'
    },
    {
      id: 'ownership',
      icon: '👑',
      title: 'Ownership Stake',
      description: 'Direct market connection through liquidity pools linking $HODL to $REWARD and $EGLD. As $REWARD demand grows, $HODL follows.'
    }
  ];

  const rewardFeatures = [
    {
      id: 'passive',
      icon: '💰',
      title: 'Passive Income',
      description: 'Earn $REWARD through in-wallet NFT staking, liquidity provisioning, and single-asset staking on OneDEX.'
    },
    {
      id: 'utility',
      icon: '⚡',
      title: 'Ecosystem Utility',
      description: 'Required for MakeX workflows, NFT & merch purchases. As MakeX adoption increases, so does $REWARD usage.'
    },
    {
      id: 'rewards',
      icon: '🌐',
      title: 'Fair Distribution',
      description: 'Most supply already in community hands. Treasury must compete with members in DeFi to earn it, making $REWARD naturally scarce.'
    }
  ];

  return (
    <section className={styles.tokensContainer}>
      <div className={styles.tokensContent}>
        <div className={styles.tokensHeader}>
          <h2 className={styles.tokensTitle}>Our Tokens</h2>
          <p className={styles.tokensDescription}>
            Two powerful tokens working together to create a sustainable and rewarding ecosystem
          </p>
        </div>

        <div className={styles.tokensGrid}>
          <div
            className={classNames(styles.tokenCard, {
              [styles.tokenCardFlipped]: flippedCard === 'hodl'
            })}
          >
            <div className={styles.tokenCardInner}>
              <div className={styles.tokenCardFront}>
                <div className={styles.tokenImage}>
                  <img 
                    src="https://i.ibb.co/Gf3HkSTm/Hodl-Token200x200-1.png" 
                    alt="HODL Token" 
                    className={styles.tokenLogo}
                  />
                </div>
                <div className={styles.tokenInfo}>
                  <h3 className={styles.tokenName}>$HODL Token</h3>
                  <p className={styles.tokenId}>Token ID: HODL-b8bd81</p>
                  <p className={styles.tokenDescription}>
                    Governance, ownership, and long-term value. The cornerstone of our ecosystem, 
                    giving holders voting rights and a stake in the future of HODL Token Club.
                  </p>
                  <div className={styles.tokenFeatures}>
                    {hodlFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={styles.featureItem}
                        onClick={() => handleFeatureClick('hodl', feature)}
                      >
                        <span className={styles.featureIcon}>{feature.icon}</span>
                        <span className={styles.featureText}>{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div 
                className={styles.tokenCardBack}
                onClick={() => handleFeatureClick('hodl', null)}
              >
                <div className={styles.tokenCardBackContent}>
                  <h3 className={styles.tokenNameBack}>{selectedFeature?.icon} {selectedFeature?.title}</h3>
                  <p className={styles.tokenDescriptionBack}>{selectedFeature?.description}</p>
                  <div className={styles.backToFront}>
                    <span className={styles.backToFrontText}>Click anywhere to go back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={classNames(styles.tokenCard, {
              [styles.tokenCardFlipped]: flippedCard === 'reward'
            })}
          >
            <div className={styles.tokenCardInner}>
              <div className={styles.tokenCardFront}>
                <div className={styles.tokenImage}>
                  <img 
                    src="https://i.ibb.co/kVBZB2w2/Reward-Token200x200.png" 
                    alt="REWARD Token" 
                    className={styles.tokenLogo}
                  />
                </div>
                <div className={styles.tokenInfo}>
                  <h3 className={styles.tokenName}>$REWARD Token</h3>
                  <p className={styles.tokenId}>Token ID: REWARD-cf6eac</p>
                  <p className={styles.tokenDescription}>
                    Passive income, utility, and the engine driving rewards for our members. 
                    Powers the entire ecosystem and provides real-world utility through MakeX.
                  </p>
                  <div className={styles.tokenFeatures}>
                    {rewardFeatures.map((feature) => (
                      <div
                        key={feature.id}
                        className={styles.featureItem}
                        onClick={() => handleFeatureClick('reward', feature)}
                      >
                        <span className={styles.featureIcon}>{feature.icon}</span>
                        <span className={styles.featureText}>{feature.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div 
                className={styles.tokenCardBack}
                onClick={() => handleFeatureClick('reward', null)}
              >
                <div className={styles.tokenCardBackContent}>
                  <h3 className={styles.tokenNameBack}>{selectedFeature?.icon} {selectedFeature?.title}</h3>
                  <p className={styles.tokenDescriptionBack}>{selectedFeature?.description}</p>
                  <div className={styles.backToFront}>
                    <span className={styles.backToFrontText}>Click anywhere to go back</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
