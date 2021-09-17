import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";
import AddTask from "./components/AddTask";
const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Meeting in school",
      day: "Feb 5th at 1:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Go and buy groceries",
      day: "Feb 6th at 1:10pm",
      reminder: false,
    },
    {
      id: 3,
      text: "Watch netflix",
      day: "Feb 10th at 11:15pm",
      reminder: true,
    },
  ]);
  const [ShowAddTask, SetShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        title="Task Header"
        ShowAdd={ShowAddTask}
        onAdd={() => SetShowAddTask(!ShowAddTask)}
      />
      {ShowAddTask && <AddTask onAdd={addTask} />}
      <div className="mt-3">
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} setTasks={setTasks} />
        ) : (
          "No tasks to show"
        )}
      </div>
    </div>
  );
};

export default App;
