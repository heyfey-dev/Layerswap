import Image from "next/image";
import React from "react";

const TokenAssetsDropdown = ({ assets, onSelect }) => {
  return (
    <div className="bg-[#0c1526] border border-white border-opacity-5 absolute right-[1px] top-[54px] md:top-[54px] p-2 rounded-lg w-[150px] animate-slideDown flex flex-col items-center z-50 max-h-[50px] overflow-y-auto ">
      {assets?.map((crypto, index) => (
        <button
          key={crypto.display_asset}
          className="relative flex items-center justify-center w-full mb-2 last:mb-0 rounded-md p-1 transition-colors duration-200 group"
          onClick={() => onSelect(crypto)}
        >
          <div className="absolute inset-0 rounded-md group-hover:bg-[#1c2d4a] transition-colors duration-200"></div>
          <div className="flex items-center justify-center relative z-10">
            <Image
              width={24}
              height={24}
              src={crypto.logo}
              alt={crypto.display_asset}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-[#7a839e] text-sm">
              {crypto.display_asset}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TokenAssetsDropdown;
