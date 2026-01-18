// context/ProjectsContext.jsx

import { createContext, useContext, useEffect, useReducer } from "react";
import { projectsReducer, initialState } from "../reducers/projectsReducer";

const ProjectsContext = createContext(null);

// Load state ONCE from localStorage (lazy init)
function init(initialState) {
  const storedState = localStorage.getItem("projectsState");
  return storedState ? JSON.parse(storedState) : initialState;
}

export const ProjectsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    projectsReducer,
    initialState,
    init, // important for performance
  );

  // Persist state whenever it changes
  useEffect(() => {
    localStorage.setItem("projectsState", JSON.stringify(state));
  }, [state]);

  return (
    <ProjectsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};

// Custom hook (clean & safe)
export const useProjects = () => {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used inside ProjectsProvider");
  }
  return context;
};
