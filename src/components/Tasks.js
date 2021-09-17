import Task from "./Task";

export const Tasks = ({ tasks, setTasks, onToggle, onDelete }) => {
  //methods

  return (
    <>
      {tasks.map((task, index) => (
        <Task key={index} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </>
  );
};

export default Tasks;
