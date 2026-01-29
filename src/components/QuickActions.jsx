import { ArrowUpRight, ArrowDownLeft, RefreshCw, Scan } from 'lucide-react';

const QuickActionButton = ({ icon: Icon, label, isPrimary = false }) => {
  return (
    <button className="flex flex-col items-center gap-2 group">
      <div
        className={`w-14 h-14 rounded-[20px] flex items-center justify-center transition-all ${isPrimary
            ? 'bg-[#D4FF00] text-black shadow-lg shadow-[#D4FF00]/10 group-hover:scale-105'
            : 'bg-[#1A2920] text-white border border-white/5 group-hover:bg-[#1F3325] group-hover:border-[#D4FF00]/30'
          }`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <span className={`text-xs font-bold ${isPrimary ? 'text-white' : 'text-[#8FA396] group-hover:text-white'}`}>
        {label}
      </span>
    </button>
  );
};

const QuickActions = () => {
  return (
    <div className="max-w-sm mx-auto flex justify-between gap-4 px-4">
      <QuickActionButton icon={ArrowUpRight} label="Send" isPrimary />
      <QuickActionButton icon={ArrowDownLeft} label="Receive" />
      <QuickActionButton icon={RefreshCw} label="Swap" />
      <QuickActionButton icon={Scan} label="Scan" />
    </div>
  );
};

export { QuickActionButton, QuickActions };
export default QuickActions;
