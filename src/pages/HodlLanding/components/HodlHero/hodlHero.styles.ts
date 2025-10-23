// prettier-ignore
export default {
  heroContainer: 'hero-container relative w-full h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-xl shadow-secondary/15 border border-secondary backdrop-blur-md transition-all duration-200 ease-out',
  heroVideo: 'hero-video absolute inset-0 w-full h-full object-cover',
  heroContent: 'hero-content absolute inset-0 flex flex-col items-center justify-center text-center px-8 lg:px-20 py-16 bg-gradient-to-b from-black/20 via-black/40 to-black/60 z-10',
  heroText: 'hero-text flex flex-col items-center gap-6 max-w-4xl',
  heroTitle: 'hero-title text-primary text-4xl lg:text-7xl font-bold leading-[1.1] tracking-[-2px] transition-all duration-200 ease-out',
  heroSubtitle: 'hero-subtitle text-accent text-xl lg:text-3xl font-medium leading-[1.2] tracking-[-0.5px] transition-all duration-200 ease-out',
  heroDescription: 'hero-description text-secondary text-lg lg:text-xl leading-[1.6] tracking-[-0.2px] max-w-3xl transition-all duration-200 ease-out',
  heroButtons: 'hero-buttons flex flex-col lg:flex-row items-center gap-4 mt-8',
  primaryButton: 'primary-button bg-btn-primary text-btn-primary hover:bg-btn-hover px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ease-out',
  secondaryButton: 'secondary-button bg-btn-secondary text-btn-secondary hover:bg-btn-primary hover:text-btn-primary px-8 py-4 rounded-xl font-bold text-lg transition-all duration-200 ease-out flex items-center gap-2',
  buttonIcon: 'button-icon w-5 h-5 transition-all duration-200 ease-out'
} satisfies Record<string, string>;
