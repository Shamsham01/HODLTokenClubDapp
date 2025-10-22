// prettier-ignore
export default {
  empyreansContainer: 'empyreans-container w-full py-16 lg:py-24',
  empyreansContent: 'empyreans-content max-w-7xl mx-auto px-8 lg:px-20',
  empyreansHeader: 'empyreans-header text-center mb-16',
  empyreansTitle: 'empyreans-title text-primary text-3xl lg:text-5xl font-bold leading-[1.2] tracking-[-1px] mb-6 transition-all duration-200 ease-out',
  empyreansDescription: 'empyreans-description text-secondary text-lg lg:text-xl leading-[1.6] tracking-[-0.2px] max-w-3xl mx-auto transition-all duration-200 ease-out',
  empyreansGrid: 'empyreans-grid grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch',
  empyreansInfo: 'empyreans-info grid grid-cols-1 md:grid-cols-2 gap-6',
  featureCard: 'feature-card bg-primary/5 border border-secondary/20 rounded-2xl p-6 hover:bg-primary/10 hover:border-secondary/40 transition-all duration-200 ease-out',
  featureTitle: 'feature-title text-primary text-xl font-bold mb-3 transition-all duration-200 ease-out',
  featureDescription: 'feature-description text-secondary text-sm leading-[1.5] transition-all duration-200 ease-out',
  
  // NFT Carousel Styles
  nftCarousel: 'nft-carousel flex flex-col items-center w-full h-full min-h-[500px]',
  carouselContainer: 'carousel-container relative flex items-center justify-center w-full h-full min-h-[400px]',
  carouselButton: 'carousel-button absolute z-10 bg-primary/80 hover:bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center text-xl font-bold transition-all duration-200 ease-out hover:scale-110',
  carouselImageContainer: 'carousel-image-container w-full h-full flex items-center justify-center',
  carouselImage: 'carousel-image w-full h-full object-contain rounded-2xl shadow-2xl',
  carouselDots: 'carousel-dots flex gap-2 mt-4',
  carouselDot: 'carousel-dot w-3 h-3 rounded-full bg-secondary/30 hover:bg-secondary/50 transition-all duration-200 ease-out cursor-pointer',
  carouselDotActive: 'carousel-dot-active bg-accent'
} satisfies Record<string, string>;
