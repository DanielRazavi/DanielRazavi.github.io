import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <div className="content" style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotosPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
