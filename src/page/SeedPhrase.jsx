import React from 'react'
import { SeedPhraseCard } from '../components'
import { useSeedPhrase } from '../hooks/useSeedPhrase'
import { usePageTransition } from '../context/PageTransitionContext'

const SeedPhrase = () => {

  const { validatePhrase, storePhrase } = useSeedPhrase();
  const { navigateWithTransition } = usePageTransition();

  const handleConfirm = (words) => {
    const mnemonic = words.join(' ').trim();
    const isValid = validatePhrase(mnemonic);
    if (isValid) {
      storePhrase(mnemonic);
      navigateWithTransition('/wallet', 'Loading your wallet...');
    }
  }
  return (
    <div className="min-h-screen bg-[#0C120F] text-white">
      <SeedPhraseCard onConfirm={handleConfirm} />
    </div>
  )
}

export default SeedPhrase