import { render, screen, fireEvent } from "@testing-library/react";
import ProjectForm from "./ProjectForm";

test("adds a project on form submission", () => {
  const addProject = jest.fn();

  render(<ProjectForm addProject={addProject} />);

  fireEvent.change(screen.getByPlaceholderText("Project title"), {
    target: { value: "New Project" },
  });

  fireEvent.change(screen.getByPlaceholderText("Description"), {
    target: { value: "Test description" },
  });

  fireEvent.click(screen.getByText("Add Project"));

  expect(addProject).toHaveBeenCalledTimes(1);
});