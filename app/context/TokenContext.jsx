"use client";

import React, { createContext, useState, useContext } from "react";

// created a context for managing token selection and search states
const TokenContext = createContext();

export const useTokenContext = () => useContext(TokenContext);

export const TokenProvider = ({ children }) => {
  // State for selected "from" and "to" tokens
  const [selectedFromToken, setSelectedFromToken] = useState(null);
  const [selectedToToken, setSelectedToToken] = useState(null);

  // state to manage whether the popups are open or closed
  const [isFromSearchOpen, setIsFromSearchOpen] = useState(false);
  const [isToSearchOpen, setIsToSearchOpen] = useState(false);

  // state for search input terms
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
