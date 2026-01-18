// reducers/projectsReducer.js

export const initialState = {
  selectedProjectId: undefined, // undefined = no project selected
  projects: [], // projects contain tasks
};

export function projectsReducer(state, action) {
  switch (action.type) {
    case "START_ADD_PROJECT":
      return {
        ...state,
        selectedProjectId: null, // null = create project mode
      };

    case "ADD_PROJECT": {
      const newProject = {
        ...action.projectData,
        id: crypto.randomUUID(),
        tasks: [],
      };

      return {
        ...state,
        selectedProjectId: undefined,
        projects: [...state.projects, newProject],
      };
    }

    case "SELECT_PROJECT":
      return {
        ...state,
        selectedProjectId: action.projectId,
      };

    case "DELETE_PROJECT":
      return {
        ...state,
        selectedProjectId: undefined,
        projects: state.projects.filter(
          (project) => project.id !== action.projectId,
        ),
      };

    case "ADD_TASK":
      return {
        ...state,
        projects: state.projects.map((project) =>
          project.id === state.selectedProjectId
            ? {
                ...project,
                tasks: [
                  ...project.tasks,
                  {
                    id: crypto.randomUUID(),
                    text: action.text,
                  },
                ],
              }
            : project,
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        projects: state.projects.map((project) => ({
          ...project,
          tasks: project.tasks.filter((task) => task.id !== action.taskId),
        })),
      };

    default:
      return state; // VERY important
  }
}
