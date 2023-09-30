import React, { useState } from 'react';
import Link from 'next/link';

const CollaborationsTab = () => {
  const [activeTab, setActiveTab] = useState('budget');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center gap-4">
      <div className="flex space-x-9 mt-2">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'budget' ? 'bg-[#550693] text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('budget')}
        >
          <Link href="/budget">Budget</Link>
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === 'chat' ? 'bg-[#550693] text-white' : 'bg-gray-200 text-gray-700'
          }`}
          onClick={() => handleTabChange('chat')}
        >
          <Link href="/chat">Chat</Link>
        </button>
      </div>
    </div>
  );
};

export default CollaborationsTab;
