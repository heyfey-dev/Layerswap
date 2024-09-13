import Image from "next/image";
import layerswapLogo from "../public/layerswap_logo.png";

export const Navbar = () => {
  return (
    <nav>
      <section>
        <div className="flex items-center ">
          <Image
            src={layerswapLogo}
            alt="layer"
            height={80}
            width={80}
            className="h-16 w-16"
          />
          <h2 className="text-[#e5e7eb] font-semibold tracking-wide text-2xl">
            Layerswap
          </h2>
        </div>
        <ul>
          <li>V8 Alpha</li>
          <li>Testnet</li>
          <li>Explorer</li>
          <li>API</li>
        </ul>
      </section>
    </nav>
  );
};
