/* eslint-disable linebreak-style */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about-us" exact element={<AboutUs />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="*" exact element={<NotFound />} />
      </Routes>
    </Router>
  );
}
