const SolanaNetworkCard = ({ className = '' }) => {
  return (
    <div className={`bg-[#0C120F] rounded-[16px] sm:rounded-[24px] p-[3px] sm:p-[4px] relative overflow-hidden group shadow-2xl ${className}`}>
      {/* Animated Gradient Border */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#9945FF] via-[#14F195] to-[#9945FF] opacity-50 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          backgroundSize: '200% 200%',
          animation: 'gradientXY 3s ease infinite',
        }}
      />

      {/* Inner Card Content */}
      <div className="relative bg-[#0C120F] rounded-[14px] sm:rounded-[20px] p-3 sm:p-5 flex items-center justify-between overflow-hidden gap-3">
        {/* Background Decoration */}
        <div className="absolute right-[-20px] top-[-20px] w-32 h-32 bg-[#9945FF] opacity-10 blur-[50px] rounded-full pointer-events-none" />

        <div className="flex items-center gap-2 sm:gap-4 relative z-10">
          {/* Solana Icon */}
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl sm:rounded-2xl border border-white/10 flex items-center justify-center shadow-lg shrink-0">
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 sm:w-7 sm:h-7">
              <path
                d="M4 18h11.9l2.1-2.1H6.1L4 18zM6.1 8.1h11.9l2.1-2.1H8.2L6.1 8.1zM4 12h16l-2.1 2.1H2L4 12z"
                fill="url(#sol-identity-grad)"
              />
              <defs>
                <linearGradient id="sol-identity-grad" x1="2" y1="6" x2="22" y2="18" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#9945FF" />
                  <stop offset="1" stopColor="#14F195" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="min-w-0">
            <h3 className="text-white font-bold text-sm sm:text-lg leading-tight">Solana</h3>
            <div className="flex items-center gap-1.5 sm:gap-2 mt-0.5 sm:mt-1">
              {/* Pulsing Active Dot */}
              <span className="relative flex h-1.5 w-1.5 sm:h-2 sm:w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 sm:h-2 sm:w-2 bg-[#14F195]" />
              </span>
              <span className="text-[#8FA396] text-[10px] sm:text-xs font-mono uppercase tracking-wider sm:tracking-widest truncate">Mainnet</span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="flex flex-col items-end gap-0.5 sm:gap-1 relative z-10 shrink-0">
          <span className="text-[#14F195] text-[8px] sm:text-[10px] font-bold bg-[#14F195]/10 px-2 sm:px-3 py-1 sm:py-1.5 rounded-md sm:rounded-lg border border-[#14F195]/20">
            Active
          </span>
          <span className="text-[#8FA396] text-[8px] sm:text-[10px] font-mono">
            v1.18
          </span>
        </div>
      </div>
    </div>
  );
};

export default SolanaNetworkCard;

