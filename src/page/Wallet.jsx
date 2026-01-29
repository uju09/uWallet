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
  ClearWallet
} from '../components';

const Wallet = () => {


  return (
    <div className="min-h-screen bg-[#0C120F] text-white px-10">
      <BrandIdentity />
      <div className="flex items-center w-full justify-between px-20">
        {/* LEFT — 30% */}
        <WelcomeHeader userName="Alex Doe" />

        <div className="flex gap-8">
          <PrimaryActionButton label="Add New Wallet" className="w-[250px]" />
          <ClearWallet label="Clear Wallet" className="w-[230px]" />
        </div>

      </div>
    </div>
  );
};

export default Wallet;