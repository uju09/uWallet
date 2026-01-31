import { Wallet, X, PlusCircle, Download } from 'lucide-react';

const EmptyWalletState = ({
  onCreateNew,
  onImportExisting,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center text-center p-12 border-2 border-dashed border-white/10 rounded-[32px] bg-[#0C120F] relative overflow-hidden group hover:border-[#D4FF00]/20 transition-colors ${className}`}
    >
      {/* BG Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4FF00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Icon with badge */}
        <div className="w-24 h-24 bg-[#1A2920] rounded-[2rem] flex items-center justify-center mb-6 text-[#8FA396] mx-auto rotate-3 group-hover:rotate-6 transition-transform duration-500 relative">
          <Wallet className="w-10 h-10 opacity-50" />
          <div className="absolute -bottom-2 -right-2 bg-[#0C120F] rounded-full p-1">
            <div className="bg-red-500 w-6 h-6 rounded-full flex items-center justify-center text-white">
              <X className="w-4 h-4" />
            </div>
          </div>
        </div>

        {/* Text */}
        <h3 className="text-2xl font-bold text-white mb-2">No Wallet Found</h3>
        <p className="text-[#8FA396] max-w-xs mx-auto mb-8 leading-relaxed">
          It looks like you haven't created a wallet yet. Create a new one to get started.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
          <button
            onClick={onCreateNew}
            className="bg-[#D4FF00] text-black px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#bce600] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
          >
            <PlusCircle className="w-4 h-4" />
            Create New Wallet
          </button>
          {onImportExisting && (
            <button
              onClick={onImportExisting}
              className="bg-[#1A2920] text-white px-6 py-3.5 rounded-xl font-bold text-sm hover:bg-[#253d2c] border border-white/5 hover:border-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Import Existing
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default EmptyWalletState;
