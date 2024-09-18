import axios from "axios";

const BASE_URL = `https://api.ethplorer.io`;

export const fetchTokenInfo = async (tokenAddress: string) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/getTokenInfo/${tokenAddress}?apiKey=freekey`
    );
    return response;
  } catch (error) {
    throw error;
  }
};
