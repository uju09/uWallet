import React from 'react'
import { SeedPhraseCard } from '../components'
import { useSeedPhrase } from '../hooks/useSeedPhrase'
import { useNavigate } from 'react-router-dom'

const SeedPhrase = () => {

  const { validatePhrase, storePhrase } = useSeedPhrase();
  const navigate = useNavigate();

  const handleConfirm = (words) => {
    const mnemonic = words.join(' ').trim();
    const isValid = validatePhrase(mnemonic);
    if (isValid) {
      storePhrase(mnemonic);
      navigate('/wallet');
    }
  }
  return (
    <div className="min-h-screen bg-[#0C120F] text-white">
      <SeedPhraseCard onConfirm={handleConfirm} />
    </div>
  )
}

export default SeedPhrase