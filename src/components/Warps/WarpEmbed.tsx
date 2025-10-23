import React, { useState, useEffect } from 'react';
import { useGetAccount, useGetIsLoggedIn } from 'lib';

interface WarpEmbedProps {
  warpUrl: string;
  title?: string;
  description?: string;
  image?: string;
  onExecute?: (result: any) => void;
  onError?: (error: Error) => void;
}

export const WarpEmbed: React.FC<WarpEmbedProps> = ({
  warpUrl,
  title = "Buy 1 Galactic Hodler NFT with $REWARD",
  description = "Buy 1 Galactic Hodler NFT from distributor Smart Contract.",
  image = "https://i.ibb.co/Gf3HkSTm/Hodl-Token200x200-1.png",
  onExecute,
  onError
}) => {
  const { address } = useGetAccount();
  const isLoggedIn = useGetIsLoggedIn();
  const [isExecuting, setIsExecuting] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [warpData, setWarpData] = useState<any>(null);

  // Extract warp ID from URL
  const getWarpId = (url: string) => {
    try {
      const urlObj = new URL(url);
      const pathParts = urlObj.pathname.split('/');
      return pathParts[pathParts.length - 1];
    } catch {
      return null;
    }
  };

  const warpId = getWarpId(warpUrl);

  useEffect(() => {
    // TODO: Use actual Warps SDK to fetch warp data
    // const warpLink = new WarpLink(config);
    // const result = await warpLink.detect(warpId);
    // setWarpData(result);
    
    // Mock warp data for now
    setWarpData({
      id: warpId,
      title,
      description,
      image,
      price: "25,000 $REWARD",
      actionType: "contract"
    });
  }, [warpId, title, description, image]);

  const handleExecute = async () => {
    if (!isLoggedIn) {
      onError?.(new Error('Please connect your wallet first'));
      return;
    }

    setIsExecuting(true);
    
    try {
      // TODO: Use actual Warps SDK to execute transaction
      // const actionExecutor = new WarpActionExecutor(config, window.location.href);
      // const tx = actionExecutor.createTransactionForExecute(warpAction, inputArgs, inputTransfers);
      
      // Simulate transaction execution
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const result = {
        warpId,
        status: 'success',
        transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
        timestamp: new Date().toISOString(),
        price: "25,000 $REWARD"
      };
      
      onExecute?.(result);
      
    } catch (error) {
      console.error('Error executing warp:', error);
      onError?.(error as Error);
    } finally {
      setIsExecuting(false);
    }
  };

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  if (!warpData) {
    return (
      <div className="warp-embed bg-primary/5 border border-secondary/20 rounded-xl p-4">
        <div className="animate-pulse">
          <div className="h-4 bg-secondary/20 rounded w-3/4 mb-2"></div>
          <div className="h-3 bg-secondary/20 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="warp-embed bg-primary/5 border border-secondary/20 rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-200">
      {/* Discord-like Preview */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Image */}
          <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/60 rounded-lg flex-shrink-0 overflow-hidden">
            <img 
              src={warpData.image} 
              alt={warpData.title}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-primary text-lg font-bold mb-1 line-clamp-2">
              {warpData.title}
            </h3>
            <p className="text-secondary text-sm mb-2 line-clamp-2">
              {warpData.description}
            </p>
            
            {/* Price Badge */}
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-accent/10 text-accent px-2 py-1 rounded text-xs font-medium">
                {warpData.price}
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
                  <span className="text-accent font-medium ml-2">{warpData.price}</span>
                </div>
                <div>
                  <span className="text-secondary">Network:</span>
                  <span className="text-primary ml-2">MultiversX</span>
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
                Secure on-chain execution
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
