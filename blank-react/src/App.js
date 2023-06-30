import Navbar from "./Navbar";
import HomePage from "./HomePage";
import PhotosPage from "./PhotosPage";
import TutorialsPage from "./TutorialsPage";
import ProjectsPage from "./ProjectsPage";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/photos">
              <PhotosPage />
            </Route>
            <Route path="/tutorials">
              <TutorialsPage />
            </Route>
            <Route path="/projects">
              <ProjectsPage />
            </Route>
          </Switch>
        </div>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
