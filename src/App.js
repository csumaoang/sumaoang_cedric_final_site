import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkExperiencePage from "./pages/WorkExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import ResourcesPage from "./pages/ResourcesPage";
import DeveloperSetupPage from "./pages/DeveloperSetupPage";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/work-experience">Work Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/resources">Resources</Link>
            </li>
            <li>
              <Link to="/developer-setup">Developer Setup</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/work-experience" element={<WorkExperiencePage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/developer-setup" element={<DeveloperSetupPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
