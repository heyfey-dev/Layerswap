"use client";

import React, { useState, useEffect, useRef } from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaBars, FaWallet, FaChevronDown } from "react-icons/fa6";
import { IoSwapVertical } from "react-icons/io5";
import { Footer } from "../components/Footer";
import { exchangeTokens, networkTokens, topTokens } from "../constants/tokens";
import { TokenSearchPopup } from "../components/TokenSearchPopup";
import NavbarModal from "../components/NavbarModal";
import { TokenProvider, useTokenContext } from "../context/TokenContext";
import { fetchTokenInfo } from "../api/tokens";
import WalletModalCard from "../components/WalletModal";
import HelpChatModel from "../components/HelpChatModal";
import TokenAddressPopup from "../components/TokenAddressPopup";
import axios from "axios";
import { timeStringToSeconds } from "../utils";
import SubpageHeader from "../components/SubpageHeader";
import { ButtonProvider, useButtonContext } from "../context/ButtonContext";
import TokenAssetsDropdown from "../components/TokenAssetsDropdown";
import TransferViaWalletPopup from "../components/TransferViaWalletPopup";

const LayerswapAppContent = () => {
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

  const {
    selectedFromToken,
    selectedToToken,
    setIsFromSearchOpen,
    setIsToSearchOpen,
  } = useTokenContext();

  const [fromTokenInfo, setFromTokenInfo] = useState(null);
  const [toTokenInfo, setToTokenInfo] = useState(null);
  const formRef = useRef(null);

  const [minLimit, setMinLimit] = useState(null);
  const [maxLimit, setMaxLimit] = useState(null);
  const [amount, setAmount] = useState(null);
  const [quote, setQuote] = useState(null);

  const [isTokenAddressPopupOpen, setIsTokenAddressPopupOpen] = useState(false);

  const [showFromAssetDropdown, setShowFromAssetDropdown] = useState(false);
  const [showToAssetDropdown, setShowToAssetDropdown] = useState(false);

  const toggleFromAssetDropdown = () =>
    setShowFromAssetDropdown(!showFromAssetDropdown);
  const toggleToAssetDropdown = () =>
    setShowToAssetDropdown(!showToAssetDropdown);

  const toggleFromSearch = () => setIsFromSearchOpen(true);
  const toggleToSearch = () => setIsToSearchOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    const fetchLimits = async () => {
      if (!selectedFromToken || !selectedToToken) {
        setMinLimit(null);
        setMaxLimit(null);
        return;
      }

      try {
        const response = await axios.get(
          `https://api.layerswap.io/api/v2/limits?source_network=${selectedFromToken.network}&source_token=ETH&destination_network=${selectedToToken.network}&destination_token=ETH`,
          {
            headers: {
              "X-LS-APIKEY":
                "NDBxG+aon6WlbgIA2LfwmcbLU52qUL9qTnztTuTRPNSohf/VnxXpRaJlA5uLSQVqP8YGIiy/0mz+mMeZhLY4/Q",
              Accept: "application/json",
            },
          }
        );
        if (response.status === 200) {
          setMinLimit(response.data.data.min_amount);
          setMaxLimit(response.data.data.max_amount);
        }
      } catch (error) {
        console.error("Error fetching limits", error);
      }
    };

    fetchLimits();
  }, [selectedFromToken, selectedToToken]);

  const fetchTransferDetails = async () => {
    if (
      !amount ||
      amount < minLimit ||
      amount > maxLimit ||
      !minLimit ||
      !maxLimit
    ) {
      console.log("Fill required fields or check the amount limit");
      return;
    }

    try {
      const response = await axios.get(
        `https://api.layerswap.io/api/v2/quote?source_network=${selectedFromToken.network}&source_token=ETH&destination_network=${selectedToToken.network}&destination_token=ETH&amount=${amount}`,
        {
          headers: {
            "X-LS-APIKEY":
              "NDBxG+aon6WlbgIA2LfwmcbLU52qUL9qTnztTuTRPNSohf/VnxXpRaJlA5uLSQVqP8YGIiy/0mz+mMeZhLY4/Q",
            Accept: "application/json",
          },
        }
      );

      if (response.status === 200) {
        const quoteData = response.data.data.quote;
        setQuote({
          totalFee: quoteData.total_fee,
          totalFeeUSD: quoteData.total_fee_in_usd,
          receiveAmount: quoteData.receive_amount,
          avgCompletionTime: Math.floor(
            timeStringToSeconds(quoteData.avg_completion_time)
          ),
        });
        console.log(quote);
      }
    } catch (error) {
      console.error("Error fetching quotes", error);
    }
  };

  const toggleTokenAddressPopup = () => {
    setIsTokenAddressPopupOpen((prev) => !prev);
  };

  return (
    <main className="font-sans bg-[#162b52] md:bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] min-h-screen w-full py-5">
      <div className="flex justify-center items-center">
        <SubpageHeader />

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
          className="md:bg-[#0c1526] w-full p-6 rounded-md mt-5 h-[650px]"
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
                  <div
                    className="relative w-[30%] cursor-pointer"
                    onClick={toggleFromAssetDropdown}
                  >
                    <p className="flex items-center w-full bg-[#14213d] border-white border border-opacity-5 py-3 px-2 rounded-md text-white text-sm md:text-base opacity-60">
                      {fromTokenInfo ? fromTokenInfo.symbol : "Asset"}
                      <FaChevronDown className="ml-auto text-[15px]" />
                    </p>
                    {showFromAssetDropdown && (
                      <div>
                        <TokenAssetsDropdown
                          onSelect={() => setShowFromAssetDropdown(false)}
                        />
                      </div>
                    )}
                  </div>
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
                  <div
                    className="relative w-[30%] cursor-pointer"
                    onClick={toggleToAssetDropdown}
                  >
                    <p className="flex items-center w-full bg-[#14213d] border-white border border-opacity-5 py-3 px-2 rounded-md text-white text-sm md:text-base opacity-60">
                      {toTokenInfo ? toTokenInfo.symbol : "Asset"}
                      <FaChevronDown className="ml-auto text-[15px]" />
                    </p>
                    {showToAssetDropdown && (
                      <div>
                        <TokenAssetsDropdown
                          onSelect={() => setShowToAssetDropdown(false)}
                        />
                      </div>
                    )}
                  </div>
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
                type="number"
                placeholder={minLimit ? `${minLimit} - ${maxLimit}` : ""}
                className="bg-[#111c36] rounded-md w-full p-3 placeholder:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#e32474]"
                value={amount || ""}
                onChange={(e) => setAmount(Number(e.target.value))}
                onBlur={fetchTransferDetails}
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
        <TransferViaWalletPopup />
          
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

      <div style={{ color: "white" }}>
        {quote
          ? `Estimated time: ${quote.avgCompletionTime}
          Fee: ${quote.totalFee} (${quote.totalFeeUSD.toFixed(
              2
            )}) You will receive: ${quote.receiveAmount}`
          : ""}
      </div>

      <Footer />
    </main>
  );
};

export default function LayerswapAppPage() {
  return (
    <TokenProvider>
      <ButtonProvider>
        <LayerswapAppContent />
      </ButtonProvider>
    </TokenProvider>
  );
}
