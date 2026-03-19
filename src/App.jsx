import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';

import LandingPage from './pages/landing-page.jsx';
import OurServicesPage from './pages/our-services-page.jsx';
import Decrees from './pages/decrees.jsx';


import './css/global_SMAM.css';


const router = createBrowserRouter([
  
  { path: "/", element: <Navigate to="/landing" /> },
  { path: "/landing", element: <LandingPage /> },
  { path: "/services", element: <OurServicesPage /> },
  // { path: "/decrees", element: <Decrees /> },
  
], { basename: "/SMAM/" });

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App; 