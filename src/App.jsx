import { BrowserRouter } from "react-router-dom";
import { Nav } from "./comp/nav";
import "./App.css";
import UseDarkMode from "./comp/useDarkmode";


function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div>
            <UseDarkMode />
          </div>
        <div className="header">
          
          <Nav />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
