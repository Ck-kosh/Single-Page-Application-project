import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProjectList from "../components/ProjectList";
import ProjectForm from "../components/ProjectForm";

function Home({ projects, addProject }) {
  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Matrix Enterprises Portfolio</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default Home;