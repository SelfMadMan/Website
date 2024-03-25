import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NoPage from './pages/NoPage';
import EmailPreview from './pages/EmailPreview';
import GoogleTagManager from './GoogleTafManager';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getAnalytics, logEvent } from "firebase/analytics";

const usePageTracking = () => {
  const location = useLocation();
  const analytics = getAnalytics();

  useEffect(() => {
    logEvent(analytics, 'page_view', {
      page_path: location.pathname,
    });
  }, [location]);
};

// Then, in your App component or individual pages, you can call usePageTracking

export default function App() {
  return (
    <div> 
    <GoogleTagManager/>
      <BrowserRouter>
        <Routes>        
         
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/email-preview" element={<EmailPreview />} /> {/* New route for email preview */}
          <Route path="*" element={<NoPage />} />
 
        </Routes>
      </BrowserRouter>
    </div>
  );
}
