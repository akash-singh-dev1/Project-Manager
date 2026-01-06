import NewTask from "./NewTask";

const Tasks = ({ tasks, onAdd, onDelete }) => {
  return (
    <section className=" px-2 py-2">
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAdd} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4 font-bold rounded-2xl bg-stone-100 px-2 py-2 ">
          this project does not have any tasks yet
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-2 rounded-2xl bg-stone-100 w-full overflow-x-auto  ">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center gap-4 mt-2 "
            >
              <span className="font-bold wrap-break-word">{task.text}</span>
              <button
                type="button"
                className="px-2 py-2  bg-stone-600 text-stone-100 rounded-md  hover:bg-red-400"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
export default Tasks;
