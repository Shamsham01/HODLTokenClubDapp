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
  videoContainer: 'video-container w-full flex items-center justify-center mb-6',
  makeXVideo: 'makeX-video w-full h-64 lg:h-80 object-contain rounded-2xl shadow-2xl',

  // Installation Section Styles
  installationSection: 'installation-section w-full',
  installationTitle: 'installation-title text-primary text-xl font-bold mb-4 text-center',
  installationGrid: 'installation-grid grid grid-cols-1 gap-3',
  installationCard: 'installation-card bg-primary/5 border border-secondary/20 rounded-xl p-4 hover:bg-primary/10 hover:border-accent/40 transition-all duration-200 ease-out cursor-pointer group',
  appLogo: 'app-logo flex items-center justify-center mb-3',
  logoImage: 'logo-image w-12 h-12 rounded-lg object-cover',
  appInfo: 'app-info text-center',
  appName: 'app-name text-primary text-base font-bold mb-1 group-hover:text-accent transition-colors duration-200',
  appDescription: 'app-description text-secondary text-xs mb-3 leading-relaxed',
  installButton: 'install-button bg-accent/10 hover:bg-accent/20 border border-accent/30 rounded-lg px-3 py-2 flex items-center justify-center gap-2 transition-all duration-200 group-hover:border-accent/50',
  installText: 'install-text text-accent text-xs font-medium',
  installIcon: 'install-icon text-accent text-sm group-hover:translate-x-1 transition-transform duration-200'
} satisfies Record<string, string>;
