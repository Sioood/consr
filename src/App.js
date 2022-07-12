import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Land from "./pages/LandingPage/Land";
import AppPage from "./pages/AppPage/AppPage";

import "./scss/style.scss";
import "./scss/pages/app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Land />}></Route>
          <Route path="/another" element={<Land />}></Route>
          <Route path="/app" element={<AppPage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
