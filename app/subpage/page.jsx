"use client";

import { BiCommentDetail } from "react-icons/bi";
import { FaBars, FaChevronDown, FaWallet } from "react-icons/fa6";
import { IoSwapVertical } from "react-icons/io5";
import Image from "next/image";
import layerswapLogo from "../public/layerswap_logo.png";
import { Footer } from "../components/Footer";
import { useState, useEffect, useRef } from "react";
import { fetchTokenInfo } from "../api/tokens";
import { exchangeTokens, networkTokens, topTokens } from "../constants/tokens";
import { renderTokenGroup } from "../components/TokenGroup";
import { TokenSearchPopup } from "../components/TokenSearchPopup";
import { TokenSearchPopup2 } from "../components/TokenSearchPopup2";
import { renderTokenGroup2 } from "../components/TokenGroup2";
import NavbarPopupModalPage from "../components/NavbarPopupModal";

export default function LayerswapAppPage() {
  const [selectedOption, setSelectedOption] = useState("");
  const [tokenInfo, setTokenInfo] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isToSearchOpen, setIsToSearchOpen] = useState(false);
  const [toSearchTerm, setToSearchTerm] = useState("");
  const [selectedToToken, setSelectedToToken] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const dropdownRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (selectedOption) {
      fetchTokenInfo(selectedOption).then((response) => {
        if (response.status === 200) {
          setTokenInfo(response.data);
        }
      });
    }
  }, [selectedOption]);

  useEffect(() => {
    if (selectedToToken) {
      fetchTokenInfo(selectedToToken).then((response) => {
        if (response.status === 200) {
          setSelectedToToken(response.data);
        }
      });
    }
  }, [selectedToToken]);

  const onDropDownChanged = (value) => {
    setSelectedOption(value);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchTerm("");
  };

  const toggleToSearch = () => {
    setIsToSearchOpen(!isToSearchOpen);
    setToSearchTerm("");
  };

  const filteredTokens = [
    ...topTokens,
    ...networkTokens,
    ...exchangeTokens,
  ].filter((token) =>
    token.token.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredToTokens = [
    ...topTokens,
    ...networkTokens,
    ...exchangeTokens,
  ].filter((token) =>
    token.token.toLowerCase().includes(toSearchTerm.toLowerCase())
  );

  const onToTokenChanged = (value) => {
    setSelectedToToken(value);
  };

  return (
    <main className="font-sans bg-[#0c1526] md:bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] h-[100%] md:h-[100%] w-full py-5">
      {/* web and mobile view merged */}
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
          <FaWallet />
          <FaBars />
        </div>
      </div>

      <div className="container mx-auto md:w-[35%] relative">
        <form
          ref={formRef}
          className="md:bg-[#0c1526] w-full h-full p-6 rounded-md mt-5"
        >
          <section className="hidden md:flex space-x-5 pb-4 text-[21px] justify-end text-white opacity-80">
            <button type="button">
              <FaWallet />
            </button>
            <button type="button">
              <BiCommentDetail />
            </button>
            <button type="button" onClick={(e) => {
              e.preventDefault();
              setModalOpen(true);
            }}>
              <FaBars />
            </button>
            {/* <NavbarPopupModalPage isOpen={isModalOpen} onClose={() => setModalOpen(false)} /> */}
          </section>

          <section>
            <div className="flex flex-col space-y-1 relative">
              {/* swap from section */}
              <div className="bg-[#111c36] rounded-md py-4 px-5 md:px-3 space-y-1">
                <p className="text-xs md:text-sm text-white opacity-60">From</p>
                <div className="flex space-x-2">
                  <div
                    className="relative w-[75%] md:w-[70%]"
                    ref={dropdownRef}
                  >
                    <div
                      className="w-full bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white text-opacity-50 rounded-md flex items-center justify-between"
                      onClick={toggleSearch}
                    >
                      <span className="text-sm md:text-base">
                        {selectedOption ? tokenInfo?.symbol : "Select Token"}
                      </span>
                      <FaChevronDown className="text-[15px]" />
                    </div>
                  </div>
                  <p className="flex items-center w-[30%] bg-[#14213d] border-white border border-opacity-5 py-3 px-2 rounded-md text-white text-sm md:text-base opacity-60">
                    {tokenInfo ? tokenInfo.symbol : "Asset"}
                  </p>
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 border-white border border-opacity-20 rounded-full ">
                <div className="bg-[#0c1526] rounded-full p-1">
                  <div className="border border-white border-opacity-[0px] rounded-full p-1">
                    <IoSwapVertical className="text-white opacity-60 h-[15px] w-[15px] cursor-pointer" />
                  </div>
                </div>
              </div>

              {/* swap to section */}
              <div className="bg-[#111c36] rounded-md py-4 px-5 md:px-3 space-y-1">
                <p className="text-xs md:text-sm text-white opacity-60">To</p>
                <div className="flex space-x-2">
                  <div
                    className="relative w-[75%] md:w-[70%]"
                    ref={dropdownRef}
                  >
                    <div
                      className="w-full bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white text-opacity-50 rounded-md flex items-center justify-between"
                      onClick={toggleToSearch}
                    >
                      <span className="text-sm md:text-base">
                        {selectedToToken
                          ? selectedToToken?.symbol
                          : "Select Token"}
                      </span>
                      <FaChevronDown className="text-[15px]" />
                    </div>
                  </div>
                  <p className="flex items-center w-[30%] bg-[#14213d] border-white border border-opacity-5 py-3 px-2 rounded-md text-white text-sm md:text-base opacity-60">
                    {selectedToToken ? selectedToToken.symbol : "Asset"}
                  </p>
                </div>
              </div>
            </div>
          </section>

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
              <input
                type="text"
                placeholder="Address"
                className="bg-[#111c36] rounded-md w-full p-3 placeholder:text-sm"
                disabled
              />
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

          <button
            type="button"
            className="bg-[#6e0040] w-full mt-20 md:mt-6 p-[14px] text-white text-sm md:text-base text-opacity-50 font-semibold text-center rounded-md"
            onClick={toggleSearch}
          >
            Select source
          </button>
        </form>

        <TokenSearchPopup
          isSearchOpen={isSearchOpen}
          toggleSearch={toggleSearch}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filteredTokens={filteredTokens}
          onDropDownChanged={onDropDownChanged}
          renderTokenGroup={renderTokenGroup}
          topTokens={topTokens}
          networkTokens={networkTokens}
          exchangeTokens={exchangeTokens}
        />

        <TokenSearchPopup2
          isSearchOpen={isToSearchOpen}
          toggleSearch={toggleToSearch}
          searchTerm={toSearchTerm}
          setSearchTerm={setToSearchTerm}
          filteredTokens={filteredToTokens}
          renderTokenGroup2={renderTokenGroup2}
          onToTokenChanged={onToTokenChanged}
          topTokens={topTokens}
          networkTokens={networkTokens}
          exchangeTokens={exchangeTokens}
        />
      </div>

      <Footer />
    </main>
  );
}
