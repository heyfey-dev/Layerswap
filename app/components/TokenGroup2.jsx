import Image from "next/image";

export const renderTokenGroup2 = (
  tokens,
  label,
  onToTokenChanged,
  toggleSearch
) => (
  <div className="py-2">
    <p className="px-3 py-1 text-sm text-white opacity-60">{label}</p>
    {tokens.map((token) => (
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
    ))}
  </div>
);
