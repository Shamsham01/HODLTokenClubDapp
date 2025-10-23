import React, { useState } from 'react';

interface WarpIframeProps {
  warpUrl: string;
  title?: string;
  height?: string;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export const WarpIframe: React.FC<WarpIframeProps> = ({
  warpUrl,
  title = "Galactic Hodler NFT Purchase",
  height = "600px",
  onLoad,
  onError
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoading(false);
    onLoad?.();
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
    onError?.(new Error('Failed to load Warp iframe'));
  };

  if (hasError) {
    return (
      <div className="warp-iframe-error bg-primary/5 border border-red-500/20 rounded-xl p-6 text-center">
        <div className="text-red-400 text-4xl mb-4">⚠️</div>
        <h3 className="text-red-400 font-bold mb-2">Failed to Load Warp</h3>
        <p className="text-secondary text-sm mb-4">
          Unable to load the Warp transaction interface. Please try again or use the direct link.
        </p>
        <a
          href={warpUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-accent hover:bg-accent/80 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
        >
          Open in New Tab
        </a>
      </div>
    );
  }

  return (
    <div className="warp-iframe-container bg-primary/5 border border-secondary/20 rounded-xl overflow-hidden">
      <div className="p-4 border-b border-secondary/20">
        <h3 className="text-primary font-bold text-lg">{title}</h3>
        <p className="text-secondary text-sm">
          Complete your NFT purchase using the embedded Warp interface below.
        </p>
      </div>
      
      <div className="relative" style={{ height }}>
        {isLoading && (
          <div className="absolute inset-0 bg-primary/5 flex items-center justify-center">
            <div className="text-center">
              <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-secondary text-sm">Loading Warp interface...</p>
            </div>
          </div>
        )}
        
        <iframe
          src={warpUrl}
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="clipboard-read; clipboard-write; payment"
          onLoad={handleLoad}
          onError={handleError}
          title={title}
        />
      </div>
      
      <div className="p-3 bg-primary/10 border-t border-secondary/20">
        <p className="text-secondary text-xs text-center">
          Powered by <span className="text-accent font-medium">MultiversX Warps</span> • 
          Secure transaction execution
        </p>
      </div>
    </div>
  );
};
