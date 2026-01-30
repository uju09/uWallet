import { useState } from 'react';
import { ShieldCheck, Clipboard, Check, X } from 'lucide-react';
import { useSeedPhrase } from '../hooks/useSeedPhrase';

const SeedPhraseCard = ({ onConfirm }) => {
  const [words, setWords] = useState(Array(12).fill(''));
  const [focusedIndex, setFocusedIndex] = useState(null);
  const [isPasted, setIsPasted] = useState(false);

  const { clearSeedPhrase, generatePhrase } = useSeedPhrase();

  const handleWordChange = (index, value) => {
    const newWords = [...words];
    newWords[index] = value.toLowerCase().trim();
    setWords(newWords);
  };

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      const pastedWords = text.trim().split(/\s+/).slice(0, 12);
      const newWords = [...words];
      pastedWords.forEach((word, i) => {
        if (i < 12) newWords[i] = word.toLowerCase();
      });
      setWords(newWords);
      setIsPasted(true);
      setTimeout(() => setIsPasted(false), 2000);
    } catch (err) {
      console.error('Failed to read clipboard');
    }
  };

  const handleGenerate = () => {
    const mnemonic = generatePhrase();
    const words = mnemonic.split(' ');
    setWords(words);
    console.log(words);

  }

  const handleSubmit = () => {
    const filledWords = words.filter(w => w.length > 0);
    if (filledWords.length === 12 && onConfirm) {
      onConfirm(words);
    }
  };

  const handleClear = () => {
    setWords(Array(12).fill(''));
    clearSeedPhrase();
  };

  const isComplete = words.every(w => w.length > 0);

  return (
    <div className="min-h-screen bg-[#0C120F] flex items-center justify-center p-4">
      <div className="bg-[#142018] rounded-[32px] p-6 border border-white/5 shadow-2xl relative overflow-hidden w-full max-w-md">
        {/* Decorative Blur */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4FF00] opacity-5 blur-[50px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D4FF00] opacity-5 blur-[40px] rounded-full pointer-events-none"></div>

        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-[#D4FF00] font-semibold text-sm uppercase tracking-wider">Recovery Phrase</h3>
            <p className="text-[#8FA396] text-xs mt-1">Enter your 12-word seed phrase</p>
          </div>
          <div className="w-10 h-10 bg-[#1A2920] rounded-xl flex items-center justify-center border border-white/5">
            <ShieldCheck className="w-5 h-5 text-[#D4FF00]" />
          </div>
        </div>

        {/* Paste & Clear Buttons */}
        <div className="flex gap-2 mb-4">
          <button
            onClick={handlePaste}
            className="flex-1 bg-[#1A2920] hover:bg-[#253d2c] border border-white/5 hover:border-[#D4FF00]/30 text-white py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all text-xs font-bold uppercase tracking-wider"
          >
            {isPasted ? (
              <>
                <Check className="w-4 h-4 text-[#D4FF00]" />
                <span className="text-[#D4FF00]">Pasted!</span>
              </>
            ) : (
              <>
                <Clipboard className="w-4 h-4" />
                Paste from Clipboard
              </>
            )}
          </button>
          <button
            onClick={handleClear}
            className="px-4 bg-[#1A2920] hover:bg-red-500/10 border border-white/5 hover:border-red-500/30 text-[#8FA396] hover:text-red-400 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all text-xs font-bold uppercase tracking-wider"
          >
            <X className="w-4 h-4" />
            Clear
          </button>
        </div>

        {/* 12 Word Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {words.map((word, index) => (
            <div key={index} className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[#8FA396] font-mono select-none z-10">
                {index + 1}
              </span>
              <input
                type="text"
                value={word}
                onChange={(e) => handleWordChange(index, e.target.value)}
                onFocus={() => setFocusedIndex(index)}
                onBlur={() => setFocusedIndex(null)}
                placeholder="word"
                className={`w-full bg-[#1A2920] rounded-xl py-4 pl-9 pr-3 text-sm font-medium font-mono transition-all focus:outline-none ${focusedIndex === index
                  ? 'text-white border border-[#D4FF00]/50 shadow-[0_0_10px_rgba(212,255,0,0.1)]'
                  : word
                    ? 'text-white border border-white/10'
                    : 'text-white/30 border border-transparent placeholder-white/20'
                  }`}
              />
            </div>
          ))}
        </div>


        {/* Progress Indicator */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[10px] text-[#8FA396] uppercase tracking-wider font-bold">Progress</span>
            <span className="text-[10px] text-white font-mono">{words.filter(w => w).length}/12</span>
          </div>
          <div className="h-1.5 bg-[#1A2920] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D4FF00] rounded-full transition-all duration-300"
              style={{ width: `${(words.filter(w => w).length / 12) * 100}%` }}
            />
          </div>
        </div>

        {/* Confirm Button */}
        <div className="flex flex-col gap-4">
          <button
            onClick={handleSubmit}
            disabled={!isComplete}
            className={`w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 ${isComplete
              ? 'bg-[#D4FF00] hover:bg-[#bce600] text-black shadow-lg shadow-[#D4FF00]/10'
              : 'bg-[#1A2920] text-[#8FA396] cursor-not-allowed'
              }`}
          >
            {isComplete ? 'Continue' : 'Enter all 12 words'}
          </button>
          <button className='w-full py-3.5 rounded-xl font-bold transition-all flex items-center justify-center gap-2 bg-[#1A2920] text-[#8FA396] bg-[#D4FF00] hover:bg-[#bce600] text-black shadow-lg shadow-[#D4FF00]/10' onClick={handleGenerate}>Generate Seed Phrase</button>
        </div>

        {/* Security Note */}
        <p className="text-[10px] text-[#8FA396] text-center mt-4 leading-relaxed">
          Never share your seed phrase. Anyone with access to it can control your wallet.
        </p>
      </div>
    </div>
  );
};

export default SeedPhraseCard;
