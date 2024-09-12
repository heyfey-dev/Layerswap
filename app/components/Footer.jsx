import { BsTwitterX } from "react-icons/bs";
import { FaDiscord, FaGithub, FaYoutube } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 flex items-center justify-between py-4 px-10">
      <div>
        <ul className="flex space-x-7">
          <li className="text-white underline">Privacy Policy.</li>
          <li className="text-white underline">Terms of Services</li>
        </ul>
        <p className="text-white mt-2">
          © 2024 Layerswap Labs, Inc. All rights reserved.
        </p>
      </div>
      <ul className="flex items-center space-x-5">
        <li className="text-2xl text-white">
          <BsTwitterX />
        </li>
        <li className="text-2xl text-white">
          <FaDiscord />
        </li>
        <li className="text-2xl text-white">
          <FaGithub />
        </li>
        <li className="text-2xl text-white">
          <FaYoutube />
        </li>
      </ul>
    </footer>
  );
};
