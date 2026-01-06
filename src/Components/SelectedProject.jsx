import Tasks from "./Tasks";
const SelectedProject = ({
  project,
  onProjectDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="px-2 mt-1 mx-auto flex flex-col flex-1 ">
      <header className="pb-2 mb-2 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-stone-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={() => onProjectDelete(project.id)}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-2 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks} />
    </div>
  );
};
export default SelectedProject;
