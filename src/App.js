import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/home/home";
import PrivateRouter from "./routes/PrivateRouter";
import PageRender from "./routes/PageRender";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route exact path="/" element={<PrivateRouter />}>
          <Route exact path="/:page" element={<PageRender />} />
        </Route>

        <Route exact path="/" element={<PrivateRouter />}>
          <Route exact path="/:page/:id" element={<PageRender />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
