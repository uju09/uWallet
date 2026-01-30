import { useState } from 'react';
import { ChevronDown, Copy } from 'lucide-react';

/**
 * SecretPhraseCard Component
 * A collapsible card that displays and allows copying of a 12-word secret phrase
 */
const SecretPhraseCard = ({
  title = 'Your Secret Phrase',
  secretPhrase = [],
  defaultOpen = true,
  onCopy,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const [copied, setCopied] = useState(false);

  // Handle copy to clipboard
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

  // Toggle collapse state
  const toggleOpen = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div
      className={`bg-[#0C120F] rounded-[32px] border border-white/5 overflow-hidden shadow-2xl ${className}`}
    >
      {/* Header / Toggle Button */}
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between p-8 cursor-pointer select-none hover:bg-white/5 transition-colors"
      >
        <h3 className="text-2xl font-bold text-white tracking-tight">
          {title}
        </h3>
        <div
          className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center transition-transform duration-300 text-white ${isOpen ? 'rotate-180' : ''
            }`}
        >
          <ChevronDown className="w-5 h-5" />
        </div>
      </button>

      {/* Collapsible Content */}
      {isOpen && (
        <div
          className="px-8 pb-8 pt-0 border-t border-white/5 cursor-pointer"
          onClick={handleCopyPhrase}
        >
          {/* Secret Phrase Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
            {secretPhrase.map((word, index) => (
              <div
                key={index}
                className="bg-[#142018] rounded-xl p-4 text-white font-medium border border-white/5 hover:border-[#D4FF00]/30 transition-colors"
              >
                {word}
              </div>
            ))}
          </div>

          {/* Copy Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyPhrase();
            }}
            className="flex items-center gap-2 text-[#8FA396] hover:text-white transition-colors text-sm font-medium group"
          >
            <Copy className={`w-4 h-4 group-hover:scale-110 transition-transform ${copied ? 'text-[#D4FF00]' : ''}`} />
            {copied ? 'Copied!' : 'Click Anywhere To Copy'}
          </button>
        </div>
      )}
    </div>
  );
};

export default SecretPhraseCard;
