import Button from "./Button";
const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl ">
      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        your projects
      </h2>
      <div className=" p-2 cursor-pointer">
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-2">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;

          const cssClasses = `text-left mx-2 my-2 w-full px-4 py-2 cursor-pointer rounded-md transition-all ${
            isSelected
              ? "bg-stone-800 text-stone-200 font-semibold"
              : "text-stone-400 hover:bg-stone-700 hover:text-stone-100"
          }`;

          return (
            <li key={project.id}>
              <button
                type="button"
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
export default ProjectSidebar;
