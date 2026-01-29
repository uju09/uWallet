import React, { useState } from 'react';
import { Lock, EyeOff, Eye } from 'lucide-react';

const LoginCard = ({ onSubmit, onForgotPassword }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(password);
    }
  };

  return (
    <div className="max-w-sm w-full bg-[#142018] rounded-[32px] p-8 border border-white/5 shadow-2xl relative overflow-hidden text-center">
      {/* Background Decoration */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-48 h-48 bg-[#D4FF00] opacity-5 blur-[60px] rounded-full pointer-events-none"></div>

      {/* Lock Icon */}
      <div className="w-16 h-16 bg-[#1A2920] rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/5 text-[#D4FF00]">
        <Lock className="w-8 h-8" />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-white mb-2">Welcome Back</h2>
      <p className="text-[#8FA396] text-sm mb-8">Enter your password to unlock</p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative group text-left">
          <label className="text-[10px] uppercase font-bold text-[#8FA396] ml-3 mb-1 block">
            Password
          </label>
          <input
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full bg-[#1A2920] text-white border border-transparent focus:border-[#D4FF00]/50 rounded-xl py-3.5 px-4 text-sm font-medium placeholder-white/30 focus:outline-none transition-all"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-8 text-[#8FA396] hover:text-white transition-colors"
          >
            {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-[#D4FF00]/10 flex items-center justify-center gap-2"
        >
          Unlock Wallet
        </button>

        <button
          type="button"
          onClick={onForgotPassword}
          className="text-xs text-[#8FA396] hover:text-white font-medium mt-2 transition-colors"
        >
          Forgot Password?
        </button>
      </form>
    </div>
  );
};

export default LoginCard;
