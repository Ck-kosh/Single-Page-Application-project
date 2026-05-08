import { useState } from "react";

function ProjectForm({ addProject }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title || !form.description) return;

    addProject(form);

    setForm({
      title: "",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <input
        type="text"
        placeholder="Project title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <textarea
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({ ...form, description: e.target.value })
        }
      />

      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;