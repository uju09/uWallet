import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Copy } from 'lucide-react';

const SecretPhraseCard = ({
  title = 'Your Secret Phrase',
  secretPhrase = [],
  defaultOpen = false,
  onCopy,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [secretPhrase, isOpen]);

  const handleCopyPhrase = async () => {
    try {
      const phraseText = secretPhrase.join(' ');
      await navigator.clipboard.writeText(phraseText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      onCopy?.();
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      className={`bg-[#0C120F] rounded-[32px] border border-white/5 overflow-hidden shadow-2xl transition-all duration-500 ease-out ${className}`}
    >
      {/* Header / Toggle Button */}
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-8 cursor-pointer select-none hover:bg-white/5 transition-all duration-300"
      >
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <div
          className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 ease-out text-white hover:border-[#D4FF00]/50 hover:bg-[#D4FF00]/10 ${isOpen ? 'rotate-180 border-[#D4FF00]/30 bg-[#D4FF00]/5' : ''
            }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
        className="transition-all duration-500 ease-out overflow-hidden"
      >
        <div
          className="px-8 pb-8 pt-0 border-t border-white/5 cursor-pointer"
          onClick={handleCopyPhrase}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {secretPhrase.map((word, index) => (
              <div
                key={index}
                style={{
                  transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
                  transform: isOpen ? 'translateY(0) scale(1)' : 'translateY(10px) scale(0.95)',
                  opacity: isOpen ? 1 : 0,
                }}
                className="bg-[#142018] rounded-xl p-4 text-white font-medium border border-white/5 hover:border-[#D4FF00]/50 hover:bg-[#1a2a20] hover:scale-105 hover:shadow-lg hover:shadow-[#D4FF00]/5 transition-all duration-300 ease-out"
              >
                <span className="text-[#D4FF00]/60 text-xs mr-2">{index + 1}.</span>
                {word}
              </div>
            ))}
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyPhrase();
            }}
            className={`flex items-center gap-2 text-sm font-medium group transition-all duration-300 ${copied
              ? 'text-[#D4FF00]'
              : 'text-[#8FA396] hover:text-white'
              }`}
          >
            <Copy
              className={`w-4 h-4 transition-all duration-300 ${copied
                ? 'scale-110 text-[#D4FF00]'
                : 'group-hover:scale-110 group-hover:rotate-[-5deg]'
                }`}
            />
            <span className="transition-all duration-300">
              {copied ? '✓ Copied!' : 'Click Anywhere To Copy'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SecretPhraseCard;

