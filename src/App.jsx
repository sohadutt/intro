import { BrowserRouter } from "react-router-dom";
import { Nav } from "./comp/nav";
import "./App.css";


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
      </div>
    </BrowserRouter>
  );
}

export default App;
