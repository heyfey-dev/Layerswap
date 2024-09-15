import React from 'react';
import { AiOutlineClose, AiOutlineRight } from "react-icons/ai";
import { RiWallet3Line, RiTwitterXLine, RiChatNewFill, RiServiceFill } from "react-icons/ri";
import { GrDocumentTransfer } from "react-icons/gr";
import { FaGift, FaBookOpen } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdPeopleAlt } from "react-icons/md";
import { BsExclamationCircleFill, BsShieldShaded, BsGithub, BsDiscord, BsYoutube, BsSubstack, BsMapFill } from "react-icons/bs";
import { PiSignInBold } from "react-icons/pi";

const NavbarModal = ({ isOpen, onClose, formHeight }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-start justify-center z-50 pt-[100px]">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>

      {/* Modal content */}
      <div
        className={`bg-[#0c1526] border border-white border-opacity-5 rounded-md shadow-lg overflow-hidden transition-all duration-500 ease-out z-10 w-full md:w-[35%] ${
          isOpen ? "popup-enter" : "popup-exit"
        }`}
        style={{ height: `${formHeight}px` }}
      >
        <div className="text-white h-full flex flex-col">
          {/* Modal Header */}
          <header className="flex justify-between items-center text-[#9fa9c4] p-4 bg-[#0c1526] sticky top-0 z-10">
            <span className="text-base md:text-lg font-semibold">Menu</span>
            <AiOutlineClose onClick={onClose} className="cursor-pointer text-xl md:text-2xl" />
          </header>

          <div className="flex-grow overflow-y-auto">
            <div className="py-5">
              {/* Connect a Wallet */}
              <div className="bg-[#381836] w-[94%] px-4 py-2 rounded-lg flex items-center mx-auto justify-between cursor-pointer">
                <RiWallet3Line className="text-[#e32474] text-2xl" />
                <span className="w-full text-sm tracking-wide text-center text-[#e32474]">
                  Connect a wallet
                </span>
              </div>

              <div className="space-y-4 p-4">
                <div className="bg-[#111c36] rounded">
                  {/* transfers & campaigns*/}
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <GrDocumentTransfer className="font-bold" />
                      <span className="text-sm font-semibold">Transfers</span>
                    </div>
                    <AiOutlineRight className="text-sm" />
                  </div>
                  <div className="border-t border-[#2C3A57]"></div>
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-3">
                      <FaGift />
                      <span className="text-sm font-semibold">Campaigns</span>
                    </div>
                    <AiOutlineRight className="text-sm" />
                  </div>
                </div>

                {/* help, docs of users, docs of partners*/}
                <div className="bg-[#111c36] rounded">
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <BsExclamationCircleFill />
                      <span className="text-sm font-semibold">Help</span>
                    </div>
                    <AiOutlineRight className="text-sm" />
                  </div>
                  <div className="border-t border-[#2C3A57]"></div>
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <FaBookOpen />
                      <span className="text-sm font-semibold">Docs for Users</span>
                    </div>
                    <HiOutlineExternalLink className="text-sm" />
                  </div>
                  <div className="border-t border-[#2C3A57]"></div>
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <MdPeopleAlt />
                      <span className="text-sm font-semibold">Docs for Partners</span>
                    </div>
                    <HiOutlineExternalLink className="text-sm" />
                  </div>
                </div>

                {/* privacy policy & terms of service*/}
                <div className="bg-[#111c36] rounded">
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <BsShieldShaded />
                      <span className="text-sm font-semibold">Privacy Policy</span>
                    </div>
                    <HiOutlineExternalLink className="text-sm" />
                  </div>
                  <div className="border-t border-[#2C3A57]"></div>
                  <div className="flex justify-between items-center p-3 cursor-pointer">
                    <div className="flex items-center space-x-2">
                      <RiServiceFill />
                      <span className="text-sm font-semibold">Terms of Service</span>
                    </div>
                    <HiOutlineExternalLink className="text-sm" />
                  </div>
                </div>

                {/* Suggest a Feature */}
                <div className="flex justify-between items-center bg-[#111c36] p-2 rounded cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <RiChatNewFill />
                    <span className="text-sm font-semibold">Suggest a Feature</span>
                  </div>
                  <AiOutlineRight className="text-sm" />
                </div>
              </div>

              <div className="mx-4 border-t border-[#2C3A57]"></div>

              {/* media links & suggestions */}
              <div className="p-4">
                <h3 className="text-[#9fa9c4] text-[14px] font-semibold text-center mb-4">
                  Media links & suggestions:
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-[#111c36] p-2 flex items-center justify-center space-x-2 rounded-lg">
                    <RiTwitterXLine className="text-lg" />
                    <span className="text-[15px]">Twitter</span>
                  </button>
                  <button className="bg-[#111c36] p-2 flex items-center justify-center space-x-2 rounded-lg">
                    <BsGithub className="text-lg" />
                    <span className="text-[15px]">GitHub</span>
                  </button>
                  <button className="bg-[#111c36] p-2 flex items-center justify-center space-x-2 rounded-lg">
                    <BsDiscord className="text-lg" />
                    <span className="text-[15px]">Discord</span>
                  </button>
                  <button className="bg-[#111c36] p-2 flex items-center justify-center space-x-2 rounded-lg">
                    <BsYoutube className="text-lg" />
                    <span className="text-[15px]">YouTube</span>
                  </button>
                  <button className="bg-[#111c36] p-2 flex items-center justify-center space-x-2 rounded-lg">
                    <BsSubstack className="text-lg" />
                    <span className="text-[15px]">Substack</span>
                  </button>
                  <button className="bg-[#111c36] p-2 flex items-center justify-center space-x-2 rounded-lg">
                    <BsMapFill className="text-lg" />
                    <span className="text-[15px]">Roadmap</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sign In Section */}
          <div className="bg-[#0c1526] sticky bottom-0 z-10 pb-4 pt-2">
            <div className="border-t border-[#2C3A57] mb-4"></div>
            <nav
              onClick={onClose}
              className="bg-[#111c36] w-[94%] mx-auto p-4 flex justify-between items-center cursor-pointer rounded-md"
            >
              <div className="flex items-center space-x-3">
                <PiSignInBold />
                <span className="text-[15px]">Sign In</span>
              </div>
              <AiOutlineRight />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarModal;
