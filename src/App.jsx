import "./App.css";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route index element={<Hero />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
