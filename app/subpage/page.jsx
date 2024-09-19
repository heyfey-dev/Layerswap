"use client";

import React, { useState, useEffect, useRef } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaBars, FaChevronDown, FaWallet } from "react-icons/fa6";
import { IoSwapVertical } from "react-icons/io5";
import Image from "next/image";
import layerswapLogo from "../public/layerswap_logo.png";
import { Footer } from "../components/Footer";
import { exchangeTokens, networkTokens, topTokens } from "../constants/tokens";
import { TokenSearchPopup } from "../components/TokenSearchPopup";
import NavbarModal from "../components/NavbarModal";
import { TokenProvider, useTokenContext } from "../context/TokenContext";
import { fetchTokenInfo } from "../api/tokens";
import WalletModalCard from "../components/WalletModal";
import HelpChatModel from "../components/HelpChatModal";
import TokenAddressPopup from "../components/TokenAddressPopup";

const LayerswapAppContent = () => {
  const {
    selectedFromToken,
    selectedToToken,
    setIsFromSearchOpen,
    setIsToSearchOpen,
  } = useTokenContext();

  const [isModalOpen, setModalOpen] = useState(false);
  const [fromTokenInfo, setFromTokenInfo] = useState(null);
  const [toTokenInfo, setToTokenInfo] = useState(null);
  const formRef = useRef(null);

  const [isWalletModalOpen, setIsWalletModalOpen] = useState(false);
  const [isHelpChatModalOpen, setHelpChatModalOpen] = useState(false);
  const [focusedButton, setFocusedButton] = useState(null);
  const [isTokenAddressPopupOpen, setIsTokenAddressPopupOpen] = useState(false);

  const toggleWalletModal = () => {
    setIsWalletModalOpen(!isWalletModalOpen);
    if (isWalletModalOpen) setFocusedButton(null);
  };

  const toggleHelpChatModal = () => {
    setHelpChatModalOpen(!isHelpChatModalOpen);
    if (isHelpChatModalOpen) setFocusedButton(null);
  };

  const toggleTokenAddressPopup = () => {
    setIsTokenAddressPopupOpen((prev) => !prev);
  };

  // Function to close the modal
  const onClose = () => {
    setModalOpen(false);
    setFocusedButton(null);
  };

  const toggleFromSearch = () => setIsFromSearchOpen(true);
  const toggleToSearch = () => setIsToSearchOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    // Fetch token information based on selected tokens
    const fetchToken = async (token, setter) => {
      if (token) {
        try {
          const response = await fetchTokenInfo(token.address);
          if (response.status === 200) {
            setter(response.data);
          }
        } catch (error) {
          console.error(`Error fetching token info for ${token.token}:`, error);
        }
      }
    };

    // Fetch data for selected "From" token
    fetchToken(selectedFromToken, setFromTokenInfo);
    // Fetch data for selected "o" token
    fetchToken(selectedToToken, setToTokenInfo);
  }, [selectedFromToken, selectedToToken]);

  const fetchMinMax = async () => {
    console.log(fromTokenInfo);
    console.log(toTokenInfo);
    console.log(formRef);
    // setLoading(true);
    try {
      const response = await axios.get(`${API_URL}`, {
        params: {
          sellToken: fromTokenInfo,
          buyToken: toTokenInfo,
          sellAmount: 1000000000000000000, // 1 token, for testing purposes
        },
      });

      const minAmount = response.data.minBuyAmount;
      const maxAmount = response.data.buyAmount;
      // setMinAmount(minAmount);
      // setMaxAmount(maxAmount);
    } catch (error) {
      console.error("Error fetching min and max amounts:", error);
    } finally {
      // setLoading(false);
    }
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
    <main className="font-sans bg-[#0c1526] md:bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] min-h-screen w-full py-5">
      {/* Header */}
      <div className="flex justify-center items-center">
        <div className="flex items-center">
          <Image
            src={layerswapLogo}
            alt="layer"
            height={80}
            width={80}
            className="h-[50px] w-[50px] md:h-16 md:w-16"
          />
          <h2 className="text-[#e5e7eb] font-semibold tracking-wide text-lg md:text-2xl">
            Layerswap
          </h2>
        </div>
        <div className="md:hidden relative left-[70px] flex space-x-5 text-[19px] text-white opacity-80">
          <button
            type="button"
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
            type="button"
            onClick={() => handleButtonClick("menu", () => setModalOpen(true))}
            className={`hover:bg-[#1c2d4a] outline-none p-2 rounded-md transition-colors duration-200 ${
              focusedButton === "menu"
                ? "bg-[#1c2d4a] ring-2 ring-[#e32474]"
                : ""
            }`}
          >
            <FaBars />
          </button>{" "}
        </div>
      </div>
      <div className="container mx-auto md:w-[35%] relative">
        <form
          onClick={handleSubmit}
          ref={formRef}
          className="md:bg-[#0c1526] w-full p-6 rounded-md mt-5"
        >
          {/* Desktop navigation */}
          <section className="hidden md:flex space-x-5 pb-4 text-[21px] justify-end text-white text-opacity-80">
            <button
              type="button"
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
              type="button"
              onClick={() => handleButtonClick("helpChat", toggleHelpChatModal)}
              className={`hover:bg-[#1c2d4a] outline-none p-2 rounded-md transition-colors duration-200 ${
                focusedButton === "helpChat"
                  ? "bg-[#1c2d4a] ring-2 ring-[#e32474]"
                  : ""
              }`}
            >
              <BiCommentDetail />
            </button>
            <button
              type="button"
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
          </section>

          <section>
            <div className="flex flex-col space-y-1 relative">
              {/* From section */}
              <div className="bg-[#111c36] rounded-md py-4 px-5 md:px-3 space-y-1">
                <p className="text-xs md:text-sm text-white opacity-60">From</p>
                <div className="flex space-x-2">
                  <div className="relative w-[75%] md:w-[70%]">
                    <div
                      className="w-full bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white text-opacity-50 rounded-md flex items-center justify-between"
                      onClick={toggleFromSearch}
                    >
                      <span className="text-sm md:text-base">
                        {selectedFromToken
                          ? selectedFromToken.token
                          : "Select Token"}
                      </span>
                      <FaChevronDown className="text-[15px]" />
                    </div>
                  </div>
                  <p className="flex items-center w-[30%] bg-[#14213d] border-white border border-opacity-5 py-3 px-2 rounded-md text-white text-sm md:text-base opacity-60">
                    {fromTokenInfo ? fromTokenInfo.symbol : "Asset"}
                  </p>
                </div>
              </div>

              {/* Swap icon */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 border-white border border-opacity-20 rounded-full ">
                <div className="bg-[#0c1526] rounded-full p-1">
                  <div className="border border-white border-opacity-[0px] rounded-full p-1">
                    <IoSwapVertical className="text-white opacity-60 h-[15px] w-[15px] cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* To section */}
              <div className="bg-[#111c36] rounded-md py-4 px-5 md:px-3 space-y-1">
                <p className="text-xs md:text-sm text-white opacity-60">To</p>
                <div className="flex space-x-2">
                  <div className="relative w-[75%] md:w-[70%]">
                    <div
                      className="w-full bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white text-opacity-50 rounded-md flex items-center justify-between"
                      onClick={toggleToSearch}
                    >
                      <span className="text-sm md:text-base">
                        {selectedToToken
                          ? selectedToToken.token
                          : "Select Token"}
                      </span>
                      <FaChevronDown className="text-[15px]" />
                    </div>
                  </div>
                  <p className="flex items-center w-[30%] bg-[#14213d] border-white border border-opacity-5 py-3 px-2 rounded-md text-white text-sm md:text-base opacity-60">
                    {toTokenInfo ? toTokenInfo.symbol : "Asset"}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Amount and Send To sections */}
          <section className="mt-5 space-y-3">
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="amount"
                className="text-[13px] md:text-sm text-white opacity-60"
              >
                Amount
              </label>
              <input
                type="text"
                placeholder="0.0"
                className="bg-[#111c36] rounded-md w-full p-3 placeholder:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#e32474]"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="sendTo"
                className="text-[13px] md:text-sm text-white opacity-60"
              >
                Send To
              </label>
              <button
                type="button"
                onClick={toggleTokenAddressPopup}
                className="bg-[#111c36] text-white text-opacity-70 text-start text-[15px] rounded-md w-full px-2 py-3 placeholder:text-sm"
              >
                Address
              </button>
            </div>
            <div className="flex justify-between items-center bg-[#111c36] rounded-md w-full p-3">
              <input
                type="text"
                placeholder="You will receive"
                className="text-sm md:text-base border-none outline-none bg-transparent placeholder:text-white"
                disabled
              />
              <p className="text-white text-2xl">-</p>
            </div>
          </section>

          {/* wallet modal card rendering */}
          {isWalletModalOpen && <WalletModalCard onClose={toggleWalletModal} />}

          {/* Render TokenAddressPopup */}
          <TokenAddressPopup
            isOpen={isTokenAddressPopupOpen}
            onClose={toggleTokenAddressPopup}
          />

          {/* Button to open the modal */}
          <NavbarModal isOpen={isModalOpen} onClose={onClose} />

          {/* Button to select source token */}
          <button
            type="button"
            className="bg-[#6e0040] w-full mt-20 md:mt-6 p-[14px] text-white text-sm md:text-base text-opacity-50 font-semibold text-center rounded-md"
            onClick={() => {
              fetchMinMax();
            }}
          >
            Select source
          </button>
        </form>

        {/* Render HelpChatModal outside the form */}
        {isHelpChatModalOpen && <HelpChatModel onClose={toggleHelpChatModal} />}

        {/* Popups for token search */}
        <TokenSearchPopup
          isFromToken={true}
          topTokens={topTokens}
          networkTokens={networkTokens}
          exchangeTokens={exchangeTokens}
        />

        <TokenSearchPopup
          isFromToken={false}
          topTokens={topTokens}
          networkTokens={networkTokens}
          exchangeTokens={exchangeTokens}
        />
      </div>

      <Footer />
    </main>
  );
};

export default function LayerswapAppPage() {
  return (
    <TokenProvider>
      <LayerswapAppContent />
    </TokenProvider>
  );
}
