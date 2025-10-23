import React, { createContext, useContext, useEffect, useState } from 'react';

interface WarpConfig {
  network: 'mainnet' | 'testnet' | 'devnet';
  apiUrl: string;
}

interface WarpContextType {
  config: WarpConfig;
  isInitialized: boolean;
  detectWarpFromUrl: (url: string) => Promise<any>;
  detectWarpFromHtml: (html: string) => Promise<any>;
}

const WarpContext = createContext<WarpContextType | undefined>(undefined);

interface WarpsProviderProps {
  children: React.ReactNode;
}

export const WarpsProvider: React.FC<WarpsProviderProps> = ({ children }) => {
  const [isInitialized, setIsInitialized] = useState(false);
  
  const config: WarpConfig = {
    network: 'mainnet', // or 'testnet'/'devnet' based on your environment
    apiUrl: 'https://api.multiversx.com'
  };

  useEffect(() => {
    // Initialize Warps SDK when component mounts
    setIsInitialized(true);
  }, []);

  const detectWarpFromUrl = async (url: string) => {
    try {
      // Extract warp parameter from URL
      const urlObj = new URL(url);
      const warpParam = urlObj.searchParams.get('warp');
      
      if (!warpParam) {
        return null;
      }

      // TODO: Implement actual Warp detection using SDK
      // const warpLink = new WarpLink(config);
      // const result = await warpLink.detect(warpParam);
      
      console.log('Warp detected from URL:', warpParam);
      return { warpId: warpParam, type: 'url' };
    } catch (error) {
      console.error('Error detecting warp from URL:', error);
      return null;
    }
  };

  const detectWarpFromHtml = async (html: string) => {
    try {
      // TODO: Implement actual Warp detection from HTML content
      // const warpLink = new WarpLink(config);
      // const result = await warpLink.detectFromHtml(html);
      
      console.log('Warp detected from HTML content');
      return { type: 'html' };
    } catch (error) {
      console.error('Error detecting warp from HTML:', error);
      return null;
    }
  };

  const value: WarpContextType = {
    config,
    isInitialized,
    detectWarpFromUrl,
    detectWarpFromHtml
  };

  return (
    <WarpContext.Provider value={value}>
      {children}
    </WarpContext.Provider>
  );
};

export const useWarps = (): WarpContextType => {
  const context = useContext(WarpContext);
  if (!context) {
    throw new Error('useWarps must be used within a WarpsProvider');
  }
  return context;
};
