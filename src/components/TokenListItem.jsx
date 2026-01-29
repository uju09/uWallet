const TokenListItem = ({
  name = 'Solana',
  symbol = 'SOL',
  amount = '420.69',
  usdValue = '$25,526.30',
  change = '+5.2%',
  gradientFrom = '#9945FF',
  gradientTo = '#14F195',
}) => {
  return (
    <div className="bg-[#142018] rounded-[24px] p-4 flex items-center justify-between hover:bg-[#1A2920] transition-colors cursor-pointer border border-transparent hover:border-white/5 group max-w-sm mx-auto">
      <div className="flex items-center gap-4">
        {/* Token Icon */}
        <div className="w-12 h-12 rounded-full bg-black border border-white/10 flex items-center justify-center relative">
          <div
            className="w-8 h-8 rounded-full"
            style={{ background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}
          ></div>
          {/* Chain Badge */}
          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0C120F] rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg leading-tight">{name}</h4>
          <div className="flex items-center gap-2">
            <span className="text-xs text-[#8FA396]">{symbol}</span>
            <span className="text-[10px] text-[#D4FF00] bg-[#D4FF00]/10 px-1.5 rounded font-bold">{change}</span>
          </div>
        </div>
      </div>
      <div className="text-right">
        <div className="font-mono font-bold text-white text-lg">{amount}</div>
        <div className="text-xs text-[#8FA396] font-medium">{usdValue}</div>
      </div>
    </div>
  );
};

export default TokenListItem;
