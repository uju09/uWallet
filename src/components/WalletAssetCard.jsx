import { TrendingUp, Wallet, Copy, Eye } from 'lucide-react';

const WalletAssetCard = () => {
  const chartData = [
    { height: '30%', value: '$1.2k', isHero: false, isOutlined: false },
    { height: '55%', value: '$3.4k', isHero: false, isOutlined: false },
    { height: '90%', value: '$8.2k', isHero: true, isOutlined: false },
    { height: '45%', value: 'Proj.', isHero: false, isOutlined: true },
    { height: '70%', value: '$5.1k', isHero: false, isOutlined: false },
  ];

  return (
    <div className="bg-[#142018] rounded-[32px] p-1 overflow-hidden relative group max-w-sm mx-auto shadow-2xl">
      {/* Inner Card Container */}
      <div className="bg-[#1A2920] rounded-[28px] p-6 relative z-10 h-full border border-white/5">

        {/* Network Branding Header */}
        <div className="flex items-center gap-2 mb-6">
          {/* Solana Badge (Active) */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/40 rounded-full border border-[#D4FF00]/30 shadow-lg shadow-[#D4FF00]/5">
            <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white">Solana</span>
          </div>

          {/* Ethereum Badge (Inactive/Switch) */}
          <div className="flex items-center gap-2 px-3 py-1.5 bg-black/20 rounded-full border border-white/5 opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
            <div className="w-3 h-3 rounded-full bg-[#627EEA]"></div>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white">Ethereum</span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-[#8FA396] text-sm font-medium mb-1">Total Balance</p>
            <h3 className="text-4xl font-bold text-white tracking-tight">$25,526.30</h3>
          </div>
          <div className="bg-[#D4FF00] text-black px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            +12.5%
          </div>
        </div>

        {/* Weekly Activity Label */}
        <div className="mb-2 flex justify-between items-end">
          <span className="text-[10px] uppercase font-bold text-[#8FA396] tracking-widest">Weekly Activity</span>
        </div>

        {/* Visual Chart Bars */}
        <div className="flex items-end justify-between h-32 mb-8 gap-3">
          {chartData.map((bar, index) => (
            <div
              key={index}
              className={`w-full rounded-t-2xl relative group transition-colors ${bar.isHero
                  ? 'bg-[#D4FF00] shadow-[0_0_20px_rgba(212,255,0,0.2)]'
                  : bar.isOutlined
                    ? 'border-[2px] border-[#D4FF00] bg-transparent hover:bg-[#D4FF00]/10'
                    : 'bg-[#253d2c] hover:bg-[#2A4030]'
                }`}
              style={{ height: bar.height }}
            >
              <div
                className={`absolute -top-8 left-1/2 -translate-x-1/2 text-[10px] font-bold px-2 py-1 rounded ${bar.isHero
                    ? 'bg-[#D4FF00] text-black'
                    : 'bg-white text-black opacity-0 group-hover:opacity-100 transition-opacity'
                  }`}
              >
                {bar.value}
              </div>
            </div>
          ))}
        </div>

        {/* Public Key Section */}
        <div className="bg-[#0C120F] rounded-2xl p-4 flex items-center justify-between border border-white/5 group-hover:border-[#D4FF00]/30 transition-colors cursor-pointer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1A2920] flex items-center justify-center text-[#D4FF00]">
              <Wallet className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-[#8FA396] uppercase font-bold">Public Key</span>
              <span className="font-mono text-xs text-white">8x2j...9Kmz</span>
            </div>
          </div>
          <Copy className="w-4 h-4 text-[#8FA396] hover:text-white transition-colors" />
        </div>

        {/* Private Key Action */}
        <button className="w-full mt-2 bg-[#0C120F] border border-white/5 hover:border-red-500/30 hover:bg-red-500/10 text-[#8FA396] hover:text-red-400 py-3 rounded-2xl flex items-center justify-center gap-2 transition-all text-[10px] font-bold uppercase tracking-wider">
          <Eye className="w-3 h-3" />
          Reveal Private Key
        </button>
      </div>

      {/* Glow Effect Decoration */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#D4FF00] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
    </div>
  );
};

export default WalletAssetCard;
