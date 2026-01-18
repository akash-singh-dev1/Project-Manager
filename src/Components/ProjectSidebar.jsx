import Button from "./Button";
const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
  isOpen,
  onClose,
}) => {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-full 
     bg-stone-900 text-stone-50 rounded-r-xl
      transform transition-transform duration-300 ease-in-out
      ${isOpen ? "translate-x-0" : "-translate-x-full"}
      sm:static sm:translate-x-0 sm:w-1/4 sm:rounded-r-xl
      flex flex-col items-center px-4 py-4
`}
    >
      <button
        onClick={onClose}
        className="self-end mb-4 sm:hidden "
        aria-label="Close sidebar"
      >
        ✕
      </button>

      <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">
        your projects
      </h2>
      <div className=" p-2 cursor-pointer">
        <Button
          onClick={() => {
            onStartAddProject();
            onClose();
          }}
        >
          + Add Project
        </Button>
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
                onClick={() => {
                  onSelectProject(project.id);
                  onClose();
                }}
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
