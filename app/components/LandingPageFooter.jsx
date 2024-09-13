import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa6";

export const LandingPageFooter = () => {
  return (
    <footer className="bg-[#0b1124] font-sans fixed bottom-0 left-0 right-0 flex items-center justify-around py-5 px-5">
        <p className="text-white text-opacity-30 text-[13px]">
          © 2024 Layerswap Labs, Inc. All rights reserved.
        </p>
      <ul className="flex items-center space-x-7">
        <li className="text-white text-opacity-30 text-xs">
          Privacy Policy
        </li>
        <li className="text-white text-opacity-30 text-xs">
          Terms of Services
        </li>
      </ul>
      <ul className="flex items-center space-x-5">
        <li className="text-2xl text-white text-opacity-60">
          <BsTwitterX />
        </li>
        <li className="text-2xl text-white text-opacity-60">
          <FaDiscord />
        </li>
        <li className="text-2xl text-white text-opacity-60">
          <FaGithub />
        </li>
        <li className="text-2xl text-white text-opacity-60">
          <FaYoutube />
        </li>
      </ul>
    </footer>
  );
};
