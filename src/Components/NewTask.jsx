import { useState } from "react";
const NewTask = ({ onAddTask }) => {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    //validation task shouldn't be empty
    if (enteredTask.trim() !== "") {
      onAddTask(enteredTask);
      setEnteredTask("");
    }
  }
  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        className="bg-stone-300  focus:border-b-2 focus:outline-none px-2 rounded-sm w-full"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        type="button"
        className="px-4 py-2 cursor-pointer md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100 hover:-translate-y-1 transition-all duration-150 ease-in-out delay-75"
        onClick={handleClick}
      >
        Add
      </button>
    </div>
  );
};
export default NewTask;
