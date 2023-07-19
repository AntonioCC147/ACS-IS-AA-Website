import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import DefaultHome from "./pages/home/home";
import Materii from "./pages/materii/materii";
import Contact from "./pages/contact/contact";

import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<DefaultHome/>}></Route>
                <Route path="/materii" element={<Materii/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </Router>
    );
}

export default App;