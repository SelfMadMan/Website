import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import NoPage from './pages/NoPage'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index  element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Terms" element={<Terms />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}