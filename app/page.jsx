import Logo from "./components/Logo";
import { BiCommentDetail } from "react-icons/bi";
import { FaBars, FaWallet } from "react-icons/fa6";
import { TfiExchangeVertical } from "react-icons/tfi";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] h-screen w-full">
      <div>
        <Logo />
        <h2>Layerswap</h2>
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
        <p>Privacy Policy.</p>
        <p>Terms of Services</p>
      </footer>
    </main>
  );
}
