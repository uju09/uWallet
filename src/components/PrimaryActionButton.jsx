import { Plus } from 'lucide-react';

const PrimaryActionButton = ({ label = 'Add New Wallet', className = '' }) => {
  return (
    <div className={`mx-auto py-4 ${className}`}>
      <button className="group relative w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold py-5 rounded-[24px] transition-all flex items-center justify-between px-6 overflow-hidden shadow-lg shadow-[#D4FF00]/20">
        <span className="z-10 text-lg">{label}</span>
        <div className="w-10 h-10 bg-black/10 rounded-full flex items-center justify-center z-10 group-hover:translate-x-1 transition-transform">
          <Plus className="w-6 h-6" />
        </div>
        {/* Button Texture */}
        <div className="absolute inset-0 striped-pattern opacity-10 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );
};

export default PrimaryActionButton;
