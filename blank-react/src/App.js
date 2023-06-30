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

/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div> */
