'use client'

import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowLeft, FaBars, FaWallet } from "react-icons/fa6";
import { Footer } from "../../components/Footer";
import SubpageHeader from "../../components/SubpageHeader";
import Link from "next/link";
import { ButtonProvider, useButtonContext } from "../../context/ButtonContext";
import NavbarModal from "../../components/NavbarModal";
import WalletModalCard from "../../components/WalletModal";
import HelpChatModal from "../../components/HelpChatModal";

const CampaignsPageContent = () => {
  const {
    isModalOpen,
    setModalOpen,
    isWalletModalOpen,
    isHelpChatModalOpen,
    focusedButton,
    toggleWalletModal,
    toggleHelpChatModal,
    onClose,
    handleButtonClick,
  } = useButtonContext();

  return (
    <section className="font-sans bg-[#0c1526] md:bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] min-h-screen w-full py-5">
      <SubpageHeader />

      <div className="container mx-auto md:w-[35%] relative">
        <div className="md:bg-[#0c1526] w-full p-6 rounded-md mt-5 h-[600px]">
          <div className="flex items-center justify-between mb-1">
            <Link href="/subpage">
              <FaArrowLeft className="text-lg text-white text-opacity-80" />
            </Link>
            <div className="space-x-5 text-[21px] text-white text-opacity-80">
              <button
                onClick={() => handleButtonClick("wallet", toggleWalletModal)}
                className={`hover:bg-[#1c2d4a] outline-none p-2 rounded-md transition-colors duration-200 ${
                  focusedButton === "wallet"
                    ? "bg-[#1c2d4a] ring-2 ring-[#e32474]"
                    : ""
                }`}
              >
                <FaWallet />
              </button>
              <button
                onClick={() =>
                  handleButtonClick("helpChat", toggleHelpChatModal)
                }
                className={`hover:bg-[#1c2d4a] outline-none p-2 rounded-md transition-colors duration-200 ${
                  focusedButton === "helpChat"
                    ? "bg-[#1c2d4a] ring-2 ring-[#e32474]"
                    : ""
                }`}
              >
                <BiCommentDetail />
              </button>
              <button
                onClick={() =>
                  handleButtonClick("menu", () => setModalOpen(true))
                }
                className={`hover:bg-[#1c2d4a] outline-none p-2 rounded-md transition-colors duration-200 ${
                  focusedButton === "menu"
                    ? "bg-[#1c2d4a] ring-2 ring-[#e32474]"
                    : ""
                }`}
              >
                <FaBars />
              </button>
            </div>
          </div>

          <h2 className="text-sm md:text-base font-bold mb-4 text-white">Campaigns</h2>

          <div className="bg-[#111c36] rounded-md p-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-6 h-6 bg-purple-600 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs text-white">S</span>
                </div>
                <span className="text-white">STRK Rewards Round 1</span>
              </div>
              <span className="text-gray-400 text-sm">10 days left</span>
            </div>
          </div>

          <h3 className="text-sm md:text-base font-bold mb-4 text-white">Old campaigns</h3>

          <div className="bg-[#111c36] rounded-md p-3 space-y-4">
            {[
              "OP Rewards Round 1",
              "OP Rewards Round 2",
              "IMX Rewards Round 1",
            ].map((campaign, index) => (
              <div key={index} className="flex items-center">
                <div className="w-6 h-6 bg-red-500 rounded-full mr-3 flex items-center justify-center">
                  <span className="text-xs text-white">O</span>
                </div>
                <span className="text-white">{campaign}</span>
              </div>
            ))}
          </div>
        </div>

        {isWalletModalOpen && <WalletModalCard onClose={toggleWalletModal} />}
        {isHelpChatModalOpen && <HelpChatModal onClose={toggleHelpChatModal} />}
        <NavbarModal isOpen={isModalOpen} onClose={onClose} />
      </div>

      <Footer />
    </section>
  );
};

const CampaignsSubPage = () => (
  <ButtonProvider>
    <CampaignsPageContent />
  </ButtonProvider>
);

export default CampaignsSubPage;