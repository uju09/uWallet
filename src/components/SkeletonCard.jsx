export const SkeletonCard = ({
  className = '',
}) => {
  return (
    <div className={`bg-[#142018] rounded-[32px] p-6 border border-white/5 space-y-6 animate-pulse ${className}`}>
      <div className="flex justify-between items-start">
        <div className="space-y-3">
          <div className="h-3 w-24 bg-[#1A2920] rounded-full" />
          <div className="h-8 w-48 bg-[#1A2920] rounded-lg" />
        </div>
        <div className="h-8 w-16 bg-[#1A2920] rounded-full" />
      </div>

      <div className="flex items-end gap-2 h-24">
        <div className="flex-1 bg-[#1A2920] rounded-t-lg h-full opacity-20" />
        <div className="flex-1 bg-[#1A2920] rounded-t-lg h-3/4 opacity-40" />
        <div className="flex-1 bg-[#1A2920] rounded-t-lg h-full opacity-60" />
        <div className="flex-1 bg-[#1A2920] rounded-t-lg h-1/2 opacity-30" />
      </div>

      <div className="h-14 w-full bg-[#1A2920] rounded-2xl" />
    </div>
  );
};

export const SkeletonWalletCard = ({
  className = '',
}) => {
  return (
    <div className={`bg-[#0C120F] rounded-[32px] p-6 border border-white/5 animate-pulse ${className}`}>
      <div className="flex justify-between items-center mb-8 px-1">
        <div className="h-7 w-24 bg-[#1A2920] rounded-lg" />
        <div className="h-8 w-8 bg-[#1A2920] rounded-xl" />
      </div>

      <div className="bg-[#142018] rounded-[24px] p-6 space-y-6">
        <div className="space-y-2">
          <div className="h-3 w-20 bg-[#1A2920] rounded-full" />
          <div className="h-5 w-full bg-[#1A2920] rounded-lg" />
        </div>
        <div className="space-y-2">
          <div className="h-3 w-20 bg-[#1A2920] rounded-full" />
          <div className="h-5 w-full bg-[#1A2920] rounded-lg" />
        </div>
      </div>
    </div>
  );
};

export const SkeletonGrid = ({
  count = 3,
  CardComponent = SkeletonWalletCard,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <CardComponent key={index} />
      ))}
    </div>
  );
};

export default SkeletonCard;
