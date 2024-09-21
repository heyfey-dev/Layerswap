import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";

const TransferViaWalletPopup = () => {
  return (
    <div className="bg-[#14213d] p-4 space-y-1">
      <button className="flex space-x-2 items-center text-white text-sm text-opacity-60">
        <p>Transfer via wallet</p>
        <FaChevronDown />
      </button>

      {/* Estimated time and fee */}
      <div className="space-y-3">
        <div className="flex justify-between py-3">
          <div className="text-white text-[14px] text-opacity-80 font-medium">
            <p>Estimated time</p>
            <p>Fee</p>
          </div>
          <div className="text-white text-sm text-opacity-80 font-medium">
            <p>1 minute</p>
            <p>0.0001 ETH ($0.63)</p>
          </div>
        </div>
      </div>
      <div className="border-b border-black"></div>

      {/* STRK rewards */}
      <div className="space-y-3">
        <div className="flex justify-between py-3">
          <div className="flex items-center space-x-2 text-white text-sm text-opacity-80 font-medium">
            <p>STRK rewards</p>
            <BsExclamationCircle />
          </div>
          <div className="text-white text-sm text-opacity-80 font-medium">
            <p>1.433333 STRK</p>
          </div>
        </div>
      </div>
      <div className="border-b border-black"></div>

      {/* Total */}
      <div className="flex justify-between pt-3 text-white text-[15px] text-opacity-90 font-bold">
        <p>You will receive</p>
        <p>1.433333 ETH ($1.00)</p>
      </div>
    </div>
  );
};

export default TransferViaWalletPopup;
