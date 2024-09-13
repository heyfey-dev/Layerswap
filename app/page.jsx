import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { Navbar } from "./components/Navbar";
import { IoSwapVertical } from "react-icons/io5";
import { LandingPageFooter } from "./components/LandingPageFooter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans bg-[#0b1124] h-[100vh] w-full overflow-y-hidden">
      <Navbar />

      <div className="mt-16">
        <section className="flex flex-col items-center text-white space-y-3">
          <h1 className="text-6xl w-[35%] font-bold">
            <span className="underline decoration-4 decoration-[#e32474] underline-offset-2">
              Fast
            </span>{" "}
            and{" "}
            <span className="underline decoration-4 decoration-[#e32474] underline-offset-2">
              reliable{" "}
            </span>
            crypto transfers
          </h1>
          <p className="text-[#9ba5bf] font-semibold text-xl tracking-wide">
            Freedom to move crypto anywhere
          </p>
          <Link href={'/subpage'} className="flex items-center space-x-4">
            <span className="flex items-center p-[10px] rounded-lg bg-[#e32474] space-x-4">
              <button className="font-semibold">Lanuch App </button>
              <FaChevronRight />
            </span>
            <p className="font-semibold">Learn more</p>
          </Link>
        </section>

        <form className="container mx-auto bg-[#0c1526] w-[28%] p-6 rounded-xl mt-10 border border-white border-opacity-10 hover:translate-y-[-25px] transform transition duration-700 ease-in-out cursor-pointer">
          <section>
            <div className="flex flex-col space-y-7 relative">
              <div className="bg-[#111c36] rounded-md py-4 px-3 space-y-1">
                <p className="text-base text-white opacity-60">From</p>
                <Link href={'/subpage'} className="flex justify-between space-x-2 w-[100%] bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white opacity-80 outline-none rounded-md text-opacity-60">
                  <input
                    type="text"
                    placeholder="Loopring"
                    disabled
                    className="bg-transparent"
                  />
                  <FaChevronDown />
                </Link>
              </div>

              <div className="absolute left-1/2 top-[39%] transform -translate-x-1/2 -translate-y-1/2 border-white border border-opacity-20 rounded-full">
                <div className="bg-[#0c1526] rounded-full p-1">
                  <div className="border border-white border-opacity-[0px] rounded-full p-1">
                    <IoSwapVertical className="text-white opacity-60 h-[20px] w-[20px] cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="content-move-up bg-[#111c36] rounded-md py-4 px-3 space-y-1 transition-transform duration-300 ease-in-out">
                <p className="text-base text-white opacity-60">To</p>
                <div className="flex justify-end space-x-2 w-[100%] bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white opacity-80 outline-none rounded-md text-opacity-60">
                  <FaChevronDown />
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>

      <LandingPageFooter />
    </main>
  );
}
