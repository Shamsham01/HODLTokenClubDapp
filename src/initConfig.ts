import './styles/tailwind.css';
import './styles/style.css';

import { walletConnectV2ProjectId, environment } from 'config';
import { EnvironmentsEnum, ICustomProvider, InitAppType } from './lib';
import { InMemoryProvider } from './provider/inMemoryProvider';

const providers: ICustomProvider[] = [
  {
    name: 'In Memory Provider',
    type: 'inMemoryProvider',
    iconUrl: `${window.location.origin}/multiversx-white.svg`,
    constructor: async (options) => new InMemoryProvider(options)
  }
];

(window as any).multiversx = {};
// Option 1: Add providers using the `window.providers` array
(window as any).multiversx.providers = providers;

export const config: InitAppType = {
  storage: { getStorageCallback: () => sessionStorage },
  dAppConfig: {
    nativeAuth: true,
    environment: environment,
    theme: 'mvx:dark-theme',
    providers: {
      walletConnect: {
        walletConnectV2ProjectId
      }
    }
  }

  // Option 2: Add providers using the config `customProviders` array
  // customProviders: [providers]
};

// Extension detection for mainnet - simplified approach
if (environment === 'mainnet') {
  // Wait for page to fully load before checking for extension
  window.addEventListener('load', () => {
    setTimeout(() => {
      // Check for the actual MultiversX extension
      if ((window as any).elrond && (window as any).elrond.providers) {
        console.log('MultiversX Extension detected:', (window as any).elrond);
      } else {
        console.log('MultiversX Extension not detected - this is expected on localhost due to Chrome security policies');
        console.log('To use the extension, deploy to a real domain or use a different approach');
      }
    }, 2000);
  });
}
