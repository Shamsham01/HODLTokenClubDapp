import { useEffect, useState } from 'react';
import { useGetAccount } from 'lib';

import { styles } from './hodlTokenClubHoldings.styles';

interface TokenData {
  identifier: string;
  name: string;
  ticker: string;
  balance: string;
  decimals: number;
  valueUsd?: number;
  price?: number;
  assets?: {
    pngUrl?: string;
    svgUrl?: string;
  };
}

interface NftCollectionData {
  collection: string;
  name: string;
  ticker: string;
  count: number;
  assets?: {
    pngUrl?: string;
    svgUrl?: string;
  };
}

const TOKEN_IDENTIFIERS = [
  'HODL-b8bd81',
  'REWARD-cf6eac', 
  'DROP-1fc8cc'
];

const NFT_COLLECTIONS = [
  {
    identifier: 'EMP-897b49',
    name: 'Empyreans',
    logoUrl: 'https://i.ibb.co/23fGVLKG/Emp-Token200x200.png'
  },
  {
    identifier: 'HODL-ffb01b',
    name: 'HODL NFTs',
    logoUrl: 'https://tools.multiversx.com/assets-cdn/tokens/HODL-ffb01b/icon.png'
  },
  {
    identifier: 'FHODL-a9ad67',
    name: 'Founder HODL',
    logoUrl: 'https://media.multiversx.com/nfts/asset/bafybeia2waiqdmtsbne3fy5xtf2fns44mhkexrckaupytmiqbagau2hc6i/1.mp4'
  }
];


export const HodlTokenClubHoldings = () => {
  const { address } = useGetAccount();
  const [tokens, setTokens] = useState<TokenData[]>([]);
  const [nftCollections, setNftCollections] = useState<NftCollectionData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatTokenBalance = (balance: string, decimals: number): string => {
    const balanceNumber = parseFloat(balance) / Math.pow(10, decimals);
    return balanceNumber.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  const formatUsdValue = (value: number): string => {
    return `$${value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })}`;
  };

  const fetchTokenData = async (identifier: string): Promise<TokenData | null> => {
    try {
      const response = await fetch(
        `https://api.multiversx.com/accounts/${address}/tokens/${identifier}`
      );
      if (!response.ok) {
        // Return a default token data structure for missing tokens
        return {
          identifier,
          name: identifier.split('-')[0],
          ticker: identifier.split('-')[0],
          balance: '0',
          decimals: 0,
          valueUsd: undefined,
          price: 0,
          assets: {}
        };
      }
      const data = await response.json();
      return {
        identifier: data.identifier,
        name: data.name,
        ticker: data.ticker,
        balance: data.balance || '0',
        decimals: data.decimals || 0,
        valueUsd: data.valueUsd,
        price: data.price,
        assets: data.assets
      };
    } catch (error) {
      console.error(`Error fetching token ${identifier}:`, error);
      // Return a default token data structure for errors
      return {
        identifier,
        name: identifier.split('-')[0],
        ticker: identifier.split('-')[0],
        balance: '0',
        decimals: 0,
        valueUsd: undefined,
        price: 0,
        assets: {}
      };
    }
  };

  const fetchNftCollectionData = async (identifier: string): Promise<NftCollectionData | null> => {
    try {
      const response = await fetch(
        `https://api.multiversx.com/accounts/${address}/collections/${identifier}`
      );
      if (!response.ok) {
        // Return a default NFT collection data structure for missing collections
        return {
          collection: identifier,
          name: identifier.split('-')[0],
          ticker: identifier,
          count: 0,
          assets: {}
        };
      }
      const data = await response.json();
      return {
        collection: data.collection,
        name: data.name,
        ticker: data.ticker,
        count: data.count || 0,
        assets: data.assets
      };
    } catch (error) {
      console.error(`Error fetching NFT collection ${identifier}:`, error);
      // Return a default NFT collection data structure for errors
      return {
        collection: identifier,
        name: identifier.split('-')[0],
        ticker: identifier,
        count: 0,
        assets: {}
      };
    }
  };

  useEffect(() => {
    const fetchHoldings = async () => {
      if (!address) return;
      
      setLoading(true);
      setError(null);

      try {
        // Fetch token data
        const tokenPromises = TOKEN_IDENTIFIERS.map(identifier => 
          fetchTokenData(identifier)
        );
        const tokenResults = await Promise.all(tokenPromises);
        const validTokens = tokenResults.filter((token): token is TokenData => token !== null);
        setTokens(validTokens);

        // Fetch NFT collection data
        const nftPromises = NFT_COLLECTIONS.map(collection => 
          fetchNftCollectionData(collection.identifier)
        );
        const nftResults = await Promise.all(nftPromises);
        const validNfts = nftResults.filter((nft): nft is NftCollectionData => nft !== null);
        setNftCollections(validNfts);

      } catch (error) {
        console.error('Error fetching holdings:', error);
        setError('Failed to load holdings data');
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, [address]);

  if (loading) {
    return (
      <div className={styles.assetsGrid}>
        <div className={styles.loadingText}>Loading holdings...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.assetsGrid}>
        <div className={styles.errorText}>{error}</div>
      </div>
    );
  }

  // Always show all 6 assets, even if wallet has 0
  const allAssets = [
    // Tokens - always show all 3
    ...TOKEN_IDENTIFIERS.map(identifier => {
      const token = tokens.find(t => t.identifier === identifier);
      return {
        type: 'token' as const,
        identifier,
        name: token?.name || identifier.split('-')[0],
        ticker: token?.ticker || identifier.split('-')[0],
        balance: token?.balance || '0',
        decimals: token?.decimals || 0,
        valueUsd: token?.valueUsd,
        logoUrl: token?.assets?.pngUrl || token?.assets?.svgUrl || `https://tools.multiversx.com/assets-cdn/tokens/${identifier}/icon.png`
      };
    }),
    // NFT Collections - always show all 3
    ...NFT_COLLECTIONS.map(collection => {
      const nftData = nftCollections.find(n => n.collection === collection.identifier);
      return {
        type: 'nft' as const,
        identifier: collection.identifier,
        name: nftData?.name || collection.name,
        ticker: nftData?.ticker || collection.identifier,
        count: nftData?.count || 0,
        logoUrl: collection.logoUrl
      };
    })
  ];

  return (
    <div className={styles.assetsGrid}>
      <div className={styles.assetsContainer}>
        {allAssets.map((asset) => (
        <div key={asset.identifier} className={styles.assetItem}>
          <div className={styles.assetInfo}>
            {asset.type === 'nft' && asset.logoUrl.endsWith('.mp4') ? (
              <video
                src={asset.logoUrl}
                className={styles.assetLogo}
                autoPlay
                loop
                muted
                playsInline
                onError={(e) => {
                  (e.target as HTMLVideoElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNmM2Y0ZjYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIgZmlsbD0iIzk5YTNhZiIvPgo8L3N2Zz4KPC9zdmc+';
                }}
              />
            ) : (
              <img
                src={asset.logoUrl}
                alt={asset.name}
                className={styles.assetLogo}
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNmM2Y0ZjYiLz4KPHN2ZyB4PSI4IiB5PSI4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSI+CjxwYXRoIGQ9Ik0xMiAyQzYuNDggMiAyIDYuNDggMiAxMnM0LjQ4IDEwIDEwIDEwIDEwLTQuNDggMTAtMTBTMTcuNTIgMiAxMiAyem0tMiAxNWwtNS01IDEuNDEtMS40MUwxMCAxNC4xN2w3LjU5LTcuNTlMMTkgOGwtOSA5eiIgZmlsbD0iIzk5YTNhZiIvPgo8L3N2Zz4KPC9zdmc+';
                }}
              />
            )}
            <div className={styles.assetDetails}>
              <div className={styles.assetName}>{asset.name}</div>
              <div className={styles.assetTicker}>{asset.ticker}</div>
            </div>
          </div>
          <div className={styles.assetValue}>
            {asset.type === 'token' ? (
              <>
                <div className={styles.balanceAmount}>
                  {formatTokenBalance(asset.balance, asset.decimals)}
                </div>
                    {asset.valueUsd && asset.valueUsd > 0 ? (
                      <div className={styles.balanceUsd}>
                        {formatUsdValue(asset.valueUsd)}
                      </div>
                    ) : null}
              </>
            ) : (
              <div className={styles.countNumber}>{asset.count}</div>
            )}
          </div>
        </div>
      ))}
      </div>
    </div>
  );
};
