import React, { useState } from 'react';
import { Box, Bell, Settings, LogOut, LayoutGrid, List } from 'lucide-react';
import {
  WelcomeHeader,
  BrandIdentity,
  PrimaryActionButton,
  ClearWallet,
  WalletGrid,
  WalletCard,
  SecretPhraseCard,
} from '../components';
import { useSeedPhrase } from '../hooks/useSeedPhrase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Wallet = () => {

  const [username, setUsername] = useState('');
  const { getStoredPhrase } = useSeedPhrase();
  const navigate = useNavigate();
  const [phrase, setPhrase] = useState('');

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

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
  }, [navigate, getStoredPhrase]);

  return (
    <div className="min-h-screen bg-[#0C120F] text-white px-5 sm:px-4 md:px-10 lg:px-20 py-4 sm:py-8">
      <BrandIdentity />
      <SecretPhraseCard secretPhrase={phrase.split(' ')} />
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between my-6 sm:my-8 gap-6">
        <WelcomeHeader userName={username} className='w-full lg:w-sm' />

        <div className="flex flex-wrap gap-0 sm:gap-4 items-center justify-center lg:justify-end w-full sm:w-auto">
          <PrimaryActionButton label="Add New Wallet" className="w-[300px] sm:w-[250px]" />
          <ClearWallet label="Clear Wallet" className="w-[300px] sm:w-[230px]" />
        </div>

      </div>
      <WalletGrid />
    </div>
  );
};

export default Wallet;