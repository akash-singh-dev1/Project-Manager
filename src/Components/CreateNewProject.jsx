import Input from "./Input";
import { useRef } from "react";
import Modal from "./Modal";
const CreateNewProject = ({ onAdd, onCancel }) => {
  // ref for project.
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  //ref for model.
  const modelRef = useRef();

  //function to save title,description,dueDate when save button is clicked.
  function handleSave() {
    console.log("handle save is working");
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    //validation.
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      //show the error model.
      modelRef.current.showModal();
      return;
    }

    //Populate the projects property (an array of objects) within the projectsState object, which is defined in the App component's state.
    //this also define the structure of property (projects) structure.
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }
  return (
    <>
      <Modal ref={modelRef} buttonCaption={"okay"} onCancel={onCancel}>
        <h2 className="font-bold uppercase">Invalid Input</h2>
        <p className="text-stone-800 mb-4">
          Oops ... looks like you forget to enter a value
        </p>
        <p className="text-stone-800 mb-4">
          Please make sure you provide a valid value for every input field
        </p>
      </Modal>

      <div className="w-140 mx-1 md:mx-auto">
        <menu className="flex items-center justify-end gap-4 my-4 ">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950 cursor-pointer"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:-translate-y-1.5 transition-all duration-150 ease-in-out delay-75 cursor-pointer"
            >
              save
            </button>
          </li>
        </menu>
        <div>
          <Input
            ref={title}
            label={"Title"}
            id={"projectTitle"}
            type={"text"}
          />
          <Input
            ref={description}
            label={"Description"}
            textarea
            id={"projectDescription"}
          />
          <Input
            ref={dueDate}
            label={"Due Date"}
            id={"projectDueDate"}
            type={"date"}
          />
        </div>
      </div>
    </>
  );
};
export default CreateNewProject;
