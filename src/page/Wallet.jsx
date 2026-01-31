import React, { useState, useEffect } from 'react';
import { Box, Bell, Settings, LogOut, LayoutGrid, List } from 'lucide-react';
import {
  WelcomeHeader,
  BrandIdentity,
  AddWalletButton,
  ClearWallet,
  WalletGrid,
  SecretPhraseCard,
  EmptyWalletState,
  SkeletonWalletCard,
  SolanaNetworkCard,
  ConfirmDialog,
} from '../components';
import { useSeedPhrase } from '../hooks/useSeedPhrase';
import { useWallet } from '../hooks/useWallet';
import { usePageTransition } from '../context/PageTransitionContext';

const Wallet = () => {

  const [username, setUsername] = useState('');
  const [wallets, setWallets] = useState([]);
  const [walletId, setWalletId] = useState(-1);
  const [initialLoading, setInitialLoading] = useState(true);
  const [isClearing, setIsClearing] = useState(false);
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);
  const { getStoredPhrase } = useSeedPhrase();
  const { navigateWithTransition } = usePageTransition();
  const [phrase, setPhrase] = useState('');
  const { generateWallet, loading } = useWallet();

  const handleLogout = () => {
    localStorage.clear();
    navigateWithTransition('/', 'Logging out...');
  };

  const handleLogoutClick = () => {
    setShowLogoutConfirm(true);
  };

  useEffect(() => {
    const handleWalletGeneration = async () => {
      console.log(walletId);

      if (walletId >= 0) {
        const result = await generateWallet(walletId);
        if (result) {
          const newWallet = {
            walletId,
            publicKey: result.publicKey,
            encryptedPrivateKey: result.encryptedPrivateKey,
          };

          setWallets((prev) => {
            const updated = [...prev, newWallet];
            localStorage.setItem('wallets', JSON.stringify(updated));
            return updated;
          });
        }
      }
    };

    handleWalletGeneration();
  }, [walletId]);


  const handleDeleteWallet = (walletIndex) => {
    setWallets((prev) => {
      const updated = prev.filter((_, index) => index !== walletIndex);
      localStorage.setItem('wallets', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearWallets = () => {
    setIsClearing(true);
    setTimeout(() => {
      setWallets([]);
      setWalletId(-1);
      localStorage.setItem('wallets', JSON.stringify([]));
      setIsClearing(false);
    }, 500);
  };

  useEffect(() => {
    const username = localStorage.getItem('name');

    if (!username) {
      navigateWithTransition('/login', 'Redirecting...');
      return;
    }

    setUsername(username);
    const storedPhrase = getStoredPhrase();

    if (!storedPhrase) {
      navigateWithTransition('/seed-phrase', 'Redirecting...');
      return;
    }
    setPhrase(storedPhrase);

    const savedWallets = JSON.parse(localStorage.getItem('wallets') || "[]");
    setWallets(savedWallets);

    // Show skeleton for 1 second before revealing wallets
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);




  return (
    <div className="min-h-screen bg-[#0C120F] text-white px-2 sm:px-4 md:px-10 lg:px-20 py-4 sm:py-8 w-[100vw]">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
        <BrandIdentity />
        <SolanaNetworkCard className="w-[270px] sm:w-[350px]" />
      </div>
      <SecretPhraseCard secretPhrase={phrase.split(' ')} />
      <div className="flex flex-col lg:flex-row items-start lg:items-center w-full justify-between my-6 sm:my-8 gap-6">
        <WelcomeHeader userName={username} className='w-[350px] lg:w-[350px] sm:w-[300px] self-center sm:self-start' onLogoutClick={handleLogoutClick} />

        <div className="flex flex-wrap gap-0 sm:gap-4 items-center justify-center lg:justify-end w-full sm:w-auto">
          <AddWalletButton label="Add New Wallet" className="w-[300px] sm:w-[250px]" onClick={() => setWalletId(prev => prev + 1)} />
          <ClearWallet label="Clear Wallet" className="w-[300px] sm:w-[230px]" state={handleClearWallets} />
        </div>

      </div>
      {initialLoading && wallets.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkeletonWalletCard />
        </div>
      ) : wallets.length > 0 ? (
        <div className={`transition-all duration-500 ${isClearing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <WalletGrid wallets={wallets} onDelete={handleDeleteWallet} />
        </div>
      ) : (
        <div className="animate-fade-in w-auto">
          <EmptyWalletState onCreateNew={() => setWalletId(prev => prev + 1)} />
        </div>
      )}

      {/* Logout Confirmation Dialog */}
      <ConfirmDialog
        isOpen={showLogoutConfirm}
        onConfirm={handleLogout}
        onCancel={() => setShowLogoutConfirm(false)}
        title="Log Out"
        message="Are you sure you want to log out? You'll need to enter your credentials again to access your wallets."
        confirmText="Log Out"
        cancelText="Cancel"
        variant="danger"
      />

    </div>

  );
};

export default Wallet;