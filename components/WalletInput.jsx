import React, { useState } from "react";
import RecentTransactions from "./RecentTransactions";

const CryptoWallet = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  const handleInputChange = (e) => {
    setWalletAddress(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (walletAddress.trim() !== "") {
      setAddresses([
        ...addresses,
        { id: idCounter, address: walletAddress }
      ]);
      setWalletAddress("");
      setIdCounter(idCounter + 1);
    }
  };

  const handleRemove = (id) => {
    const updatedAddresses = addresses.filter((address) => address.id !== id);
    setAddresses(updatedAddresses);
  };

  return (
    <div className="p-0 bg-[#2b2b2b] h-[88vh] overflow-y-scroll myscrollbar col-span-5">
      <h2 className="text-white text-2xl font-semibold">Crypto Wallet</h2>
      <div className="mt-4">
        <input
          type="text"
          className="border rounded-md px-2 py-1 outline-none"
          placeholder="Enter Crypto Wallet"
          value={walletAddress}
          onChange={handleInputChange}
          required
        />
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-[#268bdd] text-white px-4 py-2 rounded-md mb-12"
      >
        Link
      </button>
      <RecentTransactions walletAddress={walletAddress} /> {/* Pass walletAddress as a prop */}
      {addresses.length > 0 && (
        <div className="mt-4 text-white">
          {addresses.map(({ id, address }) => (
            <div key={id} className="mb-2">
              <p>You have added the address: {address}</p>
              <button
                onClick={() => handleRemove(id)}
                className="text-red-500 mt-1"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default CryptoWallet;
