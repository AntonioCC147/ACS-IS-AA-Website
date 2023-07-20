import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MyNavbar from "./components/navbar/navbar";
import DefaultHome from "./pages/home/home";
import Materii from "./pages/materii/materii";
import Contact from "./pages/contact/contact";
import Footer from "./components/footer/footer";

import './App.css';

function App() {
    return (
        <div>
            <MyNavbar/>
            <Router>
                <Routes>
                    <Route exact path="/" element={<DefaultHome/>}></Route>
                    <Route path="/materii" element={<Materii/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;