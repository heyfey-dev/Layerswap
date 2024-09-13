import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="font-sans fixed bottom-0 left-0 right-0 flex items-center justify-between py-4 px-10">
      <div>
        <ul className="flex items-center space-x-7">
          <li className="text-white text-opacity-30 underline text-xs">Privacy Policy.</li>
          <li className="text-white text-opacity-30 underline text-xs">Terms of Services</li>
        </ul>
        <p className="text-white text-opacity-30 text-[13px] mt-2">
          © 2024 Layerswap Labs, Inc. All rights reserved.
        </p>
      </div>
      <ul className="flex items-center space-x-5">
        <li className="text-2xl text-white text-opacity-30">
          <BsTwitterX />
        </li>
        <li className="text-2xl text-white text-opacity-30">
          <FaDiscord />
        </li>
        <li className="text-2xl text-white text-opacity-30">
          <FaGithub />
        </li>
        <li className="text-2xl text-white text-opacity-30">
          <FaYoutube />
        </li>
      </ul>
    </footer>
  );
};
