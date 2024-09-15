"use client";

import React, { createContext, useState, useContext } from "react";

const TokenContext = createContext();

export const useTokenContext = () => useContext(TokenContext);

export const TokenProvider = ({ children }) => {
  const [selectedFromToken, setSelectedFromToken] = useState(null);
  const [selectedToToken, setSelectedToToken] = useState(null);
  const [isFromSearchOpen, setIsFromSearchOpen] = useState(false);
  const [isToSearchOpen, setIsToSearchOpen] = useState(false);
  const [fromSearchTerm, setFromSearchTerm] = useState("");
  const [toSearchTerm, setToSearchTerm] = useState("");

  const value = {
    selectedFromToken,
    setSelectedFromToken,
    selectedToToken,
    setSelectedToToken,
    isFromSearchOpen,
    setIsFromSearchOpen,
    isToSearchOpen,
    setIsToSearchOpen,
    fromSearchTerm,
    setFromSearchTerm,
    toSearchTerm,
    setToSearchTerm,
  };

  return (
    <TokenContext.Provider value={value}>{children}</TokenContext.Provider>
  );
};
