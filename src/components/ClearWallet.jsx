import { Trash2 } from 'lucide-react';

const ClearWallet = ({ label = 'Clear Wallet', className = '', state }) => {
  const handleClearWallet = () => {
    localStorage.removeItem('wallets');
    state();
    // window.location.reload();
  };
  return (
    <div className={`py-4 ${className}`}>
      <button
        onClick={handleClearWallet}
        className="group relative w-full bg-[#1A2920] hover:bg-red-500/20 text-white hover:text-red-400 border border-white/5 hover:border-red-500/30 font-bold py-5 rounded-[24px] transition-all flex items-center justify-between px-6 overflow-hidden"
      >
        <span className="z-10 text-lg">{label}</span>
        <div className="w-10 h-10 bg-white/5 group-hover:bg-red-500/20 rounded-full flex items-center justify-center z-10 group-hover:translate-x-1 transition-all">
          <Trash2 className="w-5 h-5" />
        </div>
      </button>
    </div>
  );
};

export default ClearWallet;

