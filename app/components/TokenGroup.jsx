"use client";

import React from "react";
import Image from "next/image";
import { useTokenContext } from "../context/TokenContext";

export const TokenGroup = ({ tokens, label, isFromToken }) => {
  // Destructure necessary context values for token selection
  const {
    setSelectedFromToken,
    setSelectedToToken,
    setIsFromSearchOpen,
    setIsToSearchOpen,
  } = useTokenContext();

  // Handle token selection based on whether the token is from "From" or "To" section
  const handleTokenSelect = (token) => {
    if (isFromToken) {
      // Set the selected "From" token and close the token search popup
      setSelectedFromToken(token);
      setIsFromSearchOpen(false);
    } else {
      // Set the selected "To" token and close the token search popup
      setSelectedToToken(token);
      setIsToSearchOpen(false);
    }
  };

  return (
    <div className="py-2">
      <p className="px-3 py-1 text-sm text-white opacity-60">{label}</p>
      {/* Loop through the tokens and render each token with its image and name */}
      {tokens.map((token) => (
        <div
          key={token.address}
          className="flex items-center px-3 py-2 hover:bg-[#1c2d4a] cursor-pointer"
          onClick={() => handleTokenSelect(token)}
        >
          {/* If the token has an image URL, display the image, otherwise, show a placeholder */}
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
