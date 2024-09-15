"use client";

import React from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { useTokenContext } from "../context/TokenContext";
import { TokenGroup } from "./TokenGroup";

export const TokenSearchPopup = ({
  isFromToken,
  topTokens,
  networkTokens,
  exchangeTokens,
}) => {
  const {
    isFromSearchOpen,
    isToSearchOpen,
    setIsFromSearchOpen,
    setIsToSearchOpen,
    fromSearchTerm,
    toSearchTerm,
    setFromSearchTerm,
    setToSearchTerm,
  } = useTokenContext();

  const isSearchOpen = isFromToken ? isFromSearchOpen : isToSearchOpen;
  const searchTerm = isFromToken ? fromSearchTerm : toSearchTerm;
  const setSearchTerm = isFromToken ? setFromSearchTerm : setToSearchTerm;
  const toggleSearch = isFromToken
    ? () => setIsFromSearchOpen(!isFromSearchOpen)
    : () => setIsToSearchOpen(!isToSearchOpen);

  const filteredTokens = [
    ...topTokens,
    ...networkTokens,
    ...exchangeTokens,
  ].filter((token) =>
    token.token.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    isSearchOpen && (
      <div
        className={`absolute inset-0 bg-[#14213d] border-t border-white border-opacity-5 rounded-md shadow-lg overflow-hidden transition-all duration-500 ease-out ${
          isSearchOpen ? "popup-enter" : "popup-exit"
        }`}
      >
        <div className="h-full flex flex-col p-4">
          <div className="flex justify-end">
            <button
              onClick={toggleSearch}
              className="text-white opacity-60 hover:opacity-100 text-lg md:text-2xl"
            >
              <LiaTimesSolid />
            </button>
          </div>
          <input
            type="text"
            placeholder={isFromToken ? "Swap from" : "Swap to"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-b border-white border-opacity-20 p-3 text-white placeholder-white placeholder-opacity-60 focus:outline-none mb-4"
          />
          <div className="flex-grow overflow-y-auto">
            {searchTerm ? (
              <TokenGroup
                tokens={filteredTokens}
                label="Search Results"
                isFromToken={isFromToken}
              />
            ) : (
              <>
                <TokenGroup
                  tokens={topTokens}
                  label="Popular"
                  isFromToken={isFromToken}
                />
                <TokenGroup
                  tokens={networkTokens}
                  label="Networks"
                  isFromToken={isFromToken}
                />
                <TokenGroup
                  tokens={exchangeTokens}
                  label="Exchanges"
                  isFromToken={isFromToken}
                />
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};
