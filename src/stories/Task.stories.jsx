import Tasks from "../Components/Tasks";

export const EmptyTasks = () => (
  <Tasks tasks={[]} onAdd={() => {}} onDelete={() => {}} />
);

export const WithTasks = () => (
  <Tasks
    tasks={[
      { id: "t1", text: "Learn React" },
      { id: "t2", text: "Style Tasks UI" },
    ]}
    onAdd={() => {
      console.log("task added");
    }}
    onDelete={() => {
      console.log("task deleted");
    }}
  />
);
