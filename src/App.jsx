import { BrowserRouter } from "react-router-dom";
import { Nav } from "./comp/nav";
import "./App.css";
import { NewsletterSignup } from "./comp/form";
import { Footer } from "./comp/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="header">
          <div className="logo">
            BoardBenchers
          </div>
          <Nav />
        </div>
        <div className="form">
          <NewsletterSignup />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
