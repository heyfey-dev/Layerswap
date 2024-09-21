import Image from "next/image";
import React from "react";

const TokenAssetsDropdown = () => {
  const cryptoData = [
    {
      name: "ETH",
      imageUrl:
        "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/currencies/eth.png",
    },
    {
      name: "USDC.e",
      imageUrl:
        "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/currencies/usdc.e.png",
    },
    {
      name: "USDC",
      imageUrl:
        "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/currencies/usdc.e.png",
    },
    {
      name: "USDT",
      imageUrl:
        "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/currencies/usdt.png",
    },
  ];

  return (
    <div className="bg-[#0c1526] border border-white border-opacity-5 absolute right-5 top-[30%] md:top-[50%] p-5 rounded-lg w-[150px] animate-slideDown flex flex-col items-center z-50">
      {cryptoData.map((crypto, index) => (
        <button
          key={crypto.name}
          className="relative flex items-center justify-center w-full mb-3 last:mb-0 rounded-md p-2 transition-colors duration-200 group"
        >
          <div className="absolute inset-0 rounded-md group-hover:bg-[#1c2d4a] transition-colors duration-200"></div>
          <div className="flex items-center justify-center relative z-10">
            <Image
              width={24}
              height={24}
              src={crypto.imageUrl}
              alt={crypto.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-[#7a839e] text-sm">{crypto.name}</span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default TokenAssetsDropdown;