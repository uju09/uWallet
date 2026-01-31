import './index.css';
import LandingPage from './page/LandingPage';
import Wallet from './page/Wallet';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import SeedPhrase from './page/SeedPhrase';
import { PageTransitionProvider } from './context/PageTransitionContext';

function App() {
  return (
    <PageTransitionProvider>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/seed-phrase" element={<SeedPhrase />} />
      </Routes>
    </PageTransitionProvider>
  );
}

export default App;
