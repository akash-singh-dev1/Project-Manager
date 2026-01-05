import noTaskImage from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ onStartAddProject }) => {
  return (
    <div className=" flex flex-col gap-8 justify-start items-center mt-8 mx-auto">
      <img
        src={noTaskImage}
        className="size-20 object-contain drop-shadow-[5px_5px_10px_rgba(0,0,0,0.5)]"
        alt="no task image"
      />
      <h2 className="font-bold uppercase">No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <Button onClick={onStartAddProject}>+ Create new project</Button>
    </div>
  );
};
export default NoProjectSelected;
