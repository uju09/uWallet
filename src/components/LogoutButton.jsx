import { LogOut, Power } from 'lucide-react';

export const LogoutButton = ({
  onClick,
  variant = 'sidebar',
  className = '',
}) => {
  if (variant === 'icon') {
    return (
      <button
        onClick={onClick}
        className={`w-12 h-12 rounded-full bg-[#1A2920] text-red-400 hover:bg-red-500/10 hover:text-red-500 flex items-center justify-center transition-all duration-300 border border-transparent hover:border-red-500/20 ${className}`}
        title="Disconnect Wallet"
      >
        <Power className="w-5 h-5" />
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#1A2920] text-red-400 hover:bg-red-500/10 hover:text-red-500 border border-transparent hover:border-red-500/20 transition-all duration-300 font-bold text-sm w-full group ${className}`}
    >
      <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
      Log Out
    </button>
  );
};

export default LogoutButton;
