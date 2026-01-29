import './index.css';
import LandingPage from './page/LandingPage';
import Wallet from './page/Wallet';
import { Routes, Route } from 'react-router-dom';
import Login from './page/Login';
import SeedPhrase from './page/SeedPhrase';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/seed-phrase" element={<SeedPhrase />} />
      </Routes>
    </div>
  );
}

export default App;
