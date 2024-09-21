"use client";

import React from "react";
import SubpageHeader from "../../components/SubpageHeader";
import Link from "next/link";
import { FaArrowLeft, FaBars, FaChevronDown, FaWallet } from "react-icons/fa6";
import { BiCommentDetail } from "react-icons/bi";
import { Footer } from "../../components/Footer";
import { FaRegFileAlt } from "react-icons/fa";
import { useButtonContext, ButtonProvider } from "../../context/ButtonContext";
import NavbarModal from "../../components/NavbarModal";
import WalletModalCard from "../../components/WalletModal";
import HelpChatModal from "../../components/HelpChatModal";

const TransfersPageContent = () => {
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

      <div className="container mx-auto md:w-[35%] relative space-y-5">
        <div className="md:bg-[#0c1526] w-full p-6 rounded-md mt-5 h-[600px] flex flex-col">
          <div className="flex items-center justify-between mb-1">
            <Link href="/subpage" passHref>
              <a>
                <FaArrowLeft className="text-lg text-white text-opacity-80" />
              </a>
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
          <p>It&apos;s empty here</p>
          <div className="flex flex-col items-center justify-center space-y-3 flex-grow">
            <FaRegFileAlt className="text-9xl text-white text-opacity-5" />
            <p className="text-white font-semibold text-lg">It's empty here</p>
            <div>
              <p className="text-white text-center font-semibold">
                You can find all your transactions by searching
              </p>
              <p className="text-white text-center font-semibold">
                with address in
              </p>
              <p className="text-white text-center font-semibold">
                <Link href="/subpage" passHref>
                  <a className="underline underline-offset-1">Layerswap Explorer</a>
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="md:bg-[#0c1526] w-full p-3 rounded-md h-auto border-t-4 border-t-blue-400 border-opacity-30">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">
              Sign in with email
            </h2>
            <button className="bg-blue-400 bg-opacity-10 p-2 rounded-md">
              <FaChevronDown className="text-white" />
            </button>
          </div>
          <p className="text-white text-base font-medium">
            Securely store your exchange accounts, access your full transfer
            history and more
          </p>
        </div>
      </div>

      {isWalletModalOpen && <WalletModalCard onClose={toggleWalletModal} />}
      {isHelpChatModalOpen && <HelpChatModal onClose={toggleHelpChatModal} />}
      <NavbarModal isOpen={isModalOpen} onClose={onClose} />

      <Footer />
    </section>
  );
};

const TransfersPage = () => (
  <ButtonProvider>
    <TransfersPageContent />
  </ButtonProvider>
);

export default TransfersPage;
