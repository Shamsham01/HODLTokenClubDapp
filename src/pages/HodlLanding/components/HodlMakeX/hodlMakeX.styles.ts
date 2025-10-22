// prettier-ignore
export default {
  makeXContainer: 'makeX-container w-full py-16 lg:py-24',
  makeXContent: 'makeX-content max-w-7xl mx-auto px-8 lg:px-20',
  makeXHeader: 'makeX-header text-center mb-16',
  makeXTitle: 'makeX-title text-primary text-3xl lg:text-5xl font-bold leading-[1.2] tracking-[-1px] mb-6 transition-all duration-200 ease-out',
  makeXDescription: 'makeX-description text-secondary text-lg lg:text-xl leading-[1.6] tracking-[-0.2px] max-w-3xl mx-auto transition-all duration-200 ease-out',

  // Two Column Layout
  infoGrid: 'info-grid grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch',
  infoLabels: 'info-labels space-y-4 flex flex-col',
  videoSection: 'video-section flex flex-col h-full',

  // Info Cards Styles
  infoCard: 'info-card bg-primary/5 border border-secondary/20 rounded-2xl p-4 hover:bg-primary/10 hover:border-secondary/40 transition-all duration-200 ease-out flex-1',
  infoTitle: 'info-title text-primary text-lg font-bold mb-3 transition-all duration-200 ease-out',
  infoText: 'info-text text-secondary text-sm leading-[1.5] transition-all duration-200 ease-out',

  // Video Styles
  videoContainer: 'video-container w-full h-full flex items-center justify-center',
  makeXVideo: 'makeX-video w-full h-full object-contain rounded-2xl shadow-2xl'
} satisfies Record<string, string>;
