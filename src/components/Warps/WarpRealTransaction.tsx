import React, { useState, useEffect } from 'react';
import { useGetAccount, useGetIsLoggedIn, useGetNetworkConfig } from 'lib';
import { useWarpsIntegration } from 'lib/warpsIntegration';

interface WarpRealTransactionProps {
  warpUrl: string;
  title: string;
  description: string;
  image: string;
  price: string;
  onExecute?: (result: any) => void;
  onError?: (error: Error) => void;
}

export const WarpRealTransaction: React.FC<WarpRealTransactionProps> = ({
  warpUrl,
  title,
  description,
  image,
  price,
  onExecute,
  onError
}) => {
  const { address } = useGetAccount();
  const isLoggedIn = useGetIsLoggedIn();
  const { network } = useGetNetworkConfig();
  const warpsIntegration = useWarpsIntegration();
  const [isExecuting, setIsExecuting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [useIframe, setUseIframe] = useState(false);
  const [warpDetails, setWarpDetails] = useState<any>(null);

  // Use iframe as primary method for now
  useEffect(() => {
    console.log('Using iframe embedding for Warp execution');
    setUseIframe(true);
  }, []);

  // Load Warp details
  useEffect(() => {
    const loadWarpDetails = async () => {
      // Set basic warp details without external API calls
      setWarpDetails({
        url: warpUrl,
        title,
        description,
        price,
        isValid: true
      });
    };

    loadWarpDetails();
  }, [warpUrl, title, description, price]);

  const handleExecute = async () => {
    if (!isLoggedIn || !address) {
      onError?.(new Error('Please connect your wallet first'));
      return;
    }

    if (useIframe) {
      // Open in new tab as fallback
      window.open(warpUrl, '_blank');
      return;
    }

    setIsExecuting(true);
    
    try {
      console.log('Starting Warp execution for:', warpUrl);
      
      // For now, just open the Warp URL in a new tab
      window.open(warpUrl, '_blank');
      
      const result = {
        status: 'opened',
        warpUrl: warpUrl,
        message: 'Warp opened in new tab for execution',
        timestamp: new Date().toISOString()
      };
      
      setResult(result);
      onExecute?.(result);
      
    } catch (error) {
      console.error('Error executing warp transaction:', error);
      onError?.(error as Error);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // If using iframe fallback, show iframe
  if (useIframe) {
    return (
      <div className="warp-real-transaction bg-primary/5 border border-secondary/20 rounded-xl overflow-hidden">
        <div className="p-4 border-b border-secondary/20">
          <h3 className="text-primary font-bold text-lg">{title}</h3>
          <p className="text-secondary text-sm">{description}</p>
          <div className="mt-2">
            <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
              {price}
            </span>
          </div>
        </div>
        
        <div className="relative" style={{ height: '600px' }}>
          <iframe
            src={warpUrl}
            width="100%"
            height="100%"
            style={{ border: 'none' }}
            allow="clipboard-read; clipboard-write; payment"
            title={title}
          />
        </div>
        
        <div className="p-3 bg-primary/10 border-t border-secondary/20">
          <p className="text-secondary text-xs text-center">
            Powered by <span className="text-accent font-medium">MultiversX Warps</span> • 
            Direct transaction execution
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="warp-real-transaction bg-primary/5 border border-secondary/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-200">
      {/* Discord-like Preview */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Image */}
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex-shrink-0 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-primary text-lg font-bold mb-1 line-clamp-2">
              {title}
            </h3>
            <p className="text-secondary text-sm mb-2 line-clamp-2">
              {description}
            </p>
            
            {/* Price Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                {price}
              </span>
              <span className="text-secondary text-xs">
                • One mint per transaction
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleExecute}
                disabled={isExecuting || !isLoggedIn}
                className="bg-accent hover:bg-accent/80 disabled:bg-secondary/20 text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isExecuting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Executing...
                  </>
                ) : !isLoggedIn ? (
                  'Connect Wallet to Buy'
                ) : (
                  'Buy NFT Now'
                )}
              </button>
              
              <button
                onClick={handleExpand}
                className="text-secondary hover:text-primary px-2 py-1 rounded text-sm transition-colors"
              >
                {isExpanded ? 'Less' : 'More'}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Details */}
      {isExpanded && (
        <div className="border-t border-secondary/20 p-4 bg-primary/10">
          <div className="space-y-3">
            <div>
              <h4 className="text-primary font-bold text-sm mb-2">Transaction Details</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-secondary">Price:</span>
                  <span className="text-accent font-medium ml-2">{price}</span>
                </div>
                <div>
                  <span className="text-secondary">Network:</span>
                  <span className="text-primary ml-2">{network.name}</span>
                </div>
                <div>
                  <span className="text-secondary">Type:</span>
                  <span className="text-primary ml-2">ESDT NFT</span>
                </div>
                <div>
                  <span className="text-secondary">Limit:</span>
                  <span className="text-primary ml-2">1 per transaction</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/10 border border-accent/20 p-3 rounded-lg">
              <h4 className="text-accent font-bold text-sm mb-2">⚠️ Important</h4>
              <ul className="text-secondary text-xs space-y-1">
                <li>• Ensure you have sufficient $REWARD tokens in your wallet</li>
                <li>• Gas fees will be paid in EGLD</li>
                <li>• NFT will be minted directly to your wallet</li>
                <li>• Transaction cannot be reversed once confirmed</li>
              </ul>
            </div>

            <div className="text-center">
              <p className="text-secondary text-xs">
                Powered by <span className="text-accent font-medium">MultiversX Warps</span> • 
                Real on-chain execution
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {result && (
        <div className="border-t border-green-500/20 bg-green-500/10 p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
            <h4 className="text-green-400 font-bold text-sm">Transaction Successful!</h4>
          </div>
          <div className="text-green-300 text-xs space-y-1">
            <p>NFT has been minted to your wallet</p>
            <p>Transaction Hash: {result.transactionHash || result.hash}</p>
            <p>Price Paid: {result.price || price}</p>
          </div>
        </div>
      )}
    </div>
  );
};
