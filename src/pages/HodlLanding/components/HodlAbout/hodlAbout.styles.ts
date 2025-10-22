// prettier-ignore
export default {
  aboutContainer: 'about-container w-full py-16 lg:py-24',
  aboutContent: 'about-content max-w-6xl mx-auto px-8 lg:px-20',
  aboutText: 'about-text text-center',
  aboutTitle: 'about-title text-primary text-3xl lg:text-5xl font-bold leading-[1.2] tracking-[-1px] mb-8 transition-all duration-200 ease-out',
  aboutDescription: 'about-description text-secondary text-lg lg:text-xl leading-[1.6] tracking-[-0.2px] max-w-4xl mx-auto mb-16 transition-all duration-200 ease-out',
  aboutValues: 'about-values grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8',
  valueItem: 'value-item flex flex-col items-center text-center p-6 rounded-2xl bg-secondary/10 border border-secondary/20 hover:bg-secondary/20 transition-all duration-200 ease-out',
  valueIcon: 'value-icon text-4xl mb-4',
  valueTitle: 'value-title text-primary text-xl font-bold mb-2 transition-all duration-200 ease-out',
  valueDescription: 'value-description text-secondary text-sm leading-[1.5] transition-all duration-200 ease-out'
} satisfies Record<string, string>;
