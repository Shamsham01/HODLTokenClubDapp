import React, { useState, useEffect } from 'react';
import { useGetAccount, useGetIsLoggedIn, useGetNetworkConfig } from 'lib';
import { useWarpsIntegration } from 'lib/warpsIntegration';

interface WarpTransactionProps {
  warpUrl: string;
  title: string;
  description: string;
  image: string;
  price: string;
  onExecute?: (result: any) => void;
  onError?: (error: Error) => void;
}

export const WarpTransaction: React.FC<WarpTransactionProps> = ({
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
  const [warpDetails, setWarpDetails] = useState<any>(null);

  // Load Warp details using the real SDK
  useEffect(() => {
    const loadWarpDetails = async () => {
      if (!warpsIntegration || !warpsIntegration.isValidWarpUrl(warpUrl)) {
        return;
      }

      try {
        const details = await warpsIntegration.detectWarp(warpUrl);
        setWarpDetails(details);
      } catch (error) {
        console.error('Error loading Warp details:', error);
        // Fallback to basic details if detection fails
        setWarpDetails({
          title,
          description,
          price,
          isValid: true
        });
      }
    };

    loadWarpDetails();
  }, [warpUrl, warpsIntegration, title, description, price]);

  const handleExecute = async () => {
    if (!isLoggedIn || !address) {
      onError?.(new Error('Please connect your wallet first'));
      return;
    }

    if (!warpsIntegration) {
      onError?.(new Error('Warps integration not available'));
      return;
    }

    if (!warpsIntegration.isValidWarpUrl(warpUrl)) {
      onError?.(new Error('Invalid Warp URL'));
      return;
    }

    setIsExecuting(true);
    
    try {
      console.log('Starting Warp execution for:', warpUrl);
      
      // Use the real Warps SDK to execute the transaction
      const executionResult = await warpsIntegration.executeWarp(warpUrl);
      
      console.log('Warp execution completed:', executionResult);
      
      setResult(executionResult);
      onExecute?.(executionResult);
      
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

  return (
    <div className="warp-transaction bg-primary/5 border border-secondary/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-200">
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

            {warpDetails && (
              <div>
                <h4 className="text-primary font-bold text-sm mb-2">Contract Details</h4>
                <div className="bg-secondary/10 p-3 rounded-lg">
                  <div className="text-xs space-y-1">
                    <div>
                      <span className="text-secondary">Contract:</span>
                      <code className="text-primary ml-2 font-mono">
                        {warpDetails.contractAddress.slice(0, 10)}...{warpDetails.contractAddress.slice(-10)}
                      </code>
                    </div>
                    <div>
                      <span className="text-secondary">Function:</span>
                      <span className="text-primary ml-2">{warpDetails.functionName}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

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
                Direct on-chain execution
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
            <p>Transaction Hash: {result.hash}</p>
            <p>Price Paid: {result.price}</p>
          </div>
        </div>
      )}
    </div>
  );
};
