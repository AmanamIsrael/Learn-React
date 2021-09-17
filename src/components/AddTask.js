import { useState } from "react";
function AddTask({ onAdd }) {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();
    if (!text) {
      alert("please add task");
    }
    // add task

    onAdd({ text, day, reminder });

    //clear form

    setText("");
    setDay("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={submitForm}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add task"
          id="task"
        />
      </div>
      <div className="form-control">
        <label htmlFor="day">Day and Time</label>
        <input
          type="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
          placeholder="Day and time"
          id="day"
        />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="reminder">Set Reminder</label>
        <input
          checked={reminder}
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
          type="checkbox"
          id="reminder"
        />
      </div>
      <input type="submit" className="btn btn-block" value="Save Task" />
    </form>
  );
}

export default AddTask;
