import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaBitcoin, FaEthereum } from "react-icons/fa6";
import { GiRainbowStar } from "react-icons/gi";
import { IoMdAdd } from "react-icons/io";

const TokenAddressPopup = ({ isOpen, onClose }) => {
  return (
    isOpen && (
      <div className="absolute inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
        <div
          className={`absolute inset-0 bg-[#14213d] border-t border-white border-opacity-5 rounded-md shadow-lg overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? "popup-enter" : "popup-exit"
          }`}
        >
          <div className="h-full flex flex-col p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-[#9fa9c4]">Send To</h2>
              <button
                onClick={onClose}
                className="text-[#9fa9c4] hover:text-white cursor-pointer text-lg md:text-2xl"
              >
                <AiOutlineClose />
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <input
                type="text"
                placeholder="Send Address"
                className="bg-[#111c36] rounded-md w-[100%] p-3 placeholder:text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#e32474]"
              />
            </div>
            <div className="flex justify-center">
              <div className="flex items-center space-x-5 bg-[#111c36] rounded-md py-5 px-4 w-full">
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 md:gap-x-3 place-items-center">
                  <div className="bg-purple-600 py-2 px-3 rounded-md">
                    <GiRainbowStar className="text-white" />
                  </div>
                  <div className="bg-orange-500 py-2 px-3 rounded-md">
                    <FaBitcoin className="text-white" />
                  </div>
                  <div className="bg-blue-500 py-2 px-3 rounded-md">
                    <FaEthereum className="text-white" />
                  </div>
                  <div className="bg-green-500 py-2 px-3 rounded-md">
                    <IoMdAdd className="text-white" />
                  </div>
                </div>
                <div className="space-y-2 flex-grow">
                  <p className="text-[#9fa9c4] text-sm font-semibold">
                    Connect your wallet to select a destination address
                  </p>
                  <button className="bg-[#381836] w-full text-sm tracking-wide text-center rounded-md font-semibold text-[#e32474] p-2">
                    Connect Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default TokenAddressPopup;