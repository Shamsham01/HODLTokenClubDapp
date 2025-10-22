// prettier-ignore
export default {
  tokensContainer: 'tokens-container w-full py-16 lg:py-24 bg-secondary/5',
  tokensContent: 'tokens-content max-w-6xl mx-auto px-8 lg:px-20',
  tokensHeader: 'tokens-header text-center mb-16',
  tokensTitle: 'tokens-title text-primary text-3xl lg:text-5xl font-bold leading-[1.2] tracking-[-1px] mb-6 transition-all duration-200 ease-out',
  tokensDescription: 'tokens-description text-secondary text-lg lg:text-xl leading-[1.6] tracking-[-0.2px] max-w-3xl mx-auto transition-all duration-200 ease-out',
  tokensGrid: 'tokens-grid grid grid-cols-1 lg:grid-cols-2 gap-8',
  
  // Token Card Flip Styles
  tokenCard: 'token-card bg-primary/5 border border-secondary/20 rounded-3xl p-8 hover:bg-primary/10 hover:border-secondary/40 transition-all duration-200 ease-out cursor-pointer relative h-[400px]',
  tokenCardFlipped: 'token-card-flipped',
  tokenCardInner: 'token-card-inner relative w-full h-full text-center transition-transform duration-700 ease-in-out',
  tokenCardFront: 'token-card-front absolute inset-0 backface-hidden flex flex-col items-center justify-center',
  tokenCardBack: 'token-card-back absolute inset-0 backface-hidden flex flex-col items-center justify-center p-6 bg-accent/10 rounded-3xl border border-accent/30 cursor-pointer hover:bg-accent/20 transition-colors duration-200',
  
  tokenImage: 'token-image flex justify-center mb-6',
  tokenLogo: 'token-logo w-24 h-24 rounded-full object-cover',
  tokenInfo: 'token-info text-center',
  tokenName: 'token-name text-primary text-2xl font-bold mb-2 transition-all duration-200 ease-out',
  tokenId: 'token-id text-accent text-sm font-mono mb-4 transition-all duration-200 ease-out',
  tokenDescription: 'token-description text-secondary text-base leading-[1.6] mb-6 transition-all duration-200 ease-out',
  tokenFeatures: 'token-features flex flex-wrap justify-center gap-3',
  featureItem: 'feature-item flex items-center gap-2 px-3 py-2 bg-secondary/20 rounded-full text-sm whitespace-nowrap cursor-pointer hover:bg-secondary/30 transition-colors duration-200',
  featureIcon: 'feature-icon text-base',
  featureText: 'feature-text text-secondary font-medium',
  
  // Back of the card styles
  tokenCardBackContent: 'token-card-back-content text-center max-w-md',
  tokenNameBack: 'token-name-back text-primary text-2xl font-bold mb-4',
  tokenDescriptionBack: 'token-description-back text-secondary text-base leading-relaxed mb-6',
  backToFront: 'back-to-front mt-6',
  backToFrontText: 'back-to-front-text text-accent text-sm'
} satisfies Record<string, string>;
