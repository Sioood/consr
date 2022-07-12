import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Land from "./pages/Land";

import "./scss/style.scss";
import "./scss/pages/app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Land />}></Route>
          <Route path="/another" element={<Land />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
