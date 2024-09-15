'use client'

import React from 'react';
import Image from "next/image";
import { useTokenContext } from '../context/TokenContext';

export const TokenGroup = ({ tokens, label, isFromToken }) => {
  const { 
    setSelectedFromToken, 
    setSelectedToToken, 
    setIsFromSearchOpen, 
    setIsToSearchOpen 
  } = useTokenContext();

  const handleTokenSelect = (token) => {
    if (isFromToken) {
      setSelectedFromToken(token);
      setIsFromSearchOpen(false);
    } else {
      setSelectedToToken(token);
      setIsToSearchOpen(false);
    }
  };

  return (
    <div className="py-2">
      <p className="px-3 py-1 text-sm text-white opacity-60">{label}</p>
      {tokens.map((token) => (
        <div
          key={token.address}
          className="flex items-center px-3 py-2 hover:bg-[#1c2d4a] cursor-pointer"
          onClick={() => handleTokenSelect(token)}
        >
          {token.imageUrl ? (
            <Image
              src={token.imageUrl}
              alt={token.token}
              width={24}
              height={24}
              className="mr-2 rounded-full"
              unoptimized
            />
          ) : (
            <div className="w-6 h-6 mr-2 rounded-full bg-gray-300"></div>
          )}
          <span className="text-white">{token.token}</span>
        </div>
      ))}
    </div>
  );
};