import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import layerswapLogo from "../public/layerswap_logo.png";
import Image from "next/image";

const HelpChatModal = () => {
  return (
    <div className="mt-10 absolute -top-[20%] left-[60%] w-[90%] h-[32rem] flex flex-col overflow-hidden rounded-2xl shadow-lg">
      {/* Gradient background */}
      <div className="h-1/2 bg-gradient-to-r from-[#0c1526] to-[#2f1136]"></div>
      {/* White background */}
      <div className="h-1/2 bg-white"></div>

      {/* Content container */}
      <div className="absolute inset-0 text-white flex flex-col">
        {/* Scrollable content container */}
        <div className="flex-1 overflow-y-auto">
          <div className="p-4">
            {/* Header */}
            <div className="flex justify-around items-center">
              <div className="flex items-center mb-4">
                <Image
                  src={layerswapLogo}
                  alt="layer"
                  height={80}
                  width={80}
                  className="h-[50px] w-[50px] md:h-16 md:w-16"
                />
                <span className="text-lg font-semibold tracking-wide">Layerswap</span>
              </div>
              <div className="flex mb-4">
                <div className="w-8 h-8 bg-pink-700 opacity-80 rounded-full flex items-center justify-center z-30">
                  B
                </div>
                <div className="w-8 h-8 bg-pink-700 opacity-80 rounded-full flex items-center justify-center -ml-1 z-20">
                  E
                </div>
                <div className="w-8 h-8 bg-pink-700 opacity-80 rounded-full flex items-center justify-center -ml-1 z-10">
                  L
                </div>
              </div>
            </div>

            <div className="ml-7">
              <h1 className="text-3xl text-[#7a839e] font-bold mb-2">Hi there 👋</h1>
              <h2 className="text-3xl font-bold">How can we help?</h2>
            </div>

            {/* Help Topics */}
            <div className="bg-white border border-gray-200 shadow-sm mb-5 w-[90%] py-6 space-y-4 rounded-lg mx-auto mt-7">
              <h2 className="text-[15px] text-black font-medium tracking-wide pl-6">
                Getting Started
              </h2>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <div className="space-y-1 pl-6">
                <h3 className="text-[15px] text-black font-medium tracking-wide">
                  Accessing transaction history
                </h3>
                <p className="text-gray-600 text-sm">
                  How to check transfer history?
                </p>
              </div>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <div className="space-y-1 pl-6">
                <h3 className="text-[15px] text-black font-medium tracking-wide">
                  Transferring manually
                </h3>
                <p className="text-gray-600 text-sm">
                  How to transfer funds without connecting a wallet?
                </p>
              </div>
              <div className="w-full h-px bg-gray-200 my-4"></div>
              <div className="space-y-1 pl-6">
                <h3 className="text-[15px] text-black font-medium tracking-wide">
                  Transferring from exchanges
                </h3>
                <p className="text-gray-600 text-sm">
                  How to bridge funds from the CEXes to chains?
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-[#ff0095] font-semibold w-[90%] py-2 px-4 rounded-md text-white mt-5">
                  Learn more
                </button>
              </div>
            </div>

            {/* contact us */}
            <div className="bg-white border border-gray-200 shadow-sm w-[90%] px-4 py-3 space-y-4 rounded-lg mx-auto flex justify-between items-center mb-5">
              <div>
                <h3 className="text-[15px] text-black font-medium tracking-wide">
                  Contact us
                </h3>
                <p className="text-gray-600 text-sm">
                  We typically reply in under 20 minutes
                </p>
              </div>
              <IoMdSend className="text-[#ff0095] text-lg" />
            </div>

            {/* partnership inquiries */}
            <div className="bg-white border border-gray-200 shadow-sm w-[90%] py-2 space-y-4 rounded-lg mx-auto justify-between items-center mb-5">
              <div className="pl-6">
                <h3 className="text-[15px] text-black font-medium tracking-wide">
                  Partnership Inquiries
                </h3>
                <p className="text-gray-600 text-sm">
                  Share collaboration opportunities
                </p>
              </div>
              <div className="flex justify-center w-full">
                <button className="bg-[#ff0095] font-semibold w-[90%] py-2 px-4 rounded-md text-white">
                  Fill in this form
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Navigation */}
        <div className="bg-white w-full border-t border-gray-200">
          <div className="text-gray-600 p-4 flex justify-around items-center">
            <button className="flex flex-col items-center">
              <RiHomeSmile2Line className="w-6 h-6 text-pink-500" />
              <span className="text-xs mt-1">Home</span>
            </button>
            <button className="flex flex-col items-center">
              <MdOutlineMessage className="w-6 h-6" />
              <span className="text-xs mt-1">Messages</span>
            </button>
            <button className="flex flex-col items-center">
              <IoMdHelpCircleOutline className="w-6 h-6" />
              <span className="text-xs mt-1">Help</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpChatModal;