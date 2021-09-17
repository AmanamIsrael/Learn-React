import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {BrowserRouter as Router, Route} from "react-router-dom"
import Footer from './components/Footer'
import About from './components/About'
import {useEffect, useState} from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [ShowAddTask, SetShowAddTask] = useState(false);

  useEffect(()=> {
    const getTasks = async ()=> {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks().then(()=> {});
  }, [])

  //fetch tasks

  const fetchTasks = async ()=> {
    const res = await fetch('http://localhost:5000/tasks')
    return await res.json()
  }

  //fetch task

  const fetchTask = async (id)=> {
   const res =  await fetch(`http://localhost:5000/tasks/${id}`);
    return await res.json()
  }

  // add task

  const addTask = async (task) => {

    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await res.json()

    setTasks([...tasks, data])
  };
  //toggle reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()

    setTasks(
        tasks.map((task) =>
            task.id === id ? { ...task, reminder: data.reminder } : task
        )
    )
  }

  //delete task
  const DeleteTask = async (id) => {

    await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'})
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
      <Router>
        <div className="container">
          <Header
              title="Task Header"
              ShowAdd={ShowAddTask}
              onAdd={() => SetShowAddTask(!ShowAddTask)}
          />
          <Route path='/' exact render={(props)=> (
              <>
                {ShowAddTask && <AddTask onAdd={addTask} />}
                <div className="mt-3">
                  {tasks.length > 0 ? (
                      <Tasks
                          onToggle={toggleReminder}
                          onDelete={DeleteTask}
                          tasks={tasks}
                          setTasks={setTasks}
                      />
                  ) : (
                      "No tasks to show"
                  )}
                </div>
              </>
          )}/>
          <Route path='/about' component={About}/>
          <Footer/>
        </div>
      </Router>
  );
};

export default App;
