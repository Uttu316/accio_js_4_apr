import { useState } from "react";
import styles from "./counter.module.css";
const Counter = () => {
  const [value, setValue] = useState(0); // useState fn(Hook)

  const onAdd = () => {
    setValue(value + 1);
    console.log(value);
  };
  const onMinus = () => {
    // setValue(value - 1);
    setValue((curr) => curr - 1);
    console.log(value);
  };

  console.log("Counter Rendered");
  return (
    <div className={styles.counterContainer}>
      <h1>Counter</h1>
      <h3>{value}</h3>
      <button onClick={onAdd}>Add</button>
      <button onClick={onMinus}>Minus</button>
    </div>
  );
};

export default Counter;
