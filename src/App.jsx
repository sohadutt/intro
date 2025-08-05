import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Nav } from "./comp/nav";
import "./App.css";
import { NewsletterSignup } from "./comp/form";
import { Footer } from "./comp/footer";
import { FeatureCarousel } from "./comp/content1";
import { IntroSection } from "./comp/intro";
import { RoadmapSection } from "./comp/roadmap";

import AboutPage from "./pages/about";
import FAQPage from "./pages/faqpage";
import GetInTouchPage from "./pages/getintouchpage";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="header">
          <Link to="/" className="logo">
            BoardBenchers
          </Link>
          <Nav />
        </div>

        <div className="content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <IntroSection />
                  <FeatureCarousel />
                  <RoadmapSection />
                  <div className="form">
                    <NewsletterSignup />
                  </div>
                </>
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<GetInTouchPage />} />
          </Routes>
        </div>

        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
