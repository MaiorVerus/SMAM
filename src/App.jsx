import { Routes, Route, Navigate } from 'react-router-dom';

import LandingPage from './pages/landing-page/landing-page.jsx';
import OurServicesPage from './pages/our-services-page/our-services-page.jsx';
// import Decrees from './pages/decrees.jsx';


import './css/global-smam.css';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/services" element={<OurServicesPage />} />
      {/* <Route path="/decrees" element={<Decrees />} /> */}
    </Routes>
  );
}

export default App; 