interface Token {
  token: string;
  address: string;
  imageUrl?: string;
  network?: string;
  type?:
    | "evm"
    | "starknet"
    | "solana"
    | "cosmos"
    | "starkex"
    | "zksynclite"
    | "ton"
    | "paradex"
    | "tron";
}

export const topTokens: Token[] = [
  {
    token: "Arbitrum One",
    network: "ARBITRUM_MAINNET",
    address: "0x99ff5FEBFB3f9abD653864503d26010d98e51bd0",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Farbitrum_mainnet.png&w=48&q=75",
    type: "evm",
  },
  {
    token: "Ethereum",
    network: "ETHEREUM_MAINNET",
    address: "0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fethereum_mainnet.png&w=48&q=75",
    type: "evm",
  },
  {
    token: "Starknet",
    address: "0xCa14007Eff0dB1f8135f4C25B34De49AB0d42766",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fstarknet_mainnet.png&w=48&q=75",
    network: "STARKNET_MAINNET",
    type: "starknet",
  },
  {
    token: "Optimism",
    address: "0xb2EA9527bF05bC3b73320a1ec18bd4F2Fe88d952",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Foptimism_mainnet.png&w=48&q=75",
    network: "OPTIMISM_MAINNET",
    type: "evm",
  },
  {
    token: "zKSync Era",
    address: "0x8A0C816A52e71A1e9b6719580ebE754709C55198",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fzksyncera_mainnet.png&w=48&q=75",

    network: "ZKSYNCERA_MAINNET",
    type: "evm",
  },
];

export const networkTokens: Token[] = [
  {
    token: "Linea",
    address: "0x4F959C9968c54170b43CC0Ec09DEce5B66E12da6",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Flinea_mainnet.png&w=48&q=75",
    network: "LINEA_MAINNET",
    type: "evm",
  },
  {
    token: "BSC",
    address: "0xe541504417670FB76b612B41B4392d967a1956c7",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbsc_mainnet.png&w=48&q=75",
    network: "BSC_MAINNET",
    type: "evm",
  },
  {
    token: "Polygon",
    address: "0x455e53CBB86018Ac2B8092FdCd39d8444aFFC3F6",
    imageUrl:
      "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/networks/polygon_mainnet.png",
    network: "POLYGON_MAINNET",
    type: "evm",
  },
  {
    token: "Avalanche",
    address: "0x8965349fb649A33a30cbFDa057D8eC2C48AbE2A2",
    imageUrl:
      "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/networks/avax_mainnet.png",
    network: "AVAX_MAINNET",
    type: "evm",
  },
  {
    token: "zkSync Lite",
    address: "0x222A9258c045EEF4E3Cf1Ca40D0C15526C69d1c2",
    imageUrl:
      "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/networks/zksync_mainnet.png",
    network: "ZKSYNC_MAINNET",
    type: "zksynclite",
  },
  {
    token: "Arbitrum Nova",
    address: "0xD70C3e88C717659273C315454F4177fA67ED23E7",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Farbitrumnova_mainnet.png&w=48&q=75",
    network: "ARBITRUMNOVA_MAINNET",
    type: "evm",
  },
  {
    token: "Loopring",
    address: "0xEF68e7C694F40c8202821eDF525dE3782458639f",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Floopring_mainnet.png&w=48&q=75",
    network: "LOOPRING_MAINNET",
    type: "zksynclite",
  },
  {
    token: "ImmutableX",
    address: "0xd796206059668A8E8cB8dB915E92F988c29ecc4d",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fimmutablex_mainnet.png&w=48&q=75",
    network: "IMMUTABLEX_MAINNET",
    type: "starkex",
  },
  {
    token: "Base",
    address: "0x44971ABF0251958492FeE97dA3e5C5adA88B9185",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbase_mainnet.png&w=48&q=75",
    network: "BASE_MAINNET",
    type: "evm",
  },
  {
    token: "Zora",
    address: "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fzora_mainnet.png&w=48&q=75",
    network: "ZORA_MAINNET",
    type: "evm",
  },
  {
    token: "Ronin",
    address: "0x743Df637d19EdaF775Dbb86083292C0fD4f7BF19",
    imageUrl:
      "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/networks/ronin_mainnet.png",
    type: "evm",
  },
  {
    token: "Blast",
    address: "0x8fAFEf7d8D02331d2BE474779f77Ba4F2FdD9E58",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fblast_mainnet.png&w=48&q=75",
    network: "BLAST_MAINNET",
    type: "evm",
  },
  {
    token: "Mantle",
    address: "0x3c3a81e81dc49A522A592e7622A7E711c06bf354",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fmantle_mainnet.png&w=48&q=75",
    network: "MANTLE_MAINNET",
    type: "evm",
  },
  {
    token: "Manta Pacific",
    address: "0x6567EB3ca66595b61f43E2EB5493d9974a9e0156",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fmanta_mainnet.png&w=48&q=75",
    network: "MANTA_MAINNET",
    type: "evm",
  },

  {
    token: "opBNB",
    address: "0xDA22Fb764F4535FE23978d280ec93F16bD53b0c0",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fopbnb_mainnet.png&w=48&q=75",
    network: "OPBNB_MAINNET",
    type: "evm",
  },
  {
    token: "Nahmii",
    address: "0x7c8155909cd385F120A56eF90728dD50F9CcbE52",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fnahmii_mainnet.png&w=48&q=75",
    network: "NAHMII_MAINNET",
    type: "evm",
  },
  {
    token: "Mode",
    address: "0x3c6Da7763cAA0e4b684BbC733f04a8EC08Af3762",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fmode_mainnet.png&w=48&q=75",
    network: "MODE_MAINNET",
    type: "evm",
  },
  {
    token: "OKT Chain (OKTC)",
    address: "0x6B675A3B5D1177669D7303f3704F26ad8eEe89AC",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fokc_mainnet.png&w=48&q=75",
    network: "OKC_MAINNET",
    type: "evm",
  },
  {
    token: "Public Goods Network",
    address: "0x7B22E5a376586ddF663381AC98697Be50AF9bf3b",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fpgn_mainnet.png&w=48&q=75",
    network: "PGN_MAINNET",
    type: "evm",
  },
  {
    token: "Astar zkEVM",
    address: "0x8d2809308c00e36371CcD805d1a005AB4D20B66d",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fastarzk_mainnet.png&w=48&q=75",
    network: "ASTARZK_MAINNET",
    type: "evm",
  },
  {
    token: "X Layer",
    address: "0x7777777034512a18daf4D734C8B9Cb624b662B1c",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fxlayer_mainnet.png&w=48&q=75",
    network: "XLAYER_MAINNET",
    type: "evm",
  },
  {
    token: "Redstone",
    address: "0x19a99e5BBFAE5fcF744b3C866b40e36aD15CF656",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fredstone_mainnet.png&w=48&q=75",
    network: "REDSTONE_MAINNET",
    type: "evm",
  },
  {
    token: "Taiko",
    address: "0x10dea67478c5F8C5E2D90e5E9B26dBe60c54d800",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Ftaiko_mainnet.png&w=48&q=75",
    network: "TAIKO_MAINNET",
    type: "evm",
  },
  {
    token: "Kroma",
    address: "0xb3A401685485840Af49DBD1442001a6E02374a86",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fkroma_mainnet.png&w=48&q=75",
    network: "KROMA_MAINNET",
    type: "evm",
  },
  {
    token: "Zetachain",
    address: "0x088658E721474f07c0294Ef4B4138C492753c0d3",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fzetachain_mainnet.png&w=48&q=75",
    network: "ZETACHAIN_MAINNET",
    type: "evm",
  },
  {
    token: "Bob",
    address: "0xB0B195aEFA3650A6908f15CdaC7D92F8a5791B0B",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbob_mainnet.png&w=48&q=75",
    network: "BOB_MAINNET",
    type: "evm",
  },
  {
    token: "Mint",
    address: "0xD7B2C1a7F3c67fB0EA57a7ef29bC1F18D7bE3195",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fmint_mainnet.png&w=48&q=75",
    network: "MINT_MAINNET",
    type: "evm",
  },
  {
    token: "Scroll",
    address: "0x3CCa3E01fF2D31C1CACBc347cb1f11274C19D8EE",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fscroll_mainnet.png&w=48&q=75",
    network: "SCROLL_MAINNET",
    type: "evm",
  },
  {
    token: "Gnosis",
    address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fgnosis_mainnet.png&w=48&q=75",
    network: "GNOSIS_MAINNET",
    type: "evm",
  },
  {
    token: "Immutable zkEVM",
    address: "0xb5B2398e74B7D12a426A0a26Ef727F8db6F64A14",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fimmutablezk_mainnet.png&w=48&q=75",
    network: "IMMUTABLEZK_MAINNET",
    type: "evm",
  },
  {
    token: "Fuse",
    address: "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Ffuse_mainnet.png&w=48&q=75",
    network: "FUSE_MAINNET",
    type: "evm",
  },
  {
    token: "Gravity",
    address: "0xd8e2F184EedC79A9bdE9Eb7E34B0fF34e98692B7",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fgravity_mainnet.png&w=48&q=75",
    network: "GRAVITY_MAINNET",
    type: "evm",
  },
  {
    token: "Solana",
    address: "0x97B41a4af406971F19e9E4f97567C5FfF9784c65",
    network: "SOLANA_MAINNET",
    type: "solana",
  },
  {
    token: "Polygon zkEVM",
    address: "0xc3Ae21da37d7F200a85f007124854B933d8638f4",
    imageUrl:
      "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/networks/polygonzk_mainnet.png",
    network: "POLYGONZK_MAINNET",
    type: "evm",
  },
  {
    token: "Tron",
    address: "0xaD5Fe5B0B8eC8fF4565204990E4405B2Da117d8e",
    network: "TRON_MAINNET",
    imageUrl:
      "https://prodlslayerswapbridgesa.blob.core.windows.net/layerswap/networks/tron_mainnet.png",
    type: "tron",
  },
  {
    token: "Paradex",
    address: "0x60B264DEdF5F19493951495fE4935fA7DDAeC4B2",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fparadex_mainnet.png&w=48&q=75",
    network: "PARADEX_MAINNET",
    type: "starknet",
  },
  {
    token: "TON",
    address: "0xD7EFB00d12C2c13131FD319336Fdf952525dA2af",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fton_mainnet.png&w=48&q=75",
    network: "TON_MAINNET",
    type: "ton",
  },
];

export const exchangeTokens: Token[] = [
  {
    token: "OKX",
    address: "0x5c891d76584b46bC7F1E700169a76569Bb77d2Db",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fokex.png&w=48&q=75",
  },
  {
    token: "Binance",
    address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbinance.png&w=48&q=75",
  },
  {
    token: "Coinbase",
    address: "0xcbB7C0000aB88B473b1f5aFd9ef808440eed33Bf",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fcoinbase.png&w=48&q=75",
  },
  {
    token: "Kucoin",
    address: "0xf34960d9d60be18cC1D5Afc1A6F012A723a28811",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fkucoin.png&w=48&q=75",
  },
  {
    token: "Kraken",
    address: "0xC55D43b5BCd6F9b8EE6F5a30bf43AD40c66374C5",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fkraken.png&w=48&q=75",
  },
  {
    token: "Binance US",
    address: "0x9610D7E5a50c5E972553473e2A17f14d9C36c2B2",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbinanceus.png&w=48&q=75",
  },
  {
    token: "HTX",
    address: "0x8b847669B2e5dD5101736e41dA8Ec38653065aeb",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fhuobi.png&w=48&q=75",
  },

  {
    token: "Bitfinex",
    address: "0xD64fa1F69f578d66967c475969B30aa327D20C61",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbitfinex.png&w=48&q=75",
  },

  {
    token: "Crypto.com Exchange",
    address: "0x4f30b8530C3CB693E4F36a48b1999F32b872CdFF",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fcryptocom.png&w=48&q=75",
  },
  {
    token: "Gate.io",
    address: "0x550f95a80e42c5cfBc786C5C47322862e0332528",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fgateio.png&w=48&q=75",
  },
  {
    token: "BitGet",
    address: "0x0666e49354A9dCaae254C4ACd2561418a90C68Ef",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fbitget.png&w=48&q=75",
  },
  {
    token: "MEXC Global",
    address: "0x7DE2d123042994737105802D2abD0A10a7BdE276",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fmexc.png&w=48&q=75",
  },
  {
    token: "Gemini",
    address: "0x09e5e172df245529b22686b77E959D3F2937FEB0",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fgemini.png&w=48&q=75",
  },
  {
    token: "Crypto.com APP",
    address: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fcryptocomapp.png&w=48&q=75",
  },
  {
    token: "Swyftx",
    address: "0xA1248c718d52752b2cC257eeb0eBa900408dAeB8",
    imageUrl:
      "https://layerswap.io/app/_next/image?url=https%3A%2F%2Fprodlslayerswapbridgesa.blob.core.windows.net%2Flayerswap%2Fnetworks%2Fswyftx.png&w=48&q=75",
  },
];
