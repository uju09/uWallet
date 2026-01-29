import { Image, ArrowRight } from 'lucide-react';

const NftCard = ({
  name = 'Mad Lads #420',
  chain = 'SOL',
  floorPrice = '180 SOL',
}) => {
  return (
    <div className="bg-[#142018] p-3 rounded-[24px] border border-white/5 hover:border-[#D4FF00]/50 transition-colors group cursor-pointer">
      {/* Image Placeholder */}
      <div className="aspect-square bg-[#1A2920] rounded-[16px] mb-3 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-[#8FA396] group-hover:scale-110 transition-transform duration-500">
          <Image className="w-8 h-8" />
        </div>
        {/* Chain Badge */}
        <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded-full text-[10px] font-bold text-white border border-white/10">
          {chain}
        </div>
      </div>
      <h4 className="font-bold text-white text-sm truncate">{name}</h4>
      <div className="flex justify-between items-end mt-1">
        <span className="text-[10px] text-[#8FA396]">Floor: {floorPrice}</span>
        <div className="w-6 h-6 rounded-full bg-[#D4FF00] flex items-center justify-center text-black opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </div>
  );
};

const NftGrid = () => {
  return (
    <div className="max-w-sm mx-auto grid grid-cols-2 gap-4">
      <NftCard name="Mad Lads #420" chain="SOL" floorPrice="180 SOL" />
    </div>
  );
};

export { NftCard, NftGrid };
export default NftGrid;
