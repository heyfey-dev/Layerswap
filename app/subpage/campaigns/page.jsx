import React from "react";
import { BiCommentDetail } from "react-icons/bi";
import { FaArrowLeft, FaBars, FaWallet } from "react-icons/fa6";

const CampaignsPageModal = () => {
  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <button>
          <FaArrowLeft className="text-lg text-white text-opacity-80" />
        </button>
        <div className="space-x-5 text-[21px] text-white text-opacity-80">
          <button>
            <FaWallet />
          </button>
          <button>
            <BiCommentDetail />
          </button>
          <button>
            <FaBars />
          </button>
        </div>
      </div>

      <h2 className="text-sm md:text-base font-bold mb-4">Campaigns</h2>

      <div className="bg-gray-800 rounded p-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-purple-600 rounded-full mr-3 flex items-center justify-center">
              <span className="text-xs">S</span>
            </div>
            <span>STRK Rewards Round 1</span>
          </div>
          <span className="text-gray-400 text-sm">10 days left</span>
        </div>
      </div>

      <h3 className="text-sm md:text-base font-bold mb-4">Old campaigns</h3>

      <div className="bg-gray-800 rounded p-3 space-y-3">
        {[
          "OP Rewards Round 1",
          "OP Rewards Round 2",
          "IMX Rewards Round 1",
        ].map((campaign, index) => (
          <div key={index} className="flex items-center">
            <div className="w-6 h-6 bg-red-500 rounded-full mr-3 flex items-center justify-center">
              <span className="text-xs">O</span>
            </div>
            <span>{campaign}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPageModal;
