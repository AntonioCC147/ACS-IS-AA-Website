import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import all pages
// You can change the name if you want; "DefaultHome" is not the function, but is imported from where "Home" function is
import DefaultHome from "./pages/home/home";
import DemoPage from './pages/demoPage/demoPage';

// Import CSS file
import './App.css';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<DefaultHome/>}></Route>
                <Route path="/demopage" element={<DemoPage/>}></Route>
            </Routes>
        </Router>
    );
}

// In "App" function we are making routes for pages
// "demoPage" from the "element={<demoPage/>}" is the name of the function from the demoPage.js

export default App;