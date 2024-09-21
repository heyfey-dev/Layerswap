'use client'

import React, { createContext, useState, useContext } from 'react';

const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isHelpChatModalOpen, setHelpChatModalOpen] = useState(false);
  const [focusedButton, setFocusedButton] = useState(null);

  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
    if (isWalletModalOpen) setFocusedButton(null);
  };

  const toggleHelpChatModal = () => {
    setHelpChatModalOpen(!isHelpChatModalOpen);
    if (isHelpChatModalOpen) setFocusedButton(null);
  };

  const onClose = () => {
    setModalOpen(false);
    setFocusedButton(null);
  };

  const handleButtonClick = (buttonName, action) => {
    if (focusedButton === buttonName) {
      setFocusedButton(null);
    } else {
      setFocusedButton(buttonName);
    }
    action();
  };

  return (
    <ButtonContext.Provider
      value={{
        isModalOpen,
        setModalOpen,
        isWalletModalOpen,
        isHelpChatModalOpen,
        focusedButton,
        toggleWalletModal,
        toggleHelpChatModal,
        onClose,
        handleButtonClick,
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export const useButtonContext = () => useContext(ButtonContext);