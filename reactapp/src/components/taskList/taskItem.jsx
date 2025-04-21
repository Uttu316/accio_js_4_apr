import styles from "./tasklist.module.css";
const TaskItem = (props) => {
  const { task } = props;
  return (
    <li className={styles.list_item}>
      <p>{task}</p>
    </li>
  );
};
export default TaskItem;
