export const styles = {
  assetsGrid: 'assets-grid flex flex-col gap-4 flex-1 rounded-xl bg-primary transition-all duration-200 ease-out p-6 lg:p-10 justify-center border border-secondary select-none',
  assetsContainer: 'assets-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 w-full select-none',
  assetItem: 'asset-item flex flex-col items-center p-3 bg-surface rounded-lg border border-border hover:bg-surface-hover transition-colors duration-200 min-h-[120px] flex-1 select-none',
  assetInfo: 'asset-info flex flex-col items-center gap-3 mb-3',
  assetLogo: 'asset-logo w-12 h-12 rounded-full border-2 border-border object-cover',
  assetDetails: 'asset-details flex flex-col items-center text-center',
  assetName: 'asset-name text-primary font-medium text-sm select-none',
  assetTicker: 'asset-ticker text-secondary text-xs select-none',
  assetValue: 'asset-value flex flex-col items-center select-none',
  balanceAmount: 'balance-amount text-primary font-semibold text-base select-none',
  balanceUsd: 'balance-usd text-secondary text-xs mt-1 select-none',
  countNumber: 'count-number text-primary font-semibold text-lg select-none',
  loadingText: 'loading-text text-secondary text-center py-8',
  errorText: 'error-text text-red-500 text-center py-8',
  emptyText: 'empty-text text-secondary text-center py-4 italic col-span-full'
};
