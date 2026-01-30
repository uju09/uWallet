import { generateMnemonic, validateMnemonic } from "bip39";
import { useState } from "react";
import { encryptData, decryptData } from "../storage/secureStorage";
import { Buffer } from "buffer";

window.Buffer = Buffer;

export const useSeedPhrase = () => {

  const [seedPhrase, setSeedPhrase] = useState("");

  const generatePhrase = () => {
    const data = generateMnemonic();
    setSeedPhrase(data);
    return data;
  }

  const validatePhrase = (mnemonic) => {
    const isMnemonicValid = validateMnemonic(mnemonic);
    if (isMnemonicValid) {
      setSeedPhrase(mnemonic);
      return true;
    }
    return false;
  }

  const clearSeedPhrase = () => {
    setSeedPhrase("");
  }

  const getSeedPhrase = () => {
    return seedPhrase;
  }

  const storePhrase = (mnemonic) => {
    const { encryptedData, nonce } = encryptData(mnemonic.toString());
    localStorage.setItem("seedPhrase", JSON.stringify({ encryptedData, nonce }));
  }

  const loadPhrase = () => {
    const data = localStorage.getItem("seedPhrase");
    if (data) {
      const { encryptedData, nonce } = JSON.parse(data);
      const decryptedData = decryptData({ encryptedData, nonce });
      setSeedPhrase(decryptedData);
    }
  }

  const getStoredPhrase = () => {
    const data = localStorage.getItem("seedPhrase");
    if (data) {
      const { encryptedData, nonce } = JSON.parse(data);
      const decryptedData = decryptData({ encryptedData, nonce });
      return decryptedData;
    }
    return "";
  }

  return {
    generatePhrase,
    validatePhrase,
    clearSeedPhrase,
    getSeedPhrase,
    storePhrase,
    loadPhrase,
    getStoredPhrase
  }
}