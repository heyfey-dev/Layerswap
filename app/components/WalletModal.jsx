import React from 'react';

const WalletModalCard = () => {
  const networks = [
    { name: 'EVM', icons: ['🌈', '∞', '🐻'] },
    { name: 'Starknet', icons: ['🐙', '🅰️', '🅰️'] },
    { name: 'TON', icons: ['💎', '🌙', '✅'] },
    { name: 'Solana', icons: ['🟣', '🔵', '⚪'] },
  ];

  return (
    <div className="bg-[#0f192e] absolute right-5 top-[10%] p-5 rounded-lg w-44 animate-slideDown">
      {networks.map((network, index) => (
        <button 
          key={network.name} 
          className="relative flex items-center space-x-5 mb-5 last:mb-0 w-full rounded-md p-1 transition-colors duration-200 group"
        >
          <div className="absolute inset-0 rounded-md group-hover:bg-[#1c2d4a] transition-colors duration-200 -m-1"></div>
          <div className="flex items-center justify-center relative w-10 h-6 z-10">
            {network.icons.map((icon, iconIndex) => (
              <div 
                key={iconIndex} 
                className="w-6 h-6 flex items-center justify-center bg-gray-800 rounded-full text-base absolute"
                style={{ right: `${iconIndex * 15}px`, zIndex: network.icons.length - iconIndex }}
              >
                {icon}
              </div>
            ))}
          </div>
          <span className="text-[#7a839e] text-sm z-10">{network.name}</span>
        </button>
      ))}
    </div>
  );
};

export default WalletModalCard;