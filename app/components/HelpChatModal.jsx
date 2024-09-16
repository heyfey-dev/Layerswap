import React from "react";
import { RiHomeSmile2Line } from "react-icons/ri";
import { MdOutlineMessage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";
import { IoMdHelpCircleOutline } from "react-icons/io";
import layerswapLogo from "../public/layerswap_logo.png";
import Image from "next/image";

const HelpChatModal = () => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#0c1526] to-[#2f1136] text-white h-screen flex flex-col">
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
          <div className="w-8 h-8 bg-pink-700 opacity-90 rounded-full flex items-center justify-center z-30">
            B
          </div>
          <div className="w-8 h-8 bg-pink-700 opacity-90 rounded-full flex items-center justify-center -ml-1 z-20">
            E
          </div>
          <div className="w-8 h-8 bg-pink-700 opacity-90 rounded-full flex items-center justify-center -ml-1 z-10">
            L
          </div>
        </div>
      </div>

      <div className="ml-14">
        <h1 className="text-3xl text-[#7a839e] font-bold">Hi there 👋</h1>
        <h2 className="text-[33px] font-bold">How can we help?</h2>
      </div>

      {/* Help Topics */}
      

      {/* contact us */}
      <div>
        <div>
          <h3>Contact us</h3>
          <p>We typically reply in under 20 minutes</p>
        </div>
        <IoMdSend />
      </div>

      {/* partnership inquiries */}
      <div>
        <h3>Partnership Inquiries</h3>
        <p>Share collaboration opportunities</p>
        <button>Fill in this form</button>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white text-gray-600 p-4 flex justify-around items-center">
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
  );
};

export default HelpChatModal;
