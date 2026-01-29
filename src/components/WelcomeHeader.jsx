import { Bell } from 'lucide-react';

const WelcomeHeader = ({
  userName = 'Alex Doe',
  avatarSeed = 'Felix',
  showNotification = true,
  className = '',
  onNotificationClick
}) => {
  // Get greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 17) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <div className={`flex items-center justify-between p-4 bg-[#0C120F] rounded-[24px] w-sm border border-white/5 ${className}`}>
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-[#1A2920] p-0.5 border border-[#D4FF00]/30">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${avatarSeed}`}
              className="w-full h-full rounded-full bg-[#0C120F]"
              alt="User Avatar"
            />
          </div>
          {/* Online Indicator */}
          <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4FF00] border-2 border-[#0C120F] rounded-full"></div>
        </div>

        {/* Greeting */}
        <div>
          <p className="text-[10px] text-[#8FA396] uppercase font-bold tracking-wider mb-0.5">
            {getGreeting()}
          </p>
          <h3 className="text-lg font-bold text-white leading-none">{userName}</h3>
        </div>
      </div>

      {/* Notification Button */}
      <button
        onClick={onNotificationClick}
        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 hover:border-[#D4FF00]/50 transition-all relative"
      >
        <Bell className="w-5 h-5" />
        {showNotification && (
          <span className="absolute top-2 right-2 w-2 h-2 bg-[#D4FF00] rounded-full animate-pulse"></span>
        )}
      </button>
    </div>
  );
};

export default WelcomeHeader;
