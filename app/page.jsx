import Logo from "./components/Logo";
import { BiCommentDetail } from "react-icons/bi";
import {
  FaBars,
  FaDiscord,
  FaGithub,
  FaWallet,
  FaYoutube,
} from "react-icons/fa6";
import { TfiExchangeVertical } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] h-screen w-full">
      <div className="flex flex-col justify-center">
        <Logo />
        <h2 className="text-white font-semibold text-xl">Layerswap</h2>
      </div>

      <div className="container mx-auto bg-[#0c1526] w-[40%] h-72 ">
        <section>
          <FaWallet />
          <BiCommentDetail />
          <FaBars />
        </section>

        <section>
          <div>
            <div className="bg-[#111c36]">
              <p>From</p>
              <select>
                <option value="">Source</option>
                <option value="">Source</option>
              </select>
              <p>Asset</p>
            </div>
            <TfiExchangeVertical />
            <div className="bg-[#111c36]">
              <p>To</p>
              <select>
                <option value="">Destination</option>
                <option value="">Destination</option>
              </select>
              <p>Asset</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="text" placeholder="0.0" />
          </div>
          <div>
            <label htmlFor="send to">Send To</label>
            <input type="text" placeholder="Address" />
          </div>
          <div>
            <input type="text" placeholder="you will receive " />
            <p>-</p>
          </div>
        </section>

        <div>
          <button>Select source</button>
        </div>
      </div>

      <footer>
        <ul>
          <li>Privacy Policy.</li>
          <li>Terms of Services</li>
        </ul>
        <p>© 2024 Layerswap Labs, Inc. All rights reserved.</p>
        <ul>
          <BsTwitterX />
          <FaDiscord />
          <FaGithub />
          <FaYoutube />
        </ul>
      </footer>
    </main>
  );
}
