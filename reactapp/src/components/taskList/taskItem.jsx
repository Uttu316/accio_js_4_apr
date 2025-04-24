import styles from "./tasklist.module.css";
const TaskItem = (props) => {
  const { task, id, setTasks } = props;

  const onDlt = () => {
    setTasks((currTasks) => {
      let tasksLeft = currTasks.filter((i) => i.id !== id);
      return tasksLeft;
    });
  };
  return (
    <li className={styles.list_item}>
      <p>{task}</p>
      <button onClick={onDlt}>❌</button>
    </li>
  );
};

export default TaskItem;
