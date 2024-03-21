import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import NoPage from './pages/NoPage';
import EmailPreview from './pages/EmailPreview';

export default function App() {
  return (
    <div>
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
