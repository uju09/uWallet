import { useSeedPhrase } from "./useSeedPhrase";
import { useState } from "react";
import axios from "axios";

const WALLET_URI = import.meta.env.VITE_WALLET_URI;

export const useWallet = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { getStoredPhrase } = useSeedPhrase();

  const generateWallet = async (walletID) => {
    setLoading(true);
    setError(null);
    try {
      const seed = getStoredPhrase();
      if (!seed) throw new Error("No seed phrase found");

      const response = await axios.post(WALLET_URI, { seed, walletID });
      return response.data.data; // Assuming APIResponse structure { data: { ... }, status, message }
    } catch (err) {
      setError(err.message || "Failed to generate wallet");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    generateWallet,
    loading,
    error
  }
}
