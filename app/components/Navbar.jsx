import Image from "next/image";
import layerswapLogo from "../public/layerswap_logo.png";

export const Navbar = () => {
  return (
    <nav className="font-sans container max-w-full border-b border-[#232b3b] pb-1">
      <section className="flex items-center justify-between mx-28">
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
          <li className="underline decoration-2 decoration-[#e32474] underline-offset-2">V8 Alpha</li>
          <li>Testnet</li>
          <li>Explorer</li>
          <li>API</li>
        </ul>
      </section>
    </nav>
  );
};
