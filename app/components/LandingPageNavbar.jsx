import Image from "next/image";
import layerswapLogo from "../public/layerswap_logo.png";

export const LandingPageNavbar = () => {
  return (
    <nav className="font-sans container max-w-full border-b border-[#232b3b] pb-1">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:mx-28">
        <div className="flex items-center pl-2 md:pl-0">
          <Image
            src={layerswapLogo}
            alt="layer"
            height={80}
            width={80}
            className="h-[50px] w-[50px] md:h-[60px] md:w-[60px]"
          />
          <h2 className="text-[#e5e7eb] font-semibold tracking-wide text-lg md:text-xl">
            Layerswap
          </h2>
        </div>
        <ul className="flex justify-evenly md:justify-start md:space-x-14 text-white text-opacity-90 font-semibold text-xs md:text-[17px] border-t md:border-t-0 border-[#232b3b] py-2 md:py-0">
          <li className="ring-1 md:ring-0 ring-[#6e0040] bg-[#14213d] md:bg-transparent rounded-full md:rounded-none p-2 md:p-0 md:border-b-2 md:border-[#e32474]">
            <button>V8 Alpha</button>
          </li>
          <li className="ring-1 md:ring-0 ring-white ring-opacity-20 bg-[#14213d] md:bg-transparent rounded-full p-2 md:p-0">
            <button>Explorer</button>
          </li>
          <li className="ring-1 md:ring-0 ring-white ring-opacity-20 bg-[#14213d] md:bg-transparent rounded-full p-2 md:p-0 md:hidden">
            <button>Help Center</button>
          </li>
          <li className="ring-1 md:ring-0 ring-white ring-opacity-20 bg-[#14213d] md:bg-transparent rounded-full p-2 md:p-0">
            <button>Testnet</button>
          </li>
          <li className="ring-1 md:ring-0 ring-white ring-opacity-20 bg-[#14213d] md:bg-transparent rounded-full p-2 md:p-0">
            <button>API</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
