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
              <h3 className={styles.infoTitle}>Token Utility</h3>
              <p className={styles.infoText}>
                <strong>Usage Fee:</strong> $0.03 per operation in REWARD tokens<br/>
                <strong>Network Effects:</strong> Drives token demand and expands HODL Token Club exposure<br/>
                <strong>Marketplace:</strong> Template sales as Data NFTs amplify token utility and builder incentives
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

            {/* Installation Links */}
            <div className={styles.installationSection}>
              <h3 className={styles.installationTitle}>Install MakeX Apps</h3>
              <div className={styles.installationGrid}>
                <a 
                  href="https://eu2.make.com/app/invite/682839e9c23f1ba1aeb9925e16551466" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.installationCard}
                >
                  <div className={styles.appLogo}>
                    <img 
                      src="https://i.ibb.co/8nFjZp3g/ESDT-1.png" 
                      alt="Snapshot & Draw Apps" 
                      className={styles.logoImage}
                    />
                  </div>
                  <div className={styles.appInfo}>
                    <h4 className={styles.appName}>Snapshot & Draw Apps</h4>
                    <p className={styles.appDescription}>NFT/SFT/ESDT snapshotting and random draws</p>
                    <div className={styles.installButton}>
                      <span className={styles.installText}>Install App</span>
                      <span className={styles.installIcon}>→</span>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://eu2.make.com/app/invite/db68efb5e85d04d711a632a3b2017b7d" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.installationCard}
                >
                  <div className={styles.appLogo}>
                    <img 
                      src="https://i.ibb.co/TBf79Q0B/Multivers-X-Transfers.png" 
                      alt="MultiversX Transfers" 
                      className={styles.logoImage}
                    />
                  </div>
                  <div className={styles.appInfo}>
                    <h4 className={styles.appName}>MultiversX Transfers</h4>
                    <p className={styles.appDescription}>Asset transfers, bulk airdrops, and free minting</p>
                    <div className={styles.installButton}>
                      <span className={styles.installText}>Install App</span>
                      <span className={styles.installIcon}>→</span>
                    </div>
                  </div>
                </a>

                <a 
                  href="https://eu2.make.com/app/invite/113f288efa442e5a2529b09e3dbe4339" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.installationCard}
                >
                  <div className={styles.appLogo}>
                    <img 
                      src="https://i.ibb.co/NgfrGqmr/Warps.png" 
                      alt="Warps" 
                      className={styles.logoImage}
                    />
                  </div>
                  <div className={styles.appInfo}>
                    <h4 className={styles.appName}>Warps</h4>
                    <p className={styles.appDescription}>Execute smart contract and blockchain operations</p>
                    <div className={styles.installButton}>
                      <span className={styles.installText}>Install App</span>
                      <span className={styles.installIcon}>→</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
