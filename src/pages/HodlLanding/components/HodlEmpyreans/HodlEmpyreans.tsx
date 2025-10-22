import { useState, useEffect } from 'react';
import styles from './hodlEmpyreans.styles';

export const HodlEmpyreans = () => {
  const nftExamples = [
    { url: "https://i.ibb.co/rR9WKjv3/Xoxno.jpg", name: "Xoxno" },
    { url: "https://i.ibb.co/JwjCFXc6/EMP-3060d5-0159.png", name: "EMP-3060d5" },
    { url: "https://i.ibb.co/0VXkw8jF/EMP-897b49-07a9.jpg", name: "EMP-897b49" },
    { url: "https://i.ibb.co/WNznyvYd/EMP-897b49-0da9.jpg", name: "EMP-897b49" },
    { url: "https://i.ibb.co/q3hs98vT/EMP-897b49-11fc.jpg", name: "EMP-897b49" },
    { url: "https://i.ibb.co/39MD8CwC/EMP-897b49-0da4.jpg", name: "EMP-897b49" },
    { url: "https://i.ibb.co/wZwTf0yv/EMP-897b49-03a0.jpg", name: "EMP-897b49" },
    { url: "https://i.ibb.co/Xk8F8ZC4/EMP-897b49-0246.jpg", name: "EMP-897b49" }
  ];

  const [currentNftIndex, setCurrentNftIndex] = useState(0);

  // Auto-rotate carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNftIndex((prevIndex) => 
        prevIndex === nftExamples.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [nftExamples.length]);

  const goToNext = () => {
    setCurrentNftIndex((prevIndex) => 
      prevIndex === nftExamples.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setCurrentNftIndex((prevIndex) => 
      prevIndex === 0 ? nftExamples.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className={styles.empyreansContainer}>
      <div className={styles.empyreansContent}>
        <div className={styles.empyreansHeader}>
          <h2 className={styles.empyreansTitle}>Empyreans NFT Collection</h2>
          <p className={styles.empyreansDescription}>
            More than just an NFT collection – it's a strategic leap forward strengthening our ecosystem
          </p>
        </div>

        <div className={styles.empyreansGrid}>
          <div className={styles.empyreansInfo}>
            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Liquidity First</h3>
              <p className={styles.featureDescription}>
                1,000 EGLD injected into LP reserves for tighter spreads and greater price stability
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Predictable Yield</h3>
              <p className={styles.featureDescription}>
                Over 10 million $REWARD distributed annually via in-wallet staking, with higher rewards for rarer traits
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Fair Growth</h3>
              <p className={styles.featureDescription}>
                A transparent migration process protecting early supporters while welcoming new members
              </p>
            </div>

            <div className={styles.featureCard}>
              <h3 className={styles.featureTitle}>Recurring Cashflow</h3>
              <p className={styles.featureDescription}>
                Treasury-funded rewards, royalties, and EGLD yield to sustain long-term operations
              </p>
            </div>
          </div>

          <div className={styles.nftCarousel}>
            <div className={styles.carouselContainer}>
              <button 
                className={styles.carouselButton}
                onClick={goToPrevious}
                aria-label="Previous NFT"
              >
                ‹
              </button>
              
              <div className={styles.carouselImageContainer}>
                <img 
                  src={nftExamples[currentNftIndex].url} 
                  alt={`Empyrean NFT ${currentNftIndex + 1}`}
                  className={styles.carouselImage}
                />
              </div>
              
              <button 
                className={styles.carouselButton}
                onClick={goToNext}
                aria-label="Next NFT"
              >
                ›
              </button>
            </div>
            
            <div className={styles.carouselDots}>
              {nftExamples.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.carouselDot} ${index === currentNftIndex ? styles.carouselDotActive : ''}`}
                  onClick={() => setCurrentNftIndex(index)}
                  aria-label={`Go to NFT ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
