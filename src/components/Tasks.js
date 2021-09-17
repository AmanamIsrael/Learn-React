import Task from "./Task";

export const Tasks = ({ tasks, setTasks }) => {
  //methods

  //delete task
  const DeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };
  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  return (
    <>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onToggle={toggleReminder}
          onDelete={DeleteTask}
        />
      ))}
    </>
  );
};

export default Tasks;
