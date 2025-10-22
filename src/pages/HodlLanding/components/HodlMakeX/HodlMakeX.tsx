import styles from './hodlMakeX.styles';

export const HodlMakeX = () => {
  return (
    <section className={styles.makeXContainer}>
      <div className={styles.makeXContent}>
        <div className={styles.makeXHeader}>
          <h2 className={styles.makeXTitle}>MakeX Platform</h2>
          <p className={styles.makeXDescription}>
            The first no-code automation platform bridging MultiversX blockchain with Make.com's 2,000+ Web2 apps and AI tools
          </p>
        </div>

        {/* Two Column Layout */}
        <div className={styles.infoGrid}>
          <div className={styles.infoLabels}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Platform Summary</h3>
              <p className={styles.infoText}>
                <strong>MakeX</strong> is a modular suite of 40+ modules enabling users to build, automate, and scale Web3 operations through intuitive, visual workflows. Available as no-code automation platform for developers and non-developers alike.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Core Capabilities</h3>
              <p className={styles.infoText}>
                <strong>Snapshots & Draws:</strong> NFT/SFT/ESDT/token snapshotting and random draws<br/>
                <strong>Transfers & Airdrops:</strong> Asset transfers, bulk airdrops, and free minting<br/>
                <strong>Token Manager:</strong> Create, issue, mint, burn, and manage custom tokens<br/>
                <strong>Warps:</strong> Execute smart contract and blockchain operations<br/>
                <strong>xExchange Swaps:</strong> Automated trading and swap flows
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Strategic Vision</h3>
              <p className={styles.infoText}>
                To become the <strong>"Zapier of Web3"</strong> – a user-friendly, no-code automation layer that powers blockchain workflows, data exchange, and project launch while increasing utility and demand for the REWARD token.
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Token Utility & Installation</h3>
              <p className={styles.infoText}>
                <strong>Usage Fee:</strong> $0.03 per operation in REWARD tokens<br/>
                <strong>Network Effects:</strong> Drives token demand and expands HODL Token Club exposure<br/>
                <strong>Installation:</strong> Install via <a href="https://linktr.ee/makex_web3" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">MakeX Linktree</a> on <a href="https://www.make.com/en/login" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Make.com</a>
              </p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Marketplace Potential</h3>
              <p className={styles.infoText}>
                By enabling template sales as Data NFTs, we amplify token utility and builder incentives. The platform creates a sustainable ecosystem where developers can monetize their automation workflows while driving demand for REWARD tokens.
              </p>
            </div>
          </div>

          <div className={styles.videoSection}>
            {/* Video Frame */}
            <div className={styles.videoContainer}>
              <video
                src="https://media.multiversx.com/nfts/asset/bafybeih32s3dpoz6tau772ts3lxoexzkc3z67zmkavwopo7rfrchf5eaha/MakeX_Presentation.mp4"
                className={styles.makeXVideo}
                autoPlay
                loop
                muted
                playsInline
                controlsList="nodownload nofullscreen noremoteplayback"
                disablePictureInPicture
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
