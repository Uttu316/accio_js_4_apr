import styles from "./tasklist.module.css";
const TaskList = () => {
  const title = "My Task List";

  const tasks = [
    { task: "Wake Up", id: "12121" },
    { task: "Break Fast", id: "3232" },
    { task: "Work", id: "4343" },
    { task: "Rest", id: "43121" },
    { task: "Play", id: "3238" },
    { task: "Sleep", id: "9893" },
  ];
  const total = tasks.length;
  return (
    <div className={styles.list_container}>
      <h2 className={styles.list_title}>{title}</h2>
      <h3 className={styles.list_total}>Total Tasks {total}</h3>

      {total > 0 && (
        <ul className={styles.task_list}>
          {tasks.map((item) => (
            <li key={item.id} className={styles.list_item}>
              <p>{item.task}</p>
            </li>
          ))}
        </ul>
      )}
      {total === 0 && <h4>No task Available</h4>}
    </div>
  );
};

export default TaskList;
