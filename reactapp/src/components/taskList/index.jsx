import { useState } from "react";
import TaskItem from "./taskItem";
import styles from "./tasklist.module.css";
const TaskList = (props) => {
  const { title } = props;

  let [input, setInput] = useState("");
  const [tasks, setTasks] = useState([
    { task: "Wake Up", id: "12121" },
    { task: "Break Fast", id: "3232" },
    { task: "Work", id: "4343" },
    { task: "Rest", id: "43121" },
    { task: "Play", id: "3238" },
    { task: "Sleep", id: "9893" },
  ]);

  const total = tasks.length;

  const onInput = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onAdd = () => {
    let id = parseInt(Math.random() * 1000); // a random 3 digit id
    setTasks([{ id, task: input }, ...tasks]);
    /* creating a new array, 
      copying older tasks and adding new task with id*/
    setInput("");
  };
  return (
    <div className={styles.list_container}>
      <h2 className={styles.list_title}>{title}</h2>

      <input value={input} placeholder="Enter a task...." onChange={onInput} />
      <button onClick={onAdd}>Add Task</button>

      <h3 className={styles.list_total}>Total Tasks {total}</h3>

      {total > 0 && (
        <ul className={styles.task_list}>
          {tasks.map((item) => (
            <TaskItem
              id={item.id}
              setTasks={setTasks}
              task={item.task}
              key={item.id}
            />
          ))}
        </ul>
      )}
      {total === 0 && <h4>No task Available</h4>}
    </div>
  );
};

export default TaskList;
