import Image from "next/image";
import { LiaTimesSolid } from "react-icons/lia";

export const TokenSearchPopup2 = ({
  isSearchOpen,
  toggleSearch,
  searchTerm,
  setSearchTerm,
  filteredTokens,
   onToTokenChanged,
  renderTokenGroup2,
  topTokens,
  networkTokens,
  exchangeTokens,
}) => {
  return (
    isSearchOpen && (
      <div
        className={`absolute inset-0 bg-[#14213d] border-t border-white border-opacity-5 rounded-md shadow-lg overflow-hidden transition-all duration-500 ease-out ${
          isSearchOpen ? "popup-enter" : "popup-exit"
        }`}
      >
        <div className="h-full flex flex-col p-4">
          <div className="flex justify-end ">
            <button
              onClick={toggleSearch}
              className="text-white opacity-60 hover:opacity-100 text-lg md:text-2xl"
            >
              <LiaTimesSolid />
            </button>
          </div>
          <input
            type="text"
            placeholder="Swap to"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-transparent border-b border-white border-opacity-20 p-3 text-white placeholder-white placeholder-opacity-60 focus:outline-none mb-4"
          />
          <div className="flex-grow overflow-y-auto">
            {searchTerm ? (
              filteredTokens.map((token) => (
                <div
                  key={token.address}
                  className="flex items-center px-3 py-2 hover:bg-[#1c2d4a] cursor-pointer"
                  onClick={() => {
                     onToTokenChanged(token.address);
                    toggleSearch();
                  }}
                >
                  {token.imageUrl ? (
                    <Image
                      src={token.imageUrl}
                      alt={token.token}
                      width={24}
                      height={24}
                      className="mr-2 rounded-full"
                      unoptimized
                    />
                  ) : (
                    <div className="w-6 h-6 mr-2 rounded-full bg-gray-300"></div>
                  )}
                  <span className="text-white">{token.token}</span>
                </div>
              ))
            ) : (
              <>
                {renderTokenGroup2(
                  topTokens,
                  "Popular",
                   onToTokenChanged,
                  toggleSearch
                )}
                {renderTokenGroup2(
                  networkTokens,
                  "Networks",
                   onToTokenChanged,
                  toggleSearch
                )}
                {renderTokenGroup2(
                  exchangeTokens,
                  "Exchanges",
                   onToTokenChanged,
                  toggleSearch
                )}
              </>
            )}
          </div>
        </div>
      </div>
    )
  );
};
