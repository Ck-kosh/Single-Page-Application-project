import { useState } from "react";

function ProjectForm({ addProject }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const newProject = {
      id: crypto.randomUUID(),
      title,
      description,
    };

    addProject(newProject);

    setTitle("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Project</h3>

      <input
        type="text"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default ProjectForm;