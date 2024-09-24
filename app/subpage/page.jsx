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
  const [fromAssets, setFromAssets] = useState([]);
  const [toAssets, setToAssets] = useState([]);

  const formRef = useRef(null);

  const [minLimit, setMinLimit] = useState(null);
  const [maxLimit, setMaxLimit] = useState(null);
  const [amount, setAmount] = useState(null);
  const [quote, setQuote] = useState(null);

  const [isTokenAddressPopupOpen, setIsTokenAddressPopupOpen] = useState(false);

  const [showFromAssetDropdown, setShowFromAssetDropdown] = useState(false);
  const [showToAssetDropdown, setShowToAssetDropdown] = useState(false);
  const [selectedFromAsset, setSelectedFromAsset] = useState(null);
  const [selectedToAsset, setSelectedToAsset] = useState(null);
  const [error, setError] = useState(null);

  const toggleFromAssetDropdown = () =>
    setShowFromAssetDropdown(!showFromAssetDropdown);
  const toggleToAssetDropdown = () =>
    setShowToAssetDropdown(!showToAssetDropdown);

  const toggleFromSearch = () => setIsFromSearchOpen(true);
  const toggleToSearch = () => setIsToSearchOpen(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleFromAssetSelect = (asset) => {
    console.log(asset);
    setSelectedFromAsset(asset); // Update the selected asset
    setShowToAssetDropdown(false); // Close the dropdown
  };

  const handleToAssetSelect = (asset) => {
    console.log(asset);
    setSelectedToAsset(asset); // Update the selected asset
    setShowToAssetDropdown(false); // Close the dropdown
  };

  useEffect(() => {
    const fetchFromAssets = async () => {
      try {
        if (!selectedFromToken.type) {
          setFromAssets([]);
          return;
        }
        const response = await axios.get(
          `https://api.layerswap.io/api/v2/networks?network_types=${selectedFromToken.type}`,
          {
            headers: {
              "X-LS-APIKEY":
                "NDBxG+aon6WlbgIA2LfwmcbLU52qUL9qTnztTuTRPNSohf/VnxXpRaJlA5uLSQVqP8YGIiy/0mz+mMeZhLY4/Q",
              Accept: "application/json",
            },
          }
        );

        if (response.status === 200) {
          const x = response.data.data;
          const sth = x.find(
            (network) => network.display_name === selectedFromToken.token
          );
          setFromAssets(sth.tokens);
        }
      } catch (error) {}
    };

    fetchFromAssets();
  }, [selectedFromToken]);

  useEffect(() => {
    const fetchToAssets = async () => {
      try {
        if (!selectedToToken.type) {
          setToAssets([]);
          return;
        }
        const response = await axios.get(
          `https://api.layerswap.io/api/v2/networks?network_types=${selectedToToken.type}`,
          {
            headers: {
              "X-LS-APIKEY":
                "NDBxG+aon6WlbgIA2LfwmcbLU52qUL9qTnztTuTRPNSohf/VnxXpRaJlA5uLSQVqP8YGIiy/0mz+mMeZhLY4/Q",
              Accept: "application/json",
            },
          }
        );

        if (response.status === 200) {
          const x = response.data.data;
          const sth = x.find(
            (network) => network.display_name === selectedToToken.token
          );
          setToAssets(sth.tokens);
        }
      } catch (error) {}
    };

    fetchToAssets();
  }, [selectedToToken]);

  useEffect(() => {
    const fetchLimits = async () => {
      setError(null);
      if (
        !selectedFromToken ||
        !selectedToToken ||
        !selectedToAsset ||
        !selectedFromAsset
      ) {
        setMinLimit(null);
        setMaxLimit(null);
        return;
      }

      try {
        console.log(selectedFromAsset.display_asset);
        console.log(selectedToAsset.display_asset);

        const url = `https://api.layerswap.io/api/v2/limits?source_network=${
          selectedFromToken.network
        }&source_token=${
          selectedFromAsset ? selectedFromAsset.display_asset : "ETH"
        }&destination_network=${selectedToToken.network}&destination_token=${
          selectedToAsset ? selectedToAsset.display_asset : "ETH"
        }`;
        console.log(url);
        const response = await axios.get(url, {
          headers: {
            "X-LS-APIKEY":
              "NDBxG+aon6WlbgIA2LfwmcbLU52qUL9qTnztTuTRPNSohf/VnxXpRaJlA5uLSQVqP8YGIiy/0mz+mMeZhLY4/Q",
            Accept: "application/json",
          },
        });
        if (response.status === 200) {
          setMinLimit(response.data.data.min_amount);
          setMaxLimit(response.data.data.max_amount);
        }
        if (response.status === 404) {
          setError("Route unavailable");
        }
      } catch (error) {
        setError("Route unavailable");
      }
    };

    fetchLimits();
  }, [selectedFromToken, selectedToToken, selectedFromAsset, selectedToAsset]);

  const fetchTransferDetails = async () => {
    if (error) return;
    setError(null);

    if (!amount || !minLimit || !maxLimit) {
      console.log("Fill required fields or check the amount limit");
      return;
    }
    if (amount < minLimit || amount > maxLimit) {
      setError(`Max is ${maxLimit}`);
      return;
    }

    try {
      console.log(selectedFromAsset.display_asset);
      console.log(selectedToAsset.display_asset);
      const url = `https://api.layerswap.io/api/v2/quote?source_network=${
        selectedFromToken.network
      }&source_token=${
        selectedFromAsset ? selectedFromAsset.display_asset : "ETH"
      }&destination_network=${selectedToToken.network}&destination_token=${
        selectedToAsset ? selectedToAsset.display_asset : "ETH"
      }&amount=${amount}`;
      console.log(url);
      const response = await axios.get(url, {
        headers: {
          "X-LS-APIKEY":
            "NDBxG+aon6WlbgIA2LfwmcbLU52qUL9qTnztTuTRPNSohf/VnxXpRaJlA5uLSQVqP8YGIiy/0mz+mMeZhLY4/Q",
          Accept: "application/json",
        },
      });

      if (response.status === 200) {
        const quoteData = response.data.data.quote;
        setQuote({
          totalFee: quoteData.total_fee,
          totalFeeUSD: quoteData.total_fee_in_usd,
          receiveAmount: quoteData.receive_amount,
          avgCompletionTime: Math.floor(
            timeStringToSeconds(quoteData.avg_completion_time)
          ),
          receiveAmountUSD:
            quoteData.receive_amount * quoteData.destination_token.price_in_usd,
        });
      }
      if (response.status === 400 || response.status === 404) {
        setError("Route unavailable");
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
                    {selectedFromAsset ? selectedFromAsset.display_asset : "Asset"}
                    <FaChevronDown className="ml-auto text-[15px]" />
                    </p>
                    {showFromAssetDropdown && (
                        <TokenAssetsDropdown
                          assets={fromAssets}
                          onSelect={handleFromAssetSelect}
                        />
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
                    {selectedToAsset ? selectedToAsset.display : "Asset"}
                    <FaChevronDown className="ml-auto text-[15px]" />
                    </p>
                    {showToAssetDropdown && (
                        <TokenAssetsDropdown
                          assets={toAssets}
                          onSelect={handleToAssetSelect}
                        />
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
            // onClick={() => {
            //   fetchMinMax();
            // }}
          >
            {error ? error : "Select source"}
          </button>
        </form>
        {quote && <TransferViaWalletPopup quote={quote} />}

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
