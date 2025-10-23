import React, { useState } from 'react';
import { useWarps } from './WarpsProvider';

interface WarpExecutorProps {
  warpId: string;
  onExecute?: (result: any) => void;
  onError?: (error: Error) => void;
}

export const WarpExecutor: React.FC<WarpExecutorProps> = ({ 
  warpId, 
  onExecute, 
  onError 
}) => {
  const { config } = useWarps();
  const [isExecuting, setIsExecuting] = useState(false);
  const [result, setResult] = useState<any>(null);

  const executeWarp = async () => {
    setIsExecuting(true);
    
    try {
      // Check if warpId is a URL
      if (warpId.startsWith('http')) {
        // For URL-based Warps, redirect to the Warp URL
        window.open(warpId, '_blank');
        
        const mockResult = {
          warpId,
          status: 'redirected',
          message: 'Redirected to Warp URL',
          timestamp: new Date().toISOString()
        };
        
        setResult(mockResult);
        onExecute?.(mockResult);
        return;
      }

      // TODO: Implement actual Warp execution using SDK for non-URL Warps
      // const actionExecutor = new WarpActionExecutor(config, window.location.href);
      // const tx = actionExecutor.createTransactionForExecute(warpAction, inputArgs, inputTransfers);
      
      // Simulate execution for now
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockResult = {
        warpId,
        status: 'success',
        transactionHash: '0x' + Math.random().toString(16).substr(2, 64),
        timestamp: new Date().toISOString()
      };
      
      setResult(mockResult);
      onExecute?.(mockResult);
      
    } catch (error) {
      console.error('Error executing warp:', error);
      onError?.(error as Error);
    } finally {
      setIsExecuting(false);
    }
  };

  return (
    <div className="warp-executor bg-primary/5 border border-secondary/20 rounded-xl p-6">
      <h3 className="text-primary text-lg font-bold mb-4">Execute Warp</h3>
      
      <div className="mb-4">
        <p className="text-secondary text-sm mb-2">Warp ID:</p>
        <code className="bg-secondary/10 px-2 py-1 rounded text-xs font-mono break-all">
          {warpId}
        </code>
      </div>

      <button
        onClick={executeWarp}
        disabled={isExecuting}
        className="w-full bg-accent hover:bg-accent/80 disabled:bg-secondary/20 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
      >
        {isExecuting ? 'Opening Warp...' : 'Open Warp Transaction'}
      </button>

      {result && (
        <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
          <h4 className="text-green-400 font-bold mb-2">
            {result.status === 'redirected' ? 'Warp Opened!' : 'Execution Successful!'}
          </h4>
          {result.status === 'redirected' ? (
            <div>
              <p className="text-green-300 text-sm mb-2">
                {result.message}
              </p>
              <p className="text-green-300 text-xs">
                Complete the transaction in the new tab to purchase your NFT.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-green-300 text-sm mb-2">
                Transaction Hash: {result.transactionHash}
              </p>
              <p className="text-green-300 text-xs">
                {new Date(result.timestamp).toLocaleString()}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
