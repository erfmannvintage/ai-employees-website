import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import CookieBanner from './components/CookieBanner'
import SiteSchema from './components/SiteSchema'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Help from './pages/Help'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import Employee from './pages/Employee'
import Integrations from './pages/Integrations'
import Cookies from './pages/Cookies'

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <SiteSchema />
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/compare" element={<Navigate to="/pricing" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/help" element={<Help />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/refund" element={<Refund />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="/employee/:slug" element={<Employee />} />
              <Route path="/integrations" element={<Integrations />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <CookieBanner />
      </BrowserRouter>
    </HelmetProvider>
  )
}
