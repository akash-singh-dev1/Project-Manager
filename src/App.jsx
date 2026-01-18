import "./App.css";
import CreateNewProject from "./Components/CreateNewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./Components/SelectedProject";
import menuIcon from "./assets/menu.png";
import { useProjects } from "./Contexts/ProjectsContext";

const App = () => {
  const { state, dispatch } = useProjects();

  //state for sidebar.
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  //constant to know which project is Right now selected it is basically a object .
  const selectedProject = state.projects.find(
    (project) => project.id === state.selectedProjectId,
  );

  //variable to know which component to show NoProjectSelected or CreateNewProject or SavedProject.
  let content = (
    <SelectedProject
      project={selectedProject}
      onDeleteProject={(id) =>
        dispatch({ type: "DELETE_PROJECT", projectId: id })
      }
      onAddTask={(text) => dispatch({ type: "ADD_TASK", text })}
      onDeleteTask={(id) => dispatch({ type: "DELETE_TASK", taskId: id })}
    />
  );
  if (state.selectedProjectId === null) {
    content = (
      <CreateNewProject
        onAdd={(data) => dispatch({ type: "ADD_PROJECT", projectData: data })}
        onCancel={() =>
          dispatch({ type: "SELECT_PROJECT", projectId: undefined })
        }
      />
    );
  } else if (state.selectedProjectId === undefined) {
    content = (
      <NoProjectSelected
        onStartAddProject={() => dispatch({ type: "START_ADD_PROJECT" })}
      />
    );
  }
  return (
    <main className="min-h-screen my-8 flex gap-4 relative">
      <button
        type="button"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Toggle Menu"
        className="absolute top-2 left-2 cursor-pointer sm:hidden"
      >
        <img src={menuIcon} alt="menu-icon" className="w-10" />
      </button>
      <ProjectSidebar
        projects={state.projects}
        selectedProjectId={selectedProject?.id}
        onSelectProject={(id) =>
          dispatch({ type: "SELECT_PROJECT", projectId: id })
        }
        onStartAddProject={() => dispatch({ type: "START_ADD_PROJECT" })}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      {content}
    </main>
  );
};
export default App;
