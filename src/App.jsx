import "./App.css";
import CreateNewProject from "./Components/CreateNewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSidebar from "./Components/ProjectSidebar";
import { useState } from "react";
import SelectedProject from "./Components/SelectedProject";

const App = () => {
  /* state which is a object which consist of two property 1) selectedProjectId and 2) projects.
  selectedProjectId is used to know which project to show out of all project in the UI and if no project is selected it show NoProjectSelected component.
  value undefined for selectedProjectId means there is no project selected, value null means we are adding a new project and CreateNewProject component will be shown in UI.
  projects property is an array of object which will have object of the structure
  { title: enteredTitle,
    description: enteredDescription,
    dueDate: enteredDueDate, 
    id: unique string,
        }*/

  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  //function to open CreateNewProject component when we click on the button Add Project.
  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  /*function will receive data(projectData) and add it to projectsState's projects property.
  before adding the data it add a unique id :value to it.
  one more thing projectData hear also defining the structure of the object inside the array  projects of the projectsState variable(state variable) */
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newProject = {
        ...projectData,
        id: crypto.randomUUID(),
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }

  //function to cancel the CreateNewProject and show NoProjectSelected.
  const handleCancel = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  //function to show selected project from sidebar to UI onClick.
  const showSelectedProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  };

  console.log(projectsState);

  //constant to know which project is Right now selected it is basically a object .
  const selectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );
  console.log("this is selected project", selectedProject);

  //function to delete the project from SelectedProject component it receive project id and delete that id(object) from projects's array.
  const handleDeleteProject = (idToDelete) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== idToDelete
        ),
      };
    });
  };

  //variable to know which component to show NoProjectSelected or CreateNewProject or SavedProject.
  let content = (
    <SelectedProject
      project={selectedProject}
      onProjectDelete={handleDeleteProject}
    />
  );
  if (projectsState.selectedProjectId === null) {
    content = (
      <CreateNewProject onAdd={handleAddProject} onCancel={handleCancel} />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8 [border:solid_aqua_5px]">
      <ProjectSidebar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={showSelectedProject}
        selectedProjectId={selectedProject?.id}
      />
      {content}
    </main>
  );
};
export default App;
