import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SupportPopup from './components/cta-pop-box/SupportPopup.jsx';
import './css/global-smam.css';

const LandingPage = lazy(() => import('./pages/landing-page/landing-page.jsx'));
const OurServicesPage = lazy(() => import('./pages/our-services-page/our-services-page.jsx'));
const Decrees = lazy(() => import('./pages/decrees/decrees.module.jsx'));
const IdGenerator = lazy(() => import('./pages/id-generator/id-generator.jsx'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Navigate to="/landing" />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/services" element={<OurServicesPage />} />
        <Route path="/decrees" element={<Decrees />} />
        <Route path='/id-generator' element={<IdGenerator />} />
      </Routes>
      <SupportPopup />
    </Suspense>
  );
}

export default App; 