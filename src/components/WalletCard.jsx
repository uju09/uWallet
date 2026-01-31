import { useState } from 'react';
import { Trash2, Copy, Eye, EyeOff } from 'lucide-react';
import { decryptData } from '../storage/secureStorage';

const WalletCard = ({
  walletName = 'Wallet 1',
  publicKey = '6jxuteQ8cyiouhEWJZXKVMqtiaqcLGCsZsLiZed3jSLE',
  privateKey = '',
  onDelete,
  onCopyPublicKey,
  onRevealPrivateKey,
  className = '',
}) => {
  const [showPrivateKey, setShowPrivateKey] = useState(false);
  const [copied, setCopied] = useState(false);

  // Truncate public key for display
  const truncatedPublicKey = publicKey.length > 24
    ? `${publicKey.slice(0, 24)}...`
    : publicKey;

  // Handle copy to clipboard
  const handleCopyPublicKey = async () => {
    try {
      await navigator.clipboard.writeText(publicKey);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopyPublicKey?.();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  // Handle reveal private key toggle
  const handleTogglePrivateKey = () => {
    setShowPrivateKey(prev => !prev);
    if (!showPrivateKey) {
      onRevealPrivateKey?.();
    }
  };

  // Handle delete wallet
  const handleDelete = () => {
    onDelete?.();
  };

  // Generate masked private key display
  const maskedPrivateKey = '••••••••••••••••••••••••••••••••••••••••••••••••••';

  return (
    <div
      className={`bg-[#0C120F] rounded-[32px] p-6 border border-white/5 shadow-2xl relative group hover:border-white/10 transition-colors ${className}`}
    >
      {/* Card Header */}
      <div className="flex justify-between items-center mb-8 px-1">
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {walletName}
        </h3>
        <button
          onClick={handleDelete}
          className="text-red-500/60 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded-xl"
          aria-label="Delete wallet"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>

      {/* Details Container */}
      <div className="bg-[#142018] rounded-[24px] p-6 space-y-6">
        {/* Public Key Field */}
        <div className="space-y-2">
          <label className="text-white font-bold text-sm block">
            Public Key
          </label>
          <div className="flex items-center justify-between gap-4">
            <p className="text-[#8FA396] text-sm font-medium font-mono truncate select-all">
              {truncatedPublicKey}
            </p>
            <button
              onClick={handleCopyPublicKey}
              className="text-[#8FA396] hover:text-white transition-colors shrink-0 p-1 hover:bg-white/5 rounded-lg"
              aria-label={copied ? 'Copied!' : 'Copy public key'}
            >
              <Copy className={`w-4 h-4 ${copied ? 'text-[#D4FF00]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Private Key Field */}
        <div className="space-y-2">
          <label className="text-white font-bold text-sm block">
            Private Key
          </label>
          <div className="flex justify-between items-center gap-4">
            <div className="flex gap-0.5 overflow-hidden text-[#8FA396]/50 font-mono text-sm">
              {showPrivateKey ? (() => {
                try {
                  if (typeof privateKey === 'string') return privateKey;
                  if (privateKey?.encryptedData && privateKey?.nonce) {
                    return decryptData(privateKey);
                  }
                  return "Invalid Key Format";
                } catch (e) {
                  return "Decryption Error";
                }
              })() : maskedPrivateKey}
            </div>
            <button
              onClick={handleTogglePrivateKey}
              className="text-[#8FA396] hover:text-white transition-colors shrink-0 p-1 hover:bg-white/5 rounded-lg"
              aria-label={showPrivateKey ? 'Hide private key' : 'Reveal private key'}
            >
              {showPrivateKey ? (
                <EyeOff className="w-4 h-4" />
              ) : (
                <Eye className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletCard;

export const WalletGrid = ({
  wallets = [],
  onDelete,
  onCopyPublicKey,
  onRevealPrivateKey,
  className = '',
}) => {
  // const displayWallets = wallets.length > 0 ? wallets : [
  //   { id: 1, walletName: 'Wallet 1', publicKey: '6jxuteQ8cyiouhEWJZXKVMqtiaqcLGCsZsLiZed3jSLE', privateKey: '' },
  //   { id: 2, walletName: 'Wallet 2', publicKey: '8kxvufR9dzjpviIFXKWLNrujbrLHDtAtMtLjAfe4kTMF', privateKey: '' },
  //   { id: 3, walletName: 'Wallet 3', publicKey: '9lywtgS0eakqwjJGYMXOsvkldscIEuMuNkBgf5lUNOG', privateKey: '' },
  // ];

  const displayWallets = wallets || [];

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {displayWallets.length > 0 ? displayWallets.map((wallet, index) => (
        <WalletCard
          key={wallet.id || index}
          walletName={wallet.walletName || `Wallet ${index + 1}`}
          publicKey={wallet.publicKey}
          privateKey={wallet.encryptedPrivateKey}
          onDelete={() => onDelete?.(wallet.id || index)}
          onCopyPublicKey={() => onCopyPublicKey?.(wallet.publicKey)}
          onRevealPrivateKey={() => onRevealPrivateKey?.(wallet.id || index)}
        />
      )) : <div>No wallets found</div>}
    </div>
  );
};

