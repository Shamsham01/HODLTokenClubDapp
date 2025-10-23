import React, { useEffect, useState } from 'react';
import { useWarps } from './WarpsProvider';

interface WarpDetectorProps {
  onWarpDetected?: (warp: any) => void;
}

export const WarpDetector: React.FC<WarpDetectorProps> = ({ onWarpDetected }) => {
  const { detectWarpFromUrl, isInitialized } = useWarps();
  const [detectedWarp, setDetectedWarp] = useState<any>(null);

  useEffect(() => {
    if (!isInitialized) return;

    const checkForWarp = async () => {
      // Check current URL for warp parameter
      const warp = await detectWarpFromUrl(window.location.href);
      if (warp) {
        setDetectedWarp(warp);
        onWarpDetected?.(warp);
      }
    };

    checkForWarp();

    // Listen for URL changes (for SPA routing)
    const handleUrlChange = () => {
      checkForWarp();
    };

    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, [isInitialized, detectWarpFromUrl, onWarpDetected]);

  if (!detectedWarp) {
    return null;
  }

  return (
    <div className="warp-detector fixed top-4 right-4 z-50 bg-accent/90 text-white p-4 rounded-lg shadow-lg">
      <h3 className="font-bold mb-2">Warp Detected!</h3>
      <p className="text-sm mb-2">Warp ID: {detectedWarp.warpId}</p>
      <button 
        className="bg-white text-accent px-3 py-1 rounded text-sm font-medium hover:bg-gray-100 transition-colors"
        onClick={() => setDetectedWarp(null)}
      >
        Execute Warp
      </button>
    </div>
  );
};
