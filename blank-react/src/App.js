import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import PhotosPage from "./pages/PhotosPage";
import TutorialsPage from "./pages/TutorialsPage";
import ProjectsPage from "./pages/ProjectsPage";
import CSCC01 from "./pages/CSCC01";
import CSC384 from "./pages/CSC384";
import CSC236 from "./pages/CSC236";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <div className="content" style={{ overflow: "hidden" }}>
        <AnimatePresence mode="wait">
          <Routes key={location.pathname} location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/photos" element={<PhotosPage />} />
            <Route exact path="/tutorials" element={<TutorialsPage />} />
            <Route exact path="/tutorials/cscc01" element={<CSCC01 />} />
            <Route exact path="/tutorials/csc384" element={<CSC384 />} />
            <Route exact path="/tutorials/csc236" element={<CSC236 />} />
            <Route exact path="/projects" element={<ProjectsPage />} />
          </Routes>
        </AnimatePresence>
      </div>
      <Navbar />
    </div>
  );
}

export default App;
