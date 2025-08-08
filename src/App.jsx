import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import logo from "@/assets/img/icon/logo_hires.webp"

import { Nav } from "./comp/nav";
import { Footer } from "./comp/footer";
import { NewsletterSignup } from "./comp/form";
import { Home } from "./comp/home";

import AboutPage from "./pages/about";
import FAQPage from "./pages/faqpage";
import GetInTouchPage from "./pages/getintouchpage";
import TermsOfUse from "./pages/termsofuse";
import PrivacyPolicy from "./pages/privacyPolicy";
import "./App.css";

function ScrollToTopWithLenis() {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
      lenis.resize();
    }
  }, [location.pathname, lenis]);

  return null;
}

function App() {
  return (
    <ReactLenis root>
      <BrowserRouter>
        <ScrollToTopWithLenis />
        <div className="main">
          {/* Header */}
          <div className="header p-4 flex justify-between items-center border-b">
            <Link to="/" className="logo flex items-center gap-2 text-xl font-bold text-primary">
              <img src={logo} alt="Logo" className="h-8 w-auto" />
              Board&Benchers
            </Link>
            <Nav />
          </div>

          {/* Page Content */}
          <div className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Home />
                    <div className="form px-6 py-12">
                      <NewsletterSignup />
                    </div>
                  </>
                }
              />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/contact" element={<GetInTouchPage />} />
              <Route path="/tos" element={<TermsOfUse />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </div>

          {/* Footer */}
          <div className="footer border-t py-6">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </ReactLenis>
  );
}

export default App;