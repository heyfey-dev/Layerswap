import { cookieStorage, createStorage, http } from "@wagmi/core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { arbitrum, mainnet } from "@reown/appkit/networks";

const storage = createStorage({
  storage: cookieStorage, // Correctly define the storage
});

// Get projectId from https://cloud.reown.com
export const projectId = "fc70813a9fcdde55e7c2aeea86347166";

if (!projectId) {
  throw new Error("Project ID is not defined");
}

//Set up the Wagmi Adapter (Config)
export const wagmiAdapter = new WagmiAdapter({
  storage,
  networks: [mainnet, arbitrum],
  projectId: projectId,
  ssr: true,
});

export const config = wagmiAdapter.wagmiConfig;
