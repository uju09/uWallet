import { Box } from 'lucide-react';

const BrandIdentity = () => {
  return (
    <div className="p-12 rounded-[32px] flex items-center justify-center gap-4 max-w-sm mx-auto shadow-2xl">
      {/* Icon (Cube Style) */}
      <div className="relative group">
        <Box className="w-12 h-12 text-[#D4FF00] stroke-[2.5] transition-colors" />
        {/* Subtle Glow */}
        <div className="absolute inset-0 bg-white/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </div>

      {/* Brand Name */}
      <h1 className="text-5xl font-extrabold text-white tracking-tighter">uWallet</h1>

      {/* Version Badge */}
      <div className="px-3 py-1 bg-[#222] rounded-full border border-[#444] text-white text-sm font-bold font-mono tracking-tight group hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors cursor-default">
        v1.0
      </div>
    </div>
  );
};

export default BrandIdentity;
