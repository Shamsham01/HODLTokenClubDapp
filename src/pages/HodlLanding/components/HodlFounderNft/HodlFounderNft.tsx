import styles from './hodlFounderNft.styles';

export const HodlFounderNft = () => {

  return (
    <section className={styles.founderNftContainer}>
      <div className={styles.founderNftContent}>
        <div className={styles.founderNftHeader}>
          <h2 className={styles.founderNftTitle}>HODL Founder NFT (HF-NFT)</h2>
          <p className={styles.founderNftDescription}>
            The ultimate tier of exclusivity and passive income in the HODL Token Club ecosystem
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={styles.infoGrid}>
          <div className={styles.infoLabels}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Collection Details</h3>
              <p className={styles.infoText}>
                <strong>Collection:</strong> FHODL-a9ad67<br/>
                <strong>Max Supply:</strong> 100 HF-NFTs<br/>
                <strong>Type:</strong> MP4 Video NFT
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>How to Obtain</h3>
              <p className={styles.infoText}>
                Donate 50 Empyreans NFTs to the HODL Token Club Treasury, including at least 3 $HODL attribute NFTs. 
                The swap process is managed 1:1 with the Founder in Discord.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Passive Income</h3>
              <p className={styles.infoText}>
                <strong>200 $REWARD per NFT per day</strong> via in-wallet staking - automatically earned with no manual claiming required.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>EGLD Airdrops</h3>
              <p className={styles.infoText}>
                Monthly EGLD airdrops from xSafe staking rewards distributed to HF-NFT owners on the 25th of each month. 
                More NFTs = bigger airdrop amount.
              </p>
            </div>
          </div>

          <div className={styles.raritySection}>
            {/* Video Above Table */}
            <div className={styles.smallVideoContainer}>
              <video 
                src="https://media.multiversx.com/nfts/asset/bafybeia2waiqdmtsbne3fy5xtf2fns44mhkexrckaupytmiqbagau2hc6i/2.mp4"
                className={styles.smallVideo}
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
              />
            </div>
            
            <div className={styles.rarityCard}>
              <h3 className={styles.rarityTitle}>Rarity Ranks & Rewards</h3>
              <div className={styles.rarityTable}>
                <div className={styles.rarityRow}>
                  <span className={styles.rank}>Rank 1</span>
                  <span className={styles.reward}>250,000 $REWARD</span>
                </div>
                <div className={styles.rarityRow}>
                  <span className={styles.rank}>Ranks 2-10</span>
                  <span className={styles.reward}>100,000 $REWARD</span>
                </div>
                <div className={styles.rarityRow}>
                  <span className={styles.rank}>Ranks 11-25</span>
                  <span className={styles.reward}>50,000 $REWARD</span>
                </div>
                <div className={styles.rarityRow}>
                  <span className={styles.rank}>Ranks 26-60</span>
                  <span className={styles.reward}>25,000 $REWARD</span>
                </div>
                <div className={styles.rarityRow}>
                  <span className={styles.rank}>Ranks 61-100</span>
                  <span className={styles.reward}>10,000 $REWARD</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
