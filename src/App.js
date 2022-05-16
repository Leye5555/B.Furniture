import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";





export default function App() {
    return ( 
        <Router>
             <Routes>
                 <Route path="/" exact element={<Home />} />
                 <Route path="*" exact element={<NotFound />} />
             </Routes>
        </Router>
    )
}