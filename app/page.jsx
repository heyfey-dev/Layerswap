import { BiCommentDetail } from "react-icons/bi";
import { FaBars, FaWallet } from "react-icons/fa6";
import { TfiExchangeVertical } from "react-icons/tfi";
import Image from "next/image";
import layerswapLogo from "./public/layerswap_logo.png";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <main className="bg-gradient-to-l from-[#0c1526] via-[#2f1136] to-[#0c1526] h-[100%] w-full py-5">
      <div className="flex justify-center items-center ">
        <Image
          src={layerswapLogo}
          alt="layer"
          height={80}
          width={80}
          className="h-20 w-20"
        />
        <h2 className="text-white font-semibold tracking-wide text-2xl">Layerswap</h2>
      </div>

      <form className="container mx-auto bg-[#0c1526] w-[40%] p-6 h-[72] rounded-md">
        <section className="flex space-x-5 py-2 text-2xl justify-end text-white">
          <FaWallet />
          <BiCommentDetail />
          <FaBars />
        </section>

        <section>
          <div className="flex flex-col">
            <div className="bg-[#111c36] rounded-md p-4 space-y-4">
              <p className="text-white opacity-60">From</p>
              <div className="flex space-x-5">
                <select className="w-[70%] bg-[#14213d] cursor-pointer py-3 px-2 text-white opacity-80 outline-none border-none rounded-md">
                  <option value="">Source</option>
                  <option value="">Source</option>
                </select>
                <p className="flex items-center w-[30%] bg-[#14213d] py-3 px-2 rounded-md text-white opacity-80">
                  Asset
                </p>
              </div>
            </div>
            <TfiExchangeVertical className="mx-auto text-white opacity-60 text-xl bg-[#111c36] rounded-full w-7 h-7 cursor-pointer" />
            <div className="bg-[#111c36] rounded-md p-4 space-y-4">
              <p className="text-white opacity-60">To</p>
              <div className="flex space-x-5">
                <select className="w-[70%] bg-[#14213d] cursor-pointer py-3 px-2 text-white opacity-80 outline-none border-none rounded-md">
                  <option value="">Destination</option>
                  <option value="">Destination</option>
                </select>
                <p className="flex items-center w-[30%] bg-[#14213d] py-3 px-2 rounded-md text-white opacity-80">
                  Asset
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5 space-y-4">
          <div className="flex flex-col space-y-2">
            <label htmlFor="amount" className="text-white opacity-60">
              Amount
            </label>
            <input
              type="text"
              placeholder="0.0"
              className="bg-[#111c36] rounded-md w-full p-3"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label htmlFor="send to" className="text-white opacity-60">
              Send To
            </label>
            <input
              type="text"
              placeholder="Address"
              className="bg-[#111c36] rounded-md w-full p-3"
            />
          </div>
          <div className="flex justify-between items-center bg-[#111c36] rounded-md w-full p-3">
            <input
              type="text"
              placeholder="You will receive"
              className="text-white border-none outline-none bg-transparent"
              disabled
            />
            <p className="text-white text-2xl">-</p>
          </div>
        </section>

        <button className="bg-[#6e0040] w-full mt-6 p-3 text-white opacity-60 text-center rounded-md">
          Select source
        </button>
      </form>

      <Footer />
    </main>
  );
}
