import { useEffect, useState } from 'react';

import {
  MvxTransactionsTable,
  ServerTransactionType,
  TransactionsRowType,
  TransactionsTableController,
  useGetAccount,
  useGetNetworkConfig
} from 'lib';

interface TransactionsTablePropsType {
  transactions?: ServerTransactionType[];
}

// Helper function to shorten addresses and hashes
const shortenValue = (value: string): string => {
  if (!value || value.length <= 15) return value;
  return `${value.slice(0, 5)}.....${value.slice(-5)}`;
};

export const TransactionsTable = ({
  transactions = []
}: TransactionsTablePropsType) => {
  const { address } = useGetAccount();
  const { network } = useGetNetworkConfig();
  const [processedTransaction, setProcessedTransactions] = useState<
    TransactionsRowType[]
  >([]);

  useEffect(() => {
    processTransactions();
  }, []);

  const processTransactions = async () => {
    const transactionsData =
      await TransactionsTableController.processTransactions({
        address,
        egldLabel: network.egldLabel,
        explorerAddress: network.explorerAddress,
        transactions
      });

    // Shorten the transaction data
    const shortenedTransactions = transactionsData.map((row: any) => {
      const shortened: any = { ...row };
      
      // Shorten transaction hash
      if (shortened.txHash) {
        shortened.txHash = shortenValue(shortened.txHash);
      }
      
      // Shorten receiver address
      if (shortened.receiver?.address) {
        shortened.receiver = { 
          ...shortened.receiver, 
          address: shortenValue(shortened.receiver.address)
        };
      }
      
      // Shorten sender address
      if (shortened.sender?.address) {
        shortened.sender = { 
          ...shortened.sender, 
          address: shortenValue(shortened.sender.address)
        };
      }
      
      return shortened;
    });

    setProcessedTransactions(shortenedTransactions);
  };

  return <MvxTransactionsTable transactions={processedTransaction} />;
};
