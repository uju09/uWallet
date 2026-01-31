import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from 'lucide-react';

const PageTransitionContext = createContext();

export const usePageTransition = () => {
  const context = useContext(PageTransitionContext);
  if (!context) {
    throw new Error('usePageTransition must be used within PageTransitionProvider');
  }
  return context;
};

const PageLoader = ({ isVisible, message }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-[#050807] z-[9999] flex flex-col items-center justify-center"
      style={{
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 300ms ease-out',
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="w-20 h-20 border-[3px] border-[#1A2920] border-t-[#D4FF00] border-r-[#D4FF00] rounded-full animate-spin" />
          <div className="absolute inset-0 flex items-center justify-center">
            <Box className="w-8 h-8 text-[#D4FF00] fill-[#D4FF00]/10" />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-xl font-extrabold text-white tracking-tight">uWallet</h1>
          <p className="text-[#D4FF00] text-[10px] font-bold tracking-[0.2em] uppercase animate-pulse mt-1">
            {message}
          </p>
        </div>
      </div>
    </div>
  );
};

export const PageTransitionProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Loading...');
  const navigate = useNavigate();

  const navigateWithTransition = useCallback((to, message = 'Loading...') => {
    setLoadingMessage(message);
    setIsLoading(true);

    // Show loader for at least 800ms for visual effect
    setTimeout(() => {
      navigate(to);
      // Hide loader after navigation
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 800);
  }, [navigate]);

  return (
    <PageTransitionContext.Provider value={{ navigateWithTransition, isLoading }}>
      <PageLoader isVisible={isLoading} message={loadingMessage} />
      <div
        style={{
          opacity: isLoading ? 0 : 1,
          transition: 'opacity 300ms ease-out',
        }}
      >
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
};

export default PageTransitionProvider;
