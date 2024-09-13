import Image from "next/image";
import layerswapLogo from "../public/layerswap_logo.png";

export const Navbar = () => {
  return (
    <nav className="font-sans container max-w-full border-b border-[#232b3b] pb-1">
      {/* web view */}
      <section className="hidden md:flex items-center justify-between mx-28">
        <div className="flex items-center ">
          <Image
            src={layerswapLogo}
            alt="layer"
            height={80}
            width={80}
            className="h-[60px] w-[60px]"
          />
          <h2 className="text-[#e5e7eb] font-semibold tracking-wide text-xl">
            Layerswap
          </h2>
        </div>
        <ul className="flex text-white space-x-14 font-semibold text-[17px]">
          <li className="underline decoration-2 decoration-[#e32474] underline-offset-2">
            V8 Alpha
          </li>
          <li>Testnet</li>
          <li>Explorer</li>
          <li>API</li>
        </ul>
      </section>

      {/* mobile view */}
      <section className="md:hidden flex flex-col">
        <div className="flex items-center pl-2">
          <Image
            src={layerswapLogo}
            alt="layer"
            height={80}
            width={80}
            className="h-[50px] w-[50px]"
          />
          <h2 className="text-[#e5e7eb] font-semibold tracking-wide text-lg">
            Layerswap
          </h2>
        </div>
        <ul className="flex justify-evenly text-white text-opacity-90 font-semibold text-xs border-t border-[#232b3b] py-2">
          <li className="ring-1 ring-[#6e0040] bg-[#14213d] rounded-full p-2">
            <button>V8 Alpha</button>
          </li>
          <li className="ring-1 ring-white ring-opacity-20 bg-[#14213d] rounded-full p-2">
            <button>Explorer</button>
          </li>
          <li className="ring-1 ring-white ring-opacity-20 bg-[#14213d] rounded-full p-2">
            <button>Help Center</button>
          </li>
          <li className="ring-1 ring-white ring-opacity-20 bg-[#14213d] rounded-full p-2">
            <button>Testnet</button>
          </li>
          <li className="ring-1 ring-white ring-opacity-20 bg-[#14213d] rounded-full p-2">
            <button>API</button>
          </li>
        </ul>
      </section>
    </nav>
  );
};
