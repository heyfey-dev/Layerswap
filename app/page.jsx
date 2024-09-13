import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { Navbar } from "./components/Navbar";
import { IoSwapVertical } from "react-icons/io5";
import { LandingPageFooter } from "./components/LandingPageFooter";
import Link from "next/link";

export default function Home() {
  return (
    <main className="font-sans bg-[#0b1124] h-[100vh] w-full overflow-y-hidden">
      <Navbar />

      <div className="mt-10 md:mt-16">
        <section className="flex flex-col ml-5 md:ml-0 items-start md:items-center text-white space-y-3">
          <h1 className="text-3xl md:text-6xl font-bold flex flex-wrap justify-start md:justify-center max-w-[600px] mx-auto tracking-normal md:tracking-wide">
            <span className="underline decoration-2 md:decoration-4 decoration-[#e32474] underline-offset-2 mr-2">
              Fast
            </span>
            <span className="mr-2">and</span>
            <span className="underline decoration-2 md:decoration-4 decoration-[#e32474] underline-offset-2 mr-2">
              reliable
            </span>
            <span>crypto transfers</span>
          </h1>
          <p className="text-[#9ba5bf] font-semibold text-base md:text-xl tracking-wide">
            Freedom to move crypto anywhere
          </p>
          <Link href={'/subpage'} className="flex items-center space-x-4 text-[15px] md:text-base">
            <span className="flex items-center p-[10px] rounded-xl bg-[#e32474] space-x-4">
              <button className="font-semibold">Lanuch App </button>
              <FaChevronRight />
            </span>
            <p className="font-semibold">Learn more</p>
          </Link>
        </section>

        <form className="container mx-auto bg-[#0c1526] w-full max-w-xs sm:max-w-sm md:max-w-md p-6 rounded-xl mt-12 md:mt-10 border border-white border-opacity-10 md:hover:translate-y-[-25px] transform transition duration-700 ease-in-out cursor-pointer">
          <section>
            <div className="flex flex-col space-y-7 relative">
              <div className="bg-[#111c36] rounded-md py-4 px-3 space-y-1">
                <p className="text-base text-white opacity-60">From</p>
                <Link href={'/subpage'} className="flex justify-between space-x-2 w-full bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white opacity-80 outline-none rounded-md text-opacity-60">
                  <input
                    type="text"
                    placeholder="Loopring"
                    disabled
                    className="bg-transparent w-full"
                  />
                  <FaChevronDown className="flex-shrink-0" />
                </Link>
              </div>

              <div className="absolute left-1/2 top-[39%] transform -translate-x-1/2 -translate-y-1/2 border-white border border-opacity-20 rounded-full">
                <div className="bg-[#0c1526] rounded-full p-1">
                  <div className="border border-white border-opacity-[0px] rounded-full p-1">
                    <IoSwapVertical className="text-white opacity-60 h-[20px] w-[20px] cursor-pointer" />
                  </div>
                </div>
              </div>

              <div className="bg-[#111c36] rounded-md py-4 px-3 space-y-1 md:transition-transform duration-300 ease-in-out">
                <p className="text-base text-white opacity-60">To</p>
                <div className="flex justify-between space-x-2 w-full bg-[#14213d] border border-white border-opacity-5 cursor-pointer py-3 px-2 text-white opacity-80 outline-none rounded-md text-opacity-60">
                  <input
                    type="text"
                    placeholder="Select network"
                    disabled
                    className="bg-transparent w-full"
                  />
                  <FaChevronDown className="flex-shrink-0" />
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
