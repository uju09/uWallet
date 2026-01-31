import React, { useState, useEffect } from 'react';
import { Box, Bell, Settings, LogOut, LayoutGrid, List } from 'lucide-react';
import {
  WelcomeHeader,
  BrandIdentity,
  AddWalletButton,
  ClearWallet,
  WalletGrid,
  WalletCard,
  SecretPhraseCard,
} from '../components';
import { useSeedPhrase } from '../hooks/useSeedPhrase';
import { useWallet } from '../hooks/useWallet';
import { useNavigate } from 'react-router-dom';

const Wallet = () => {

  const [username, setUsername] = useState('');
  const [wallets, setWallets] = useState([]);
  const [walletId, setWalletId] = useState(0);
  const { getStoredPhrase } = useSeedPhrase();
  const navigate = useNavigate();
  const [phrase, setPhrase] = useState('');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const seed = getStoredPhrase();
  const { isWalletGenerated, publicKey, encryptedPrivateKey } = useWallet(seed);

  if (isWalletGenerated) {
    const newWallet = {
      walletId,
      publicKey,
      encryptedPrivateKey,
    };
    setWallets((prev) => ([...prev, newWallet]));
    localStorage.setItem('wallets', JSON.stringify([...prev, newWallet]));
    localStorage.setItem('walletId', walletId + 1);
  }



  useEffect(() => {
    const username = localStorage.getItem('name');

    if (!username) {
      navigate('/login');
      return;
    }

    setUsername(username);
    const storedPhrase = getStoredPhrase();

    if (!storedPhrase) {
      navigate('/seed-phrase');
      return;
    }
    setPhrase(storedPhrase);
  }, []);


  return (
    <div className="min-h-screen bg-[#0C120F] text-white px-5 sm:px-4 md:px-10 lg:px-20 py-4 sm:py-8">
      <BrandIdentity />
      <SecretPhraseCard secretPhrase={phrase.split(' ')} />
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between my-6 sm:my-8 gap-6">
        <WelcomeHeader userName={username} className='w-full lg:w-sm' />

        <div className="flex flex-wrap gap-0 sm:gap-4 items-center justify-center lg:justify-end w-full sm:w-auto">
          <AddWalletButton label="Add New Wallet" className="w-[300px] sm:w-[250px]" onClick={() => setWalletId(prev => prev + 1)} />
          <ClearWallet label="Clear Wallet" className="w-[300px] sm:w-[230px]" />
        </div>

      </div>
      <WalletGrid wallets={JSON.parse(localStorage.getItem('wallets'))} />
    </div>
  );
};

export default Wallet;