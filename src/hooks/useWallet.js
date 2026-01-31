
import { useSeedPhrase } from "./useSeedPhrase";
import { useState } from "react";
import axios from "axios";

const WALLET_URI = "http://localhost:3000/api/wallet/generate";

export const useWallet = () => {
  const [isWalletGenerated, setIsWalletGenerated] = useState(false);

  const { getStoredPhrase } = useSeedPhrase();
  const walletID = localStorage.getItem('walletId');

  const seed = getStoredPhrase();

  const { publicKey, encryptedPrivateKey } = axios.post(WALLET_URI, { seed, walletID })
    .then((res) => {
      setIsWalletGenerated(true);
      return res.data;
    })
    .catch(() => setIsWalletGenerated(false));

  return {
    isWalletGenerated,
    publicKey,
    encryptedPrivateKey
  }

}
