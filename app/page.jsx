import { FaChevronDown, FaChevronRight } from "react-icons/fa6";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { IoSwapVertical } from "react-icons/io5";

export default function Home() {
  return (
    <main className="font-sans bg-[#0b1124] h-[100vh] w-full">
      <Navbar />

      <div>
        <section>
          <h1>
            <span>Fast</span> and <span>reliable </span>crypto transfers
          </h1>
          <div>Freedom to move crypto anywhere</div>
          <div>
            <span>
              <button>Lanuch App </button>
              <FaChevronRight />
            </span>
            <p>Learn more</p>
          </div>
        </section>

        <form className="container mx-auto bg-[#0c1526] w-[35%] p-6 rounded-md mt-5">
          <section>
            <div className="flex flex-col space-y-1 relative">
              <div className="bg-[#111c36] rounded-md py-4 px-3 space-y-1">
                <p className="text-sm text-white opacity-60">From</p>
                <FaChevronDown />
              </div>
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 border-white border border-opacity-20 rounded-full ">
                <div className="bg-[#0c1526] rounded-full p-1">
                  <div className="border border-white border-opacity-[0px] rounded-full p-1">
                    <IoSwapVertical className="text-white opacity-60 h-[15px] w-[15px] cursor-pointer" />
                  </div>
                </div>
              </div>
              <div className="bg-[#111c36] rounded-md py-4 px-3 space-y-1">
                <p className="text-sm text-white opacity-60">To</p>
                <FaChevronDown />
              </div>
            </div>
          </section>
        </form>
      </div>

      <Footer />
    </main>
  );
}
