import Image from "next/image";
import React from "react";
import layerswapLogo from "../public/layerswap_logo.png";

const SubpageHeader = () => {

  return (
    <div className="font-sans flex items-center justify-center">
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
  );
};

export default SubpageHeader;
