import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing-page';
import Decrees from './pages/decrees';

import './css/global_SMAM.css'
import './css/SMAM.css'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/decrees" element={<Decrees />} />
    </Routes>
    </BrowserRouter >
  )
}

export default App
