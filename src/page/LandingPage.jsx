import { Box, ArrowRight, Smartphone, ArrowDownLeft, Github, ShieldCheck, CheckCircle, Zap, Shield, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate = useNavigate();

  const getStarted = () => {
    navigate('/login');
  }

  return (
    <div className="w-full bg-[#0C120F] border border-white/5 overflow-hidden relative">

      {/* Navbar */}
      <nav className="absolute top-0 w-full flex items-center justify-between px-8 py-6 z-50">
        <div className="flex items-center gap-2">
          <Box className="w-8 h-8 text-[#D4FF00] stroke-[2.5]" />
          <h1 className="text-2xl font-extrabold text-white tracking-tight">uWallet</h1>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8FA396]">
          <a href="#" className="hover:text-white transition-colors">Features</a>
          <a href="#" className="hover:text-white transition-colors">Security</a>
          <a href="#" className="hover:text-white transition-colors">Roadmap</a>
          <a href="#" className="hover:text-white transition-colors">FAQ</a>
        </div>

        <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-bold text-sm backdrop-blur-md transition-all border border-white/10">
          Launch App
        </button>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-24 px-6 md:px-12 flex flex-col items-center text-center">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#D4FF00]/5 via-[#D4FF00]/0 to-transparent pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4FF00] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/5 backdrop-blur-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#D4FF00]">uWallet v1.3 Available Now</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8 max-w-4xl mx-auto">
          The Only Crypto Wallet <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-green-500">You'll Ever Need</span>
        </h1>

        <p className="text-[#8FA396] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Experience the next generation of DeFi. Non-custodial, lightning fast, and built with advanced security for your peace of mind.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-20" onClick={getStarted}>
          <button className="bg-[#D4FF00] text-black px-8 py-4 md:w-[25vw] w-[300px] rounded-full font-bold text-lg hover:bg-[#bce600] transition-transform hover:scale-105 shadow-[0_10px_40px_rgba(212,255,0,0.2)] flex items-center justify-center gap-2">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* App Mockup Container */}
        <div className="relative w-full max-w-5xl mx-auto">
          {/* Phone Frame */}
          <div className="w-[300px] md:w-[350px] mx-auto bg-[#0C120F] rounded-[48px] border-[8px] border-[#1A2920] shadow-2xl relative z-10 overflow-hidden ring-1 ring-white/10">
            <div className="h-[600px] bg-[#0C120F] flex flex-col relative overflow-hidden">
              <div className="p-6 pt-10 space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Box className="w-6 h-6 text-[#D4FF00]" />
                    <span className="font-bold text-white">uWallet</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#222]"></div>
                </div>
                <div className="bg-[#142018] rounded-3xl p-6 border border-white/5">
                  <p className="text-[#8FA396] text-xs font-bold uppercase">Balance</p>
                  <h3 className="text-3xl font-bold text-white">$51,206</h3>
                </div>
                <div className="bg-gradient-to-br from-[#142018] to-black rounded-3xl p-6 border border-white/5">
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-8 h-8 bg-black rounded-lg"></div>
                    <span className="font-bold text-white">Solana</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">420.69 SOL</h3>
                </div>
                <div className="grid grid-cols-4 gap-2 pt-4">
                  <div className="bg-[#1A2920] rounded-xl h-12"></div>
                  <div className="bg-[#1A2920] rounded-xl h-12"></div>
                  <div className="bg-[#1A2920] rounded-xl h-12"></div>
                  <div className="bg-[#1A2920] rounded-xl h-12"></div>
                </div>
              </div>
              <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-[#0C120F] to-transparent"></div>
            </div>
          </div>

          {/* Floating Cards */}
          <div className="absolute top-20 -left-12 md:-left-24 bg-[#142018] p-4 rounded-2xl border border-white/5 shadow-2xl rotate-[-6deg] hidden md:block">
            <div className="flex items-center gap-4 w-64">
              <div className="w-10 h-10 rounded-full bg-[#D4FF00] flex items-center justify-center text-black">
                <ArrowDownLeft className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Received</p>
                <p className="text-xs text-[#8FA396]">From Coinbase</p>
              </div>
              <div className="ml-auto font-bold text-[#D4FF00]">+ $500</div>
            </div>
          </div>

          <div className="absolute bottom-40 -right-12 md:-right-24 bg-[#142018] p-4 rounded-2xl border border-white/5 shadow-2xl rotate-[6deg] hidden md:block">
            <div className="flex items-center gap-4 w-64">
              <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">Audited</p>
                <p className="text-xs text-[#8FA396]">100% Secure</p>
              </div>
              <div className="ml-auto text-[#D4FF00]">
                <CheckCircle className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24 px-6 md:px-12 bg-[#050807] border-t border-white/5">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Feature 1 */}
          <div className="bg-[#142018] p-8 rounded-[32px] border border-white/5 hover:border-[#D4FF00]/30 transition-all group">
            <div className="w-14 h-14 bg-[#1A2920] rounded-2xl flex items-center justify-center text-[#D4FF00] mb-6 group-hover:bg-[#D4FF00] group-hover:text-black transition-colors">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Lightning Fast</h3>
            <p className="text-[#8FA396] leading-relaxed">Built on Solana's high-performance blockchain, transactions are confirmed in milliseconds, not minutes.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#142018] p-8 rounded-[32px] border border-white/5 hover:border-[#D4FF00]/30 transition-all group">
            <div className="w-14 h-14 bg-[#1A2920] rounded-2xl flex items-center justify-center text-[#D4FF00] mb-6 group-hover:bg-[#D4FF00] group-hover:text-black transition-colors">
              <Shield className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Bank-Grade Security</h3>
            <p className="text-[#8FA396] leading-relaxed">Your keys, your crypto. Non-custodial architecture ensures you are the only one with access to your funds.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-[#142018] p-8 rounded-[32px] border border-white/5 hover:border-[#D4FF00]/30 transition-all group">
            <div className="w-14 h-14 bg-[#1A2920] rounded-2xl flex items-center justify-center text-[#D4FF00] mb-6 group-hover:bg-[#D4FF00] group-hover:text-black transition-colors">
              <Layers className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Multi-Chain Ready</h3>
            <p className="text-[#8FA396] leading-relaxed">Seamlessly switch between Solana, Ethereum, and Polygon. One wallet for the entire Web3 ecosystem.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0C120F] border-t border-white/5 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Box className="w-6 h-6 text-[#D4FF00]" />
            <span className="font-bold text-lg text-white">Kosh</span>
          </div>
          <div className="flex gap-6 text-sm text-[#8FA396]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="text-[#8FA396] text-sm">
            © 2024 Kosh Wallet. All rights reserved.
          </div>
        </div>
      </footer>

    </div >
  );
};

export default LandingPage;
