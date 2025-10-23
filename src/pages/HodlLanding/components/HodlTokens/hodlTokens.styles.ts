// prettier-ignore
export default {
  tokensContainer: 'tokens-container w-full py-8 sm:py-16 lg:py-24 bg-secondary/5',
  tokensContent: 'tokens-content max-w-6xl mx-auto px-4 sm:px-8 lg:px-20',
  tokensHeader: 'tokens-header text-center mb-8 sm:mb-16',
  tokensTitle: 'tokens-title text-primary text-2xl sm:text-3xl lg:text-5xl font-bold leading-[1.2] tracking-[-1px] mb-4 sm:mb-6 transition-all duration-200 ease-out',
  tokensDescription: 'tokens-description text-secondary text-base sm:text-lg lg:text-xl leading-[1.6] tracking-[-0.2px] max-w-3xl mx-auto transition-all duration-200 ease-out',
  tokensGrid: 'tokens-grid grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8',
  
  // Token Card Flip Styles
  tokenCard: 'token-card bg-primary/5 border border-secondary/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 hover:bg-primary/10 hover:border-secondary/40 transition-all duration-200 ease-out cursor-pointer relative min-h-[350px] sm:h-[400px] lg:h-[400px]',
  tokenCardFlipped: 'token-card-flipped',
  tokenCardInner: 'token-card-inner relative w-full h-full text-center transition-transform duration-700 ease-in-out',
  tokenCardFront: 'token-card-front absolute inset-0 backface-hidden flex flex-col items-center justify-center p-2 sm:p-4 lg:p-0',
  tokenCardBack: 'token-card-back absolute inset-0 backface-hidden flex flex-col items-center justify-center p-3 sm:p-6 lg:p-6 bg-accent/10 rounded-2xl sm:rounded-3xl border border-accent/30 cursor-pointer hover:bg-accent/20 transition-colors duration-200',
  
  tokenImage: 'token-image flex justify-center mb-4 sm:mb-6',
  tokenLogo: 'token-logo w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full object-cover',
  tokenInfo: 'token-info text-center w-full',
  tokenName: 'token-name text-primary text-xl sm:text-2xl font-bold mb-2 transition-all duration-200 ease-out',
  tokenId: 'token-id text-accent text-xs sm:text-sm font-mono mb-3 sm:mb-4 transition-all duration-200 ease-out break-all',
  tokenDescription: 'token-description text-secondary text-sm sm:text-base leading-[1.5] sm:leading-[1.6] mb-4 sm:mb-6 transition-all duration-200 ease-out px-2 sm:px-0',
  tokenFeatures: 'token-features flex flex-wrap justify-center gap-2 sm:gap-3 w-full',
  featureItem: 'feature-item flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-1.5 sm:py-2 bg-secondary/20 rounded-full text-xs sm:text-sm whitespace-nowrap cursor-pointer hover:bg-secondary/30 transition-colors duration-200 flex-shrink-0',
  featureIcon: 'feature-icon text-sm sm:text-base',
  featureText: 'feature-text text-secondary font-medium text-xs sm:text-sm',
  
  // Back of the card styles
  tokenCardBackContent: 'token-card-back-content text-center max-w-md w-full px-2 sm:px-0',
  tokenNameBack: 'token-name-back text-primary text-xl sm:text-2xl font-bold mb-3 sm:mb-4',
  tokenDescriptionBack: 'token-description-back text-secondary text-sm sm:text-base leading-relaxed mb-4 sm:mb-6',
  backToFront: 'back-to-front mt-4 sm:mt-6',
  backToFrontText: 'back-to-front-text text-accent text-xs sm:text-sm'
} satisfies Record<string, string>;
