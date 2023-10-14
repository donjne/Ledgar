import React, { useEffect, useState } from "react";
import axiosPrivate from "./axios";

const RecentTransactions = ({ walletAddress }) => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axiosPrivate.get(
          `/getAccountTransactions?address=${walletAddress}`
        );

        if (response && response.data) {
          setTransactions(response.data.data); // Access the 'data' array
        }
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };

    if (walletAddress) {
      fetchTransactions();
    }
  }, [walletAddress]);

  return (
    <div>
      <h2 className="text-white text-2xl font-semibold">Recent Transactions</h2>
      <ul className="border rounded border-gray-300 p-4 my-4 mr-4">
      {transactions.map((transaction, index) => (
  <li key={index} className="flex flex-col justify-between py-2 text-white">
    <span className='font-bold font-grotesk'>Description: {transaction.description}</span>
    <span>Type: {transaction.type}</span>
    
    {/* Display sender and receiver */}
    <div>
      <span>Address: {transaction.accountData[0].account}</span> <br />
      <span>Fee Payer: {transaction.feePayer}</span>

      {/* Check if there are native transfers */}
      {transaction.nativeTransfers.length > 0 && (
        <div>
          <span className='font-bold flex justify-center font-grotesk'>Native Transfers</span>
          {transaction.nativeTransfers.map((transfer, i) => (
            <div key={i}>
              <span>Sender: {transfer.fromUserAccount}</span> <br />
              <span>Receiver: {transfer.toUserAccount}</span> <br />
              <span className="text-green-600">
                Amount: {(+transfer.amount / 1e9).toLocaleString(undefined, {
                  minimumFractionDigits: 9,
                  maximumFractionDigits: 9,
                })} SOL
              </span>
            </div>
          ))}
        </div>
      )}
    </div>            
    {transaction.tokenTransfers.map((tokenTransfer, index) => (
            <div key={index}>
            <span>Receiver: {tokenTransfer.destination}</span>
            <span>Amount: {tokenTransfer.amount}</span>
            </div>
      ))}
  </li>
))}

      </ul>
    </div>
  );
};

export default RecentTransactions;
