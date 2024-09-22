import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { BsExclamationCircle } from "react-icons/bs";

const TransferViaWalletPopup = ({ quote }) => {
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
            <p>{quote?.avgCompletionTime} seconds</p>
            <p>
              {quote?.totalFee} ETH (${quote?.totalFeeUSD.toFixed(2)})
            </p>
          </div>
        </div>
      </div>
      <div className="border-b border-black"></div>

      {/* Total */}
      <div className="flex justify-between pt-3 text-white text-[15px] text-opacity-90 font-bold">
        <p>You will receive</p>
        <p>
          {quote?.receiveAmount} ETH (${quote.receiveAmountUSD})
        </p>
      </div>
    </div>
  );
};

export default TransferViaWalletPopup;
