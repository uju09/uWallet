import { Box } from 'lucide-react';

export const Loader = ({
  message = 'Loading...',
  className = '',
}) => {
  return (
    <div className={`bg-[#0C120F] rounded-[32px] flex flex-col items-center justify-center border border-white/5 relative overflow-hidden min-h-[300px] ${className}`}>
      <div className="relative">
        <div className="w-16 h-16 border-4 border-[#1A2920] border-t-[#D4FF00] rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Box className="w-6 h-6 text-white fill-white/20" />
        </div>
      </div>
      <p className="text-[#8FA396] text-sm font-medium mt-6 animate-pulse">{message}</p>
    </div>
  );
};

export const FullScreenLoader = ({
  message = 'Syncing with Blockchain...',
}) => {
  return (
    <div className="fixed inset-0 bg-[#0C120F]/95 backdrop-blur-sm flex flex-col items-center justify-center z-50">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-[#1A2920] border-t-[#D4FF00] rounded-full animate-spin" />
        <div className="absolute inset-0 flex items-center justify-center">
          <Box className="w-8 h-8 text-white fill-white/20" />
        </div>
      </div>
      <p className="text-[#8FA396] text-sm font-medium mt-8 animate-pulse">{message}</p>
    </div>
  );
};

export default Loader;
