import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import initialProjects from "./data/project";

function App() {
  const [projects, setProjects] = useState(initialProjects);

  function addProject(newProject) {
    setProjects([...projects, newProject]);
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home projects={projects} addProject={addProject} />}
        />
        <Route
          path="/project/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </Router>
  );
}

export default App;