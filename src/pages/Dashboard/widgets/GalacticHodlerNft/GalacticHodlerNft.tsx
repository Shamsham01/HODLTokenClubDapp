import React, { useState } from 'react';
import { useGetAccount, useGetIsLoggedIn } from 'lib';
import { WarpRealTransaction } from 'components/Warps';

export const GalacticHodlerNft = () => {
  const { address } = useGetAccount();
  const isLoggedIn = useGetIsLoggedIn();
  const [isExecuting, setIsExecuting] = useState(false);

  const handleExecute = (result: any) => {
    console.log('Galactic Hodler NFT purchase executed:', result);
    setIsExecuting(false);
  };

  const handleError = (error: Error) => {
    console.error('Galactic Hodler NFT purchase failed:', error);
    setIsExecuting(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="p-6 bg-primary/5 border border-secondary/20 rounded-xl">
        <h3 className="text-primary text-xl font-bold mb-4">Galactic Hodler NFT</h3>
        <p className="text-secondary text-sm mb-4">
          Please connect your wallet to purchase the Galactic Hodler NFT for 25,000 $REWARD.
        </p>
        <div className="bg-secondary/10 p-4 rounded-lg">
          <p className="text-secondary text-sm">
            <strong>Price:</strong> 25,000 $REWARD<br/>
            <strong>Collection:</strong> Galactic Hodler NFT<br/>
            <strong>Network:</strong> MultiversX Mainnet
          </p>
        </div>
      </div>
    );
  }

  return (
    <WarpRealTransaction
      warpUrl="https://usewarp.to/buy-ghnft-with-reward"
      title="Buy 1 Galactic Hodler NFT with $REWARD"
      description="Buy 1 Galactic Hodler NFT from distributor Smart Contract."
      image="https://i.ibb.co/Gf3HkSTm/Hodl-Token200x200-1.png"
      price="25,000 $REWARD"
      onExecute={handleExecute}
      onError={handleError}
    />
  );
};
