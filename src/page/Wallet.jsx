import React from 'react';
import { Box, Bell, Settings } from 'lucide-react';
import {
  WalletAssetCard,
  QuickActions,
  TokenListItem,
  TransactionItem,
  NftCard,
  WelcomeHeader,
  BrandIdentity,
  SeedPhraseCard,
  PrimaryActionButton,
  ClearWallet,
  WalletCard,
  SecretPhraseCard,
} from '../components';

const Wallet = () => {

  const username = localStorage.getItem('name');

  return (
    <div className="min-h-screen bg-[#0C120F] text-white px-50">
      <BrandIdentity />
      <SecretPhraseCard secretPhrase={['ginger', 'tool', 'lounge', 'era', 'cheese', 'salt', 'alley', 'step', 'bean', 'wine', 'wife', 'month']} />
      <div className="flex items-center w-full justify-between my-4">
        {/* LEFT — 30% */}
        <WelcomeHeader userName={username} />

        <div className="flex gap-8">
          <PrimaryActionButton label="Add New Wallet" className="w-[250px]" />
          <ClearWallet label="Clear Wallet" className="w-[230px]" />
        </div>

      </div>
      <WalletCard />
    </div>
  );
};

export default Wallet;