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
  // Destructure necessary values from the TokenContext for managing search states and input values
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

  // Determine whether the search is for the "from" or "to" tokens and set the relevant states/terms accordingly
  const isSearchOpen = isFromToken ? isFromSearchOpen : isToSearchOpen;
  const searchTerm = isFromToken ? fromSearchTerm : toSearchTerm;
  const setSearchTerm = isFromToken ? setFromSearchTerm : setToSearchTerm;

  // Toggle the search popup open/close based on whether it's for the "from" or "to" token
  const toggleSearch = isFromToken
    ? () => setIsFromSearchOpen(!isFromSearchOpen)
    : () => setIsToSearchOpen(!isToSearchOpen);

  // Filter tokens based on search term entered
  const filteredTokens = [
    ...topTokens,
    ...networkTokens,
    ...exchangeTokens,
  ].filter((token) =>
    token.token.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    //  Only render the search popup if it is open
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
          {/* Input field for search tokens */}
          <input
            type="text"
            placeholder={isFromToken ? "Swap from" : "Swap to"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-b border-white border-opacity-20 p-3 text-white placeholder-white placeholder-opacity-60 focus:outline-none mb-4"
          />
          <div className="flex-grow overflow-y-auto">
            {/* If there's a search term, show filtered results: otherwise, show categorized token lists */}
            {searchTerm ? (
              <TokenGroup
                tokens={filteredTokens}
                label="Search Results"
                isFromToken={isFromToken}
              />
            ) : (
              <>
                {/* Display groups of tokens: Popular, Networks, Exchanges */}
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
}